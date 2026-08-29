import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompressorTool from "@/components/CompressorTool";

const steps = [
  {
    number: "01",
    title: "Upload your image",
    description: "Drag a JPG, PNG, or WebP file in, or choose one from your device.",
  },
  {
    number: "02",
    title: "Adjust compression settings",
    description: "Pick a quality level, output format, and resize dimensions if you want them.",
  },
  {
    number: "03",
    title: "Download your optimized image",
    description: "Compare the before and after, then save the smaller file to your device.",
  },
];

const features = [
  {
    icon: "⚡",
    title: "Fast compression",
    description: "Images are processed in seconds, right in your browser tab.",
  },
  {
    icon: "🔒",
    title: "Private & secure",
    description: "Files are never uploaded anywhere. Everything happens on your device.",
  },
  {
    icon: "📱",
    title: "Works on mobile",
    description: "A responsive interface that works just as well on your phone.",
  },
  {
    icon: "🆓",
    title: "Free to use",
    description: "No sign-up, no limits, no watermarks. Compress as many images as you like.",
  },
];

const faqs = [
  {
    question: "What image formats are supported?",
    answer: "Compressify supports JPG/JPEG, PNG, and WebP for both upload and output.",
  },
  {
    question: "Does my image get uploaded to a server?",
    answer:
      "No. Compression runs entirely in your browser using the Canvas API. Your image never leaves your device.",
  },
  {
    question: "How much can I reduce image size?",
    answer:
      "It depends on the image and settings, but photos often shrink by 60–90% with little visible quality loss. Try lowering the quality slider or switching to WebP for the best results.",
  },
  {
    question: "Will compression reduce image quality?",
    answer:
      "Some quality is traded for file size — that's the nature of compression. You control exactly how much with the quality slider, and you can compare the original and compressed previews before downloading.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden border-b border-line">
          <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Runs 100% in your browser
              </span>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Compress Images Online
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                Reduce image file size without sacrificing quality. Fast, free, and completely
                private.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#compressor"
                  className="rounded-full bg-teal px-7 py-3.5 font-display font-semibold text-white shadow-card transition-all hover:bg-teal-dark hover:shadow-cardHover active:scale-[0.99]"
                >
                  Upload Image
                </a>
                <a
                  href="#how-it-works"
                  className="font-display font-semibold text-ink underline-offset-4 hover:underline"
                >
                  See how it works →
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-xl2 border border-line bg-ink p-6 font-mono text-sm text-paper shadow-cardHover">
                <div className="flex items-center justify-between text-paper/50">
                  <span>photo-original.jpg</span>
                  <span>4.2 MB</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-paper/10">
                  <div className="h-full w-full rounded-full bg-paper/30" />
                </div>
                <div className="mt-6 flex items-center justify-between text-teal">
                  <span>compressed-image.webp</span>
                  <span className="font-semibold">820 KB</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-paper/10">
                  <div className="h-full w-[19%] rounded-full bg-teal" />
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-paper/10 pt-4">
                  <span className="text-paper/50">Saved</span>
                  <span className="text-lg font-semibold text-teal">80.5%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compressor */}
        <section id="compressor" className="container-page py-16 sm:py-24">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Try it now
            </h2>
            <p className="mt-3 text-muted">
              Drop in an image below — nothing is sent to a server.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <CompressorTool />
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-t border-line bg-surface py-16 sm:py-24">
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.number} className="relative">
                  <span className="stat-mono text-sm text-teal">{step.number}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  {i < steps.length - 1 && (
                    <span className="pointer-events-none absolute right-[-1rem] top-1 hidden text-line sm:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container-page py-16 sm:py-24">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for speed and privacy
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl2 border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="text-2xl" aria-hidden>
                  {feature.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-line bg-surface py-16 sm:py-24">
          <div className="container-page">
            <div className="mx-auto mb-10 max-w-xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="mx-auto max-w-2xl divide-y divide-line rounded-xl2 border border-line bg-paper">
              {faqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-5 open:bg-surface">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-medium text-ink">
                    {faq.question}
                    <span className="flex-shrink-0 text-muted transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
