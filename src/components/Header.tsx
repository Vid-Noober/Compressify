import Link from "next/link";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Image Compressor", href: "/#compressor" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper">
            <span className="font-mono text-[13px] font-semibold tracking-tight">C↓</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Compressify
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#compressor"
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-transform hover:scale-[1.03] active:scale-[0.98] sm:px-5"
        >
          Upload Image
        </a>
      </div>
    </header>
  );
}
