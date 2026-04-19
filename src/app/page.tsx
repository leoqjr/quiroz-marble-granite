import { Reveal } from "../components/Reveal";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-kicker">Los Angeles · Family‑owned</p>

            <div className="hero-title-row">
              <div className="hero-title-accent">
                <span>Stone fabrication</span>
              </div>
              <h1>
                Marble &amp; granite
                <br />
                for everyday luxury.
              </h1>
            </div>

            <p className="hero-lead">
              Custom countertops and stonework across LA County and Glendale.
            </p>

            <div className="hero-actions">
              <a href="/contact" className="btn-primary">
                Book a free estimate
              </a>
              <a href="#selected-work" className="btn-secondary hero-secondary">
                View recent work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="trust-strip">
        <div className="trust-strip-inner">
          <div className="trust-item">
            <span className="trust-label">Craftsmanship</span>
          </div>

          <div className="trust-item">
            <span className="trust-label">Reliability</span>
          </div>

          <div className="trust-item">
            <span className="trust-label">Care</span>
          </div>
        </div>
      </section>
      {/* Who we serve */}
      <Reveal className="section">
        <div className="section-inner who">
          <div className="who-header">
            <p className="who-kicker">Who we serve</p>
            <h2>Stone work for every kind of project</h2>
            <p className="who-lead">
              We partner with homeowners, designers, and contractors across Los
              Angeles.
            </p>
          </div>

          <div className="who-grid">
            <article className="who-item">
              <div className="who-tag">Homeowners</div>
              <h3>Remodels and new builds</h3>
              <p>Durable stone that still feels tailored to your home.</p>
              <ul>
                <li>Kitchen and bath countertops</li>
                <li>Fireplaces and feature walls</li>
                <li>Outdoor kitchens and bar tops</li>
              </ul>
            </article>

            <article className="who-item">
              <div className="who-tag">Designers &amp; architects</div>
              <h3>Detail‑driven projects</h3>
              <p>
                A fabricator that respects drawings, sightlines, and timelines.
              </p>
              <ul>
                <li>Material and edge profile guidance</li>
                <li>Field measurements and shop drawings</li>
                <li>Consistent finishes across multiple spaces</li>
              </ul>
            </article>

            <article className="who-item">
              <div className="who-tag">Contractors &amp; builders</div>
              <h3>Reliable trade partner</h3>
              <p>A stone team you can plug into your schedule.</p>
              <ul>
                <li>Coordinated installs with other trades</li>
                <li>Fast‑turn countertop replacements</li>
                <li>Multi‑unit and light commercial work</li>
              </ul>
            </article>
          </div>

          <div className="who-footer">
            <p>
              Not sure where your project fits?{" "}
              <a href="/contact" className="who-link">
                Tell us about it
              </a>{" "}
              and we’ll point you in the right direction.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Our process */}
      <Reveal className="section section-muted">
        <div className="section-inner process">
          <div className="process-header">
            <p className="process-kicker">Our process</p>
            <h2>A clear path from idea to install</h2>
            <p className="process-lead">
              The same careful steps on every project, so you always know what
              comes next.
            </p>
          </div>

          <div className="process-grid">
            <article className="process-step">
              <div className="process-step-number">1</div>
              <h3>Start with a quick share</h3>
              <p>
                Send plans, a sketch, or photos with basic measurements. We
                clarify your goals, material options, and timing.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">2</div>
              <h3>Choose stone & lock pricing</h3>
              <p>
                Select slabs from our partners or a local yard. We then prepare
                a detailed estimate based on your layout and edges.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">3</div>
              <h3>Template, cut, and finish in‑house</h3>
              <p>
                We template on site, then cut, shape, and polish in our shop so
                seams, overhangs, and details match the approved plan.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">4</div>
              <h3>Install day & care handoff</h3>
              <p>
                Our crew installs, levels, and seals where needed, then walks
                you through how to care for the specific stone you chose.
              </p>
            </article>
          </div>
        </div>
      </Reveal>

      {/* Selected work */}
      <Reveal className="section section-muted">
        <div id="selected-work" className="section-inner selected">
          <div className="selected-header">
            <h2>Selected work</h2>
            <p className="selected-lead">
              A few recent projects from kitchens, baths, and showrooms.
            </p>
          </div>

          <div className="selected-grid">
            <article className="selected-item">
              <div className="selected-image-frame" />
              <header className="selected-item-header">
                <h3>Family kitchen</h3>
                <p className="selected-meta">Marble island · Waterfall edges</p>
              </header>
            </article>

            <article className="selected-item">
              <div className="selected-image-frame" />
              <header className="selected-item-header">
                <h3>Bath suite</h3>
                <p className="selected-meta">Vanity &amp; shower surround</p>
              </header>
            </article>

            <article className="selected-item">
              <div className="selected-image-frame" />
              <header className="selected-item-header">
                <h3>Showroom feature</h3>
                <p className="selected-meta">Display slab · Designer partner</p>
              </header>
            </article>
          </div>

          <div className="selected-footer">
            <div className="selected-footer-content">
              <p>Want to see more?</p>
              <a href="/gallery" className="btn-secondary">
                Visit the gallery
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
