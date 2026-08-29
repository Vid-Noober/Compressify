"use client";

import { formatBytes } from "@/lib/utils";

interface CompressionResultProps {
  originalPreviewUrl: string;
  originalSize: number;
  originalDimensions: { width: number; height: number };
  compressedPreviewUrl: string;
  compressedSize: number;
  compressedDimensions: { width: number; height: number };
  downloadFilename: string;
  onDownload: () => void;
  onReset: () => void;
}

export default function CompressionResult({
  originalPreviewUrl,
  originalSize,
  originalDimensions,
  compressedPreviewUrl,
  compressedSize,
  compressedDimensions,
  downloadFilename,
  onDownload,
  onReset,
}: CompressionResultProps) {
  const savingsRatio = originalSize > 0 ? 1 - compressedSize / originalSize : 0;
  const savingsPercent = Math.max(0, Math.round(savingsRatio * 1000) / 10);
  const squeezeRatio = Math.max(0.06, 1 - savingsRatio);

  return (
    <div className="flex flex-col gap-8 animate-fadeUp">
      {/* Before / after previews */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-line bg-paper p-3">
          <div className="flex items-center justify-between px-1 pb-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Original
            </span>
            <span className="stat-mono text-xs text-muted">
              {originalDimensions.width}×{originalDimensions.height}
            </span>
          </div>
          <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md bg-ink/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={originalPreviewUrl}
              alt="Original, uncompressed image"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="rounded-lg border border-teal/40 bg-teal-light/40 p-3">
          <div className="flex items-center justify-between px-1 pb-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-teal-dark">
              Compressed
            </span>
            <span className="stat-mono text-xs text-teal-dark">
              {compressedDimensions.width}×{compressedDimensions.height}
            </span>
          </div>
          <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md bg-ink/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={compressedPreviewUrl}
              alt="Compressed image result"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Savings readout — signature squeeze meter */}
      <div className="rounded-xl2 border border-line bg-ink p-6 text-paper sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-paper/50">Size reduced by</p>
            <p className="stat-mono mt-1 text-4xl font-semibold text-teal sm:text-5xl">
              {savingsPercent}%
            </p>
          </div>
          <div className="flex gap-6 text-right">
            <div>
              <p className="text-xs uppercase tracking-widest text-paper/50">Original</p>
              <p className="stat-mono mt-1 text-lg text-paper/70 line-through decoration-paper/30">
                {formatBytes(originalSize)}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-paper/50">Compressed</p>
              <p className="stat-mono mt-1 text-lg font-semibold text-teal">
                {formatBytes(compressedSize)}
              </p>
            </div>
          </div>
        </div>

        {/* squeeze bar */}
        <div className="mt-6">
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-paper/10">
            <div
              className="h-full origin-left rounded-full bg-teal animate-squeeze"
              style={{ "--squeeze-ratio": squeezeRatio } as React.CSSProperties}
            />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[10px] text-paper/40">
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={i} className={i % 5 === 0 ? "text-paper/60" : ""}>
                |
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onDownload}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 font-display text-base font-semibold text-white shadow-card transition-all hover:bg-teal-dark hover:shadow-cardHover active:scale-[0.99]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 15V3m0 12 4-4m-4 4-4-4" />
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          </svg>
          Download Compressed Image
        </button>
        <button
          type="button"
          onClick={onReset}
          className="rounded-full border border-line bg-surface px-6 py-4 font-display text-base font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-paper"
        >
          Compress Another Image
        </button>
      </div>

      <p className="text-center text-xs text-muted">
        Downloads as <span className="stat-mono text-ink">{downloadFilename}</span>
      </p>
    </div>
  );
}
