export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Custom marble &amp; granite fabrication in Los Angeles</h1>
            <p>
              Quiroz Marble &amp; Granite fabricates and installs stone for
              kitchens, baths, and light commercial projects across Los Angeles
              County and Glendale.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn-primary">
                Request a quote
              </a>
              <a href="/gallery" className="btn-secondary">
                View selected work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we fabricate */}
      <section className="section">
        <div className="section-inner">
          <h2>What we fabricate</h2>
          <div className="section-grid">
            <div className="card">
              <h3>Kitchen countertops &amp; islands</h3>
              <p>
                Precision-fabricated countertops, islands, and backsplashes in
                marble, granite, and engineered stone.
              </p>
            </div>
            <div className="card">
              <h3>Baths &amp; vanities</h3>
              <p>
                Shower surrounds, vanity tops, and thresholds cut to size and
                finished for daily use.
              </p>
            </div>
            <div className="card">
              <h3>Light commercial</h3>
              <p>
                Reception desks, bar tops, and other stonework for small
                commercial spaces and tenant improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section section-muted">
        <div className="section-inner">
          <h2>Selected work</h2>
          <div className="section-grid section-grid-3">
            <article className="card">
              <h3>Glendale kitchen island</h3>
              <p>
                Large-format island with waterfall edges, built for a busy
                family kitchen remodel.
              </p>
            </article>
            <article className="card">
              <h3>Custom bath vanity</h3>
              <p>
                Integrated sink cutouts and polished edges for a clean, modern
                bath upgrade.
              </p>
            </article>
            <article className="card">
              <h3>Trade showroom piece</h3>
              <p>
                Display slab fabricated for a trade partner to showcase stone
                options to their clients.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Built for the trade */}
      <section className="section section-accent">
        <div className="section-inner section-accent-inner">
          <div>
            <h2>Built for the trade</h2>
            <p>
              We work directly with contractors, designers, and cabinet shops to
              deliver accurate, on-time stone fabrication for their projects.
            </p>
          </div>
          <div className="section-accent-cta">
            <p>Have a project coming up?</p>
            <a href="/contact" className="btn-primary btn-primary-dark">
              Send project details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
