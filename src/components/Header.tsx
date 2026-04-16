// src/components/Header.tsx
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-logo">
          <Link href="/">Quiroz Marble &amp; Granite</Link>
        </div>
        <nav className="site-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="site-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
