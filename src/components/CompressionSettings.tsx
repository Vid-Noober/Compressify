"use client";

import { OutputFormat } from "@/lib/utils";
import { ImageDimensions } from "@/lib/imageCompressor";

interface CompressionSettingsProps {
  quality: number;
  onQualityChange: (value: number) => void;
  format: OutputFormat;
  onFormatChange: (value: OutputFormat) => void;
  resizeEnabled: boolean;
  onToggleResize: (value: boolean) => void;
  width: number;
  height: number;
  onWidthChange: (value: number) => void;
  onHeightChange: (value: number) => void;
  maintainAspectRatio: boolean;
  onToggleAspectRatio: (value: boolean) => void;
  originalDimensions: ImageDimensions;
  onCompress: () => void;
  isCompressing: boolean;
}

const formatOptions: { value: OutputFormat; label: string }[] = [
  { value: "original", label: "Original" },
  { value: "jpeg", label: "JPG" },
  { value: "png", label: "PNG" },
  { value: "webp", label: "WebP" },
];

export default function CompressionSettings({
  quality,
  onQualityChange,
  format,
  onFormatChange,
  resizeEnabled,
  onToggleResize,
  width,
  height,
  onWidthChange,
  onHeightChange,
  maintainAspectRatio,
  onToggleAspectRatio,
  originalDimensions,
  onCompress,
  isCompressing,
}: CompressionSettingsProps) {
  const aspectRatio = originalDimensions.width / originalDimensions.height;

  const handleWidthInput = (value: number) => {
    onWidthChange(value);
    if (maintainAspectRatio && aspectRatio) {
      onHeightChange(Math.round(value / aspectRatio));
    }
  };

  const handleHeightInput = (value: number) => {
    onHeightChange(value);
    if (maintainAspectRatio && aspectRatio) {
      onWidthChange(Math.round(value * aspectRatio));
    }
  };

  return (
    <div className="flex flex-col gap-7">
      {/* Quality */}
      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor="quality" className="font-display text-sm font-semibold text-ink">
            Compression quality
          </label>
          <span className="stat-mono text-sm font-semibold text-teal-dark">{quality}%</span>
        </div>
        <input
          id="quality"
          type="range"
          min={10}
          max={100}
          step={1}
          value={quality}
          onChange={(e) => onQualityChange(Number(e.target.value))}
          className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-teal"
        />
        <div className="mt-1.5 flex justify-between text-xs text-muted">
          <span>Smaller file</span>
          <span>Higher quality</span>
        </div>
        {format === "png" && (
          <p className="mt-2 text-xs text-muted">
            PNG is lossless — quality mainly affects resizing, not file compression.
          </p>
        )}
      </div>

      {/* Format */}
      <div>
        <span className="font-display text-sm font-semibold text-ink">Output format</span>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {formatOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onFormatChange(opt.value)}
              aria-pressed={format === opt.value}
              className={`rounded-lg border px-2 py-2 text-sm font-medium transition-colors ${
                format === opt.value
                  ? "border-teal bg-teal-light text-teal-dark"
                  : "border-line bg-surface text-muted hover:border-teal/50 hover:text-ink"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Resize */}
      <div>
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-semibold text-ink">Resize image</span>
          <button
            type="button"
            role="switch"
            aria-checked={resizeEnabled}
            onClick={() => onToggleResize(!resizeEnabled)}
            className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors ${
              resizeEnabled ? "bg-teal" : "bg-line"
            }`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                resizeEnabled ? "translate-x-[22px]" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {resizeEnabled && (
          <div className="mt-4 flex flex-col gap-3 rounded-lg border border-line bg-paper p-4">
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1 text-xs font-medium text-muted">
                Width (px)
                <input
                  type="number"
                  min={1}
                  value={width}
                  onChange={(e) => handleWidthInput(Number(e.target.value) || 1)}
                  className="rounded-md border border-line bg-surface px-3 py-2 text-sm font-medium text-ink outline-none focus:border-teal"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-muted">
                Height (px)
                <input
                  type="number"
                  min={1}
                  value={height}
                  onChange={(e) => handleHeightInput(Number(e.target.value) || 1)}
                  className="rounded-md border border-line bg-surface px-3 py-2 text-sm font-medium text-ink outline-none focus:border-teal"
                />
              </label>
            </div>

            <label className="flex items-center gap-2 text-sm text-ink">
              <input
                type="checkbox"
                checked={maintainAspectRatio}
                onChange={(e) => onToggleAspectRatio(e.target.checked)}
                className="h-4 w-4 rounded border-line accent-teal"
              />
              Maintain aspect ratio
            </label>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onCompress}
        disabled={isCompressing}
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 font-display text-base font-semibold text-white shadow-card transition-all hover:bg-teal-dark hover:shadow-cardHover active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isCompressing ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Compressing…
          </>
        ) : (
          "Compress Image"
        )}
      </button>
    </div>
  );
}
