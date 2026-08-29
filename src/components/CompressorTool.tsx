"use client";

import { useEffect, useRef, useState } from "react";
import UploadBox from "./UploadBox";
import CompressionSettings from "./CompressionSettings";
import CompressionResult from "./CompressionResult";
import {
  compressImage,
  getImageDimensions,
  validateImageFile,
  ImageDimensions,
  CompressionResult as CompressionResultType,
} from "@/lib/imageCompressor";
import { OutputFormat, buildOutputFilename } from "@/lib/utils";

export default function CompressorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [originalPreviewUrl, setOriginalPreviewUrl] = useState<string | null>(null);
  const [originalDimensions, setOriginalDimensions] = useState<ImageDimensions | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [quality, setQuality] = useState(80);
  const [format, setFormat] = useState<OutputFormat>("original");
  const [resizeEnabled, setResizeEnabled] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);

  const [isCompressing, setIsCompressing] = useState(false);
  const [result, setResult] = useState<CompressionResultType | null>(null);
  const [compressedPreviewUrl, setCompressedPreviewUrl] = useState<string | null>(null);

  const objectUrlsRef = useRef<string[]>([]);

  const trackUrl = (url: string) => {
    objectUrlsRef.current.push(url);
    return url;
  };

  useEffect(() => {
    return () => {
      objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const handleFileSelected = async (selected: File) => {
    setError(null);
    try {
      validateImageFile(selected);
      const dims = await getImageDimensions(selected);
      setFile(selected);
      setOriginalDimensions(dims);
      setWidth(dims.width);
      setHeight(dims.height);
      setOriginalPreviewUrl(trackUrl(URL.createObjectURL(selected)));
      setResult(null);
      setCompressedPreviewUrl(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong reading that file.");
    }
  };

  const handleCompress = async () => {
    if (!file) return;
    setIsCompressing(true);
    setError(null);
    try {
      const output = await compressImage(file, {
        quality: quality / 100,
        format,
        targetWidth: resizeEnabled ? width : undefined,
        targetHeight: resizeEnabled ? height : undefined,
      });
      setResult(output);
      setCompressedPreviewUrl(trackUrl(URL.createObjectURL(output.blob)));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Compression failed. Please try a different file."
      );
    } finally {
      setIsCompressing(false);
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const url = URL.createObjectURL(result.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = buildOutputFilename(result.mime);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    objectUrlsRef.current = [];
    setFile(null);
    setOriginalPreviewUrl(null);
    setOriginalDimensions(null);
    setResult(null);
    setCompressedPreviewUrl(null);
    setError(null);
    setResizeEnabled(false);
    setFormat("original");
    setQuality(80);
    setMaintainAspectRatio(true);
  };

  const showResult = result && compressedPreviewUrl && originalPreviewUrl && originalDimensions && file;

  return (
    <div className="rounded-xl2 border border-line bg-surface p-5 shadow-card sm:p-8">
      {!file && <UploadBox onFileSelected={handleFileSelected} error={error} />}

      {file && !showResult && originalDimensions && (
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="flex items-center justify-between px-1 pb-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                Preview
              </span>
              <span className="stat-mono text-xs text-muted">
                {originalDimensions.width}×{originalDimensions.height} ·{" "}
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </span>
            </div>
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-line bg-paper">
              {originalPreviewUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={originalPreviewUrl}
                  alt="Selected image preview"
                  className="h-full w-full object-contain"
                />
              )}
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 text-sm font-medium text-muted underline-offset-4 hover:text-ink hover:underline"
            >
              Choose a different image
            </button>
            {error && (
              <p role="alert" className="mt-3 text-sm text-amber">
                {error}
              </p>
            )}
          </div>

          <CompressionSettings
            quality={quality}
            onQualityChange={setQuality}
            format={format}
            onFormatChange={setFormat}
            resizeEnabled={resizeEnabled}
            onToggleResize={(enabled) => {
              setResizeEnabled(enabled);
              if (enabled && originalDimensions) {
                setWidth(originalDimensions.width);
                setHeight(originalDimensions.height);
              }
            }}
            width={width}
            height={height}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
            maintainAspectRatio={maintainAspectRatio}
            onToggleAspectRatio={setMaintainAspectRatio}
            originalDimensions={originalDimensions}
            onCompress={handleCompress}
            isCompressing={isCompressing}
          />
        </div>
      )}

      {showResult && (
        <CompressionResult
          originalPreviewUrl={originalPreviewUrl!}
          originalSize={file!.size}
          originalDimensions={originalDimensions!}
          compressedPreviewUrl={compressedPreviewUrl!}
          compressedSize={result!.blob.size}
          compressedDimensions={{ width: result!.width, height: result!.height }}
          downloadFilename={buildOutputFilename(result!.mime)}
          onDownload={handleDownload}
          onReset={handleReset}
        />
      )}
    </div>
  );
}
