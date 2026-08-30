import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompressorTool from "@/components/CompressorTool";

const steps = [
  {
    number: "01",
    title: "Upload your image",
    description:
      "Drag a JPG, PNG, or WebP file into the compressor, or choose an image from your device.",
  },
  {
    number: "02",
    title: "Adjust compression settings",
    description:
      "Choose your image quality, output format, and optional dimensions to control the final file size.",
  },
  {
    number: "03",
    title: "Download your compressed image",
    description:
      "Compare the original and compressed file sizes, then download your optimized image instantly.",
  },
];

const features = [
  {
    icon: "⚡",
    title: "Fast image compression",
    description:
      "Compress images quickly without waiting for files to upload to a remote server.",
  },
  {
    icon: "🔒",
    title: "Private and secure",
    description:
      "Your images are processed directly in your browser and are not uploaded to our server.",
  },
  {
    icon: "📱",
    title: "Works on mobile",
    description:
      "Compress JPG, PNG, and WebP images from your phone, tablet, or desktop.",
  },
  {
    icon: "🆓",
    title: "Free image compressor",
    description:
      "No account, watermark, or subscription is required to compress your images.",
  },
];

const faqs = [
  {
    question: "What image formats does Compressify support?",
    answer:
      "Compressify supports JPG, JPEG, PNG, and WebP images. You can also choose an output format when compressing your image.",
  },
  {
    question: "Is this image compressor free?",
    answer:
      "Yes. Compressify is free to use. You can compress images without creating an account or adding a watermark.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. Image compression happens directly in your web browser using the Canvas API. Your images do not need to be uploaded to our server.",
  },
  {
    question: "How much can I reduce an image file size?",
    answer:
      "The amount of compression depends on the original image, format, dimensions, and quality setting. Photos can often be reduced substantially while maintaining good visual quality.",
  },
  {
    question: "Will compressing an image reduce its quality?",
    answer:
      "Lossy compression can reduce some image quality. Compressify gives you control over the quality setting so you can choose the balance between image quality and file size.",
  },
  {
    question: "Can I compress images on my phone?",
    answer:
      "Yes. Compressify is designed to work on modern mobile browsers as well as desktop browsers.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden border-b border-line"
        >
          <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-teal"
                  aria-hidden="true"
                />
                Runs 100% in your browser
              </span>

              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Free Image Compressor Online
              </h1>

              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                Compress JPG, PNG, and WebP images online for free. Reduce
                image file size while keeping great quality. Fast, simple, and
                private.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#compressor"
                  className="rounded-full bg-teal px-7 py-3.5 font-display font-semibold text-white shadow-card transition-all hover:bg-teal-dark hover:shadow-cardHover active:scale-[0.99]"
                >
                  Compress an Image
                </a>

                <a
                  href="#how-it-works"
                  className="font-display font-semibold text-ink underline-offset-4 hover:underline"
                >
                  See how it works →
                </a>
              </div>

              <p className="mt-5 text-sm text-muted">
                No sign-up required. Your images stay on your device.
              </p>
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
                  <span className="text-lg font-semibold text-teal">
                    80.5%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compressor */}
        <section
          id="compressor"
          className="container-page scroll-mt-20 py-16 sm:py-24"
        >
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Compress your image
            </h2>

            <p className="mt-3 text-muted">
              Upload a JPG, PNG, or WebP image and reduce its file size
              directly in your browser.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <CompressorTool />
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="scroll-mt-20 border-t border-line bg-surface py-16 sm:py-24"
        >
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                How to compress an image
              </h2>

              <p className="mt-3 text-muted">
                Compressify makes reducing image file size simple.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.number} className="relative">
                  <span className="stat-mono text-sm text-teal">
                    {step.number}
                  </span>

                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>

                  {i < steps.length - 1 && (
                    <span
                      className="pointer-events-none absolute right-[-1rem] top-1 hidden text-line sm:block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container-page py-16 sm:py-24">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Why use Compressify?
            </h2>

            <p className="mt-3 text-muted">
              A simple online image compressor built for speed, privacy, and
              convenience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl2 border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="text-2xl" aria-hidden="true">
                  {feature.icon}
                </span>

                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="border-t border-line py-16 sm:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Free online image compressor
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-muted">
                <p>
                  Compressify is a free online image compressor that helps you
                  reduce the file size of JPG, PNG, and WebP images. Smaller
                  image files are easier to upload, share, store, and use on
                  websites.
                </p>

                <p>
                  You can adjust the compression quality and choose an output
                  format to find the right balance between image quality and
                  file size. You can also resize your image when you need a
                  smaller resolution.
                </p>

                <h3 className="pt-4 text-2xl font-semibold text-ink">
                  Compress JPG, PNG, and WebP images
                </h3>

                <p>
                  JPG is commonly used for photographs, PNG is useful when you
                  need transparency or lossless image quality, and WebP can
                  provide efficient image compression for modern websites.
                  Compressify lets you work with all three formats.
                </p>

                <h3 className="pt-4 text-2xl font-semibold text-ink">
                  Why reduce image file size?
                </h3>

                <p>
                  Large image files take longer to upload and download and can
                  use more storage. Compressing images can make files easier to
                  share and can help reduce the amount of data required when
                  images are used on websites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-20 border-t border-line bg-surface py-16 sm:py-24"
        >
          <div className="container-page">
            <div className="mx-auto mb-10 max-w-xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Frequently asked questions
              </h2>

              <p className="mt-3 text-muted">
                Answers to common questions about compressing images online.
              </p>
            </div>

            <div className="mx-auto max-w-2xl divide-y divide-line rounded-xl2 border border-line bg-paper">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group px-6 py-5 open:bg-surface"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-medium text-ink">
                    <span>{faq.question}</span>

                    <span
                      className="flex-shrink-0 text-muted transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
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