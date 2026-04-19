// src/components/Footer.tsx

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <h2 className="site-footer-title">Quiroz Marble &amp; Granite</h2>
          <p className="site-footer-text">
            Custom stone fabrication for kitchens, baths, fireplaces, and more
            across Los Angeles County and Glendale.
          </p>
        </div>

        <div className="site-footer-links">
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="site-footer-meta">
          <span>© {new Date().getFullYear()} Quiroz Marble &amp; Granite</span>
          <span>Los Angeles, California</span>
        </div>
      </div>
    </footer>
  );
}
