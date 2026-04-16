// src/components/Footer.tsx

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <p className="site-footer-title">Quiroz Marble &amp; Granite</p>
          <p className="site-footer-text">
            Marble and granite fabrication for homes and light commercial
            projects in Los Angeles County and Glendale.
          </p>
        </div>
        <div className="site-footer-meta">
          <p className="site-footer-text">
            © {new Date().getFullYear()} Quiroz Marble &amp; Granite
          </p>
          <p className="site-footer-text">
            Licensed &amp; insured · Los Angeles, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
