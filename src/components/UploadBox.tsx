"use client";

import { useCallback, useRef, useState } from "react";
import { ACCEPTED_MIME_TYPES, MAX_FILE_SIZE_BYTES } from "@/lib/imageCompressor";
import { formatBytes } from "@/lib/utils";

interface UploadBoxProps {
  onFileSelected: (file: File) => void;
  error: string | null;
}

export default function UploadBox({ onFileSelected, error }: UploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      const file = files?.[0];
      if (file) onFileSelected(file);
    },
    [onFileSelected]
  );

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current += 1;
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current -= 1;
    if (dragCounter.current <= 0) setIsDragging(false);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="w-full">
      <div
        role="button"
        tabIndex={0}
        aria-label="Upload an image by dragging it here or pressing Enter to browse files"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        className={`group relative flex min-h-[280px] cursor-pointer flex-col items-center justify-center gap-4 rounded-xl2 border-2 border-dashed px-6 py-12 text-center transition-all duration-200 ${
          isDragging
            ? "border-teal bg-teal-light scale-[1.01]"
            : "border-line bg-paper hover:border-teal/60 hover:bg-teal-light/40"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_MIME_TYPES.join(",")}
          className="sr-only"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full transition-colors ${
            isDragging ? "bg-teal text-white" : "bg-ink text-paper"
          }`}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 15V3m0 0 4 4m-4-4L8 7" />
            <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
          </svg>
        </div>

        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {isDragging ? "Drop your image here" : "Drag and drop your image"}
          </p>
          <p className="mt-1 text-sm text-muted">or click to browse from your device</p>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current?.click();
          }}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Choose Image
        </button>

        <p className="text-xs text-muted">
          JPG, PNG, or WebP · up to {formatBytes(MAX_FILE_SIZE_BYTES)}
        </p>
      </div>

      {error && (
        <div
          role="alert"
          className="mt-3 flex items-start gap-2 rounded-lg border border-amber/40 bg-amber-light px-4 py-3 text-sm text-ink"
        >
          <svg
            className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
