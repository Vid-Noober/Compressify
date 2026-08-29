const columns = [
  {
    title: "Product",
    links: [
      { label: "Image Compressor", href: "#compressor" },
      { label: "How it works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [{ label: "Contact", href: "#" }],
  },
];

export default function Footer() {
  return (
    <footer id="about" className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper">
              <span className="font-mono text-[13px] font-semibold">C↓</span>
            </span>
            <span className="font-display text-lg font-semibold text-ink">Compressify</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            A browser-based image compressor. Your files never leave your device.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-teal-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line py-6">
        <p className="container-page text-center text-xs text-muted">
          © {new Date().getFullYear()} Compressify. Every compression runs locally in your browser made by Vid Noober.
        </p>
      </div>
    </footer>
  );
}
