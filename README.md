# Compressify

A fast, private, browser-based image compressor built with Next.js (App Router), TypeScript, and Tailwind CSS. Images are compressed entirely client-side using the Canvas API — nothing is ever uploaded to a server.

## Features

- Drag-and-drop or click-to-browse image upload (JPG, PNG, WebP)
- Adjustable compression quality (10%–100%)
- Output format selection: Original / JPG / PNG / WebP
- Optional resizing with a "maintain aspect ratio" toggle
- Before/after preview with original vs. compressed file size, dimensions, and percentage saved
- One-click download with a clean output filename
- Fully responsive, accessible UI (keyboard-navigable, visible focus states, reduced-motion support)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── page.tsx                       # Landing page (hero, compressor, how it works, features, FAQ)
│   ├── globals.css
│   └── tools/
│       └── image-compressor/
│           └── page.tsx               # Standalone compressor tool page
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── UploadBox.tsx                  # Drag-and-drop upload UI
│   ├── CompressionSettings.tsx        # Quality / format / resize controls
│   ├── CompressionResult.tsx          # Before/after preview + savings meter
│   └── CompressorTool.tsx             # Orchestrates upload → settings → result state
└── lib/
    ├── imageCompressor.ts             # Canvas-based compression logic
    └── utils.ts                       # formatBytes, filename helpers, etc.
```

## How compression works

`src/lib/imageCompressor.ts` loads the selected file into an `<img>` element via an object URL, draws it onto an off-screen `<canvas>` at the target dimensions, and calls `canvas.toBlob()` with the chosen MIME type and quality. Because this all happens with browser APIs, the original file never leaves the device.

## Build

```bash
npm run build
npm start
```
