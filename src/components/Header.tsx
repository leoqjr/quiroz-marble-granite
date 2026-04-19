"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-logo">
          <Link href="/">Quiroz Marble &amp; Granite</Link>
        </div>

        {/* Desktop nav + CTA */}
        <nav className="site-nav-desktop">
          <div className="site-nav">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "site-nav-link" + (isActive ? " site-nav-link-active" : "")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link href="/contact" className="site-nav-cta btn-primary">
            Free estimate
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="site-nav-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="site-nav-toggle-bar" />
          <span className="site-nav-toggle-bar" />
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <nav className="site-nav-mobile">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "site-nav-mobile-link" +
                  (isActive ? " site-nav-mobile-link-active" : "")
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="site-nav-mobile-cta"
            onClick={() => setIsOpen(false)}
          >
            Free estimate
          </Link>
        </nav>
      )}
    </header>
  );
}
