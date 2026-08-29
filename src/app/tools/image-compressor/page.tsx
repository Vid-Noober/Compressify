import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompressorTool from "@/components/CompressorTool";

export const metadata: Metadata = {
  title: "Image Compressor — Compressify",
  description: "Compress JPG, PNG, and WebP images in your browser. Nothing is uploaded.",
};

export default function ImageCompressorPage() {
  return (
    <>
      <Header />
      <main>
        <section id="compressor" className="container-page py-16 sm:py-24">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Image Compressor
            </h1>
            <p className="mt-3 text-muted">
              Reduce image file size without sacrificing quality — entirely in your browser.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <CompressorTool />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
