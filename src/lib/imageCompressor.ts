import { mimeForFormat, OutputFormat } from "./utils";

export const ACCEPTED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
export const MAX_FILE_SIZE_BYTES = 25 * 1024 * 1024; // 25 MB

export interface ImageDimensions {
  width: number;
  height: number;
}

export interface CompressionOptions {
  quality: number; // 0.1 - 1.0
  format: OutputFormat;
  targetWidth?: number;
  targetHeight?: number;
}

export interface CompressionResult {
  blob: Blob;
  mime: string;
  width: number;
  height: number;
}

export class UnsupportedFileError extends Error {}
export class FileTooLargeError extends Error {}
export class CompressionError extends Error {}

/** Validates a File before any processing happens. */
export function validateImageFile(file: File): void {
  if (!ACCEPTED_MIME_TYPES.includes(file.type)) {
    throw new UnsupportedFileError(
      "Unsupported file type. Please upload a JPG, PNG, or WebP image."
    );
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    throw new FileTooLargeError(
      `File is too large. Maximum size is ${MAX_FILE_SIZE_BYTES / (1024 * 1024)} MB.`
    );
  }
}

/** Loads a File into an HTMLImageElement via an object URL. Caller should revoke the URL when done. */
function loadImageElement(file: File): Promise<{ img: HTMLImageElement; url: string }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => resolve({ img, url });
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new CompressionError("Could not read this image. The file may be corrupted."));
    };
    img.src = url;
  });
}

/** Returns the natural pixel dimensions of an image file without compressing it. */
export async function getImageDimensions(file: File): Promise<ImageDimensions> {
  const { img, url } = await loadImageElement(file);
  const dims = { width: img.naturalWidth, height: img.naturalHeight };
  URL.revokeObjectURL(url);
  return dims;
}

/**
 * Compresses (and optionally resizes) an image file entirely in the browser
 * using the Canvas API. Nothing is uploaded anywhere.
 */
export async function compressImage(
  file: File,
  options: CompressionOptions
): Promise<CompressionResult> {
  validateImageFile(file);

  const { img, url } = await loadImageElement(file);

  try {
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    const targetWidth = Math.max(1, Math.round(options.targetWidth ?? naturalWidth));
    const targetHeight = Math.max(1, Math.round(options.targetHeight ?? naturalHeight));

    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new CompressionError("Your browser does not support canvas image processing.");
    }

    // Smooth downscaling for better visual quality when resizing.
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Formats without alpha (JPEG) render transparent pixels as black by
    // default, so paint a white background first for a predictable result.
    const outputMime = mimeForFormat(options.format, file.type);
    if (outputMime === "image/jpeg") {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, targetWidth, targetHeight);
    }

    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

    const blob: Blob | null = await new Promise((resolve) => {
      canvas.toBlob(
        (result) => resolve(result),
        outputMime,
        outputMime === "image/png" ? undefined : options.quality
      );
    });

    if (!blob) {
      throw new CompressionError("Compression failed. Try a different format or quality.");
    }

    return { blob, mime: outputMime, width: targetWidth, height: targetHeight };
  } finally {
    URL.revokeObjectURL(url);
  }
}
