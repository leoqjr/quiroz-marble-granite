import Image from "next/image";
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
            <p className="hero-kicker">Family-owned in Los Angeles</p>

            <div className="hero-title-row">
              <div className="hero-title-accent">
                <span>Marble &amp; granite fabrication</span>
              </div>
              <h1>
                Marble &amp; granite
                <br />
                for everyday luxury.
              </h1>
            </div>

            <p className="hero-lead">
              Custom countertops and stonework crafted with care across LA
              County and Glendale.
            </p>

            <div className="hero-actions">
              <a href="/contact" className="btn-primary">
                Get a free quote
              </a>
              <a href="#selected-work" className="btn-secondary hero-secondary">
                View our work
              </a>
            </div>

            <div className="hero-meta-sub">
              Kitchens, baths, fireplaces, and outdoor spaces in one clear
              process.
            </div>
          </div>

          <div className="hero-scroll">
            <span className="hero-scroll-line" />
            <span>Scroll</span>
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
              <p>Durable, tailored stone for your home.</p>
              <ul>
                <li>Kitchen and bath countertops</li>
                <li>Fireplaces and feature walls</li>
                <li>Outdoor kitchens and bar tops</li>
              </ul>
            </article>

            <article className="who-item">
              <div className="who-tag">Designers &amp; architects</div>
              <h3>Detail‑driven projects</h3>
              <p>A fabricator that respects your plans.</p>
              <ul>
                <li>Material and edge profile guidance</li>
                <li>Field measurements and shop drawings</li>
                <li>Consistent finishes across spaces</li>
              </ul>
            </article>

            <article className="who-item">
              <div className="who-tag">Contractors &amp; builders</div>
              <h3>Reliable trade partner</h3>
              <p>A stone team that fits your schedule.</p>
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
      <Reveal className="section section-muted section-process">
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
                confirm your goals, materials, and timing.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">2</div>
              <h3>Choose stone &amp; lock pricing</h3>
              <p>
                Select slabs from our partners or a local yard. We prepare a
                clear estimate based on your layout and edges.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">3</div>
              <h3>Template, cut, and finish in‑house</h3>
              <p>
                We template on site, then cut, shape, and polish in our shop so
                seams and details match the plan.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">4</div>
              <h3>Install day &amp; care handoff</h3>
              <p>
                Our crew installs, levels, and seals as needed, then walks you
                through caring for the stone you chose.
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
              A few recent projects from kitchens, baths, and outdoor spaces.
            </p>
          </div>

          <div className="selected-grid">
            <article className="selected-item">
              <div className="selected-image-frame">
                <Image
                  src="/selected-kitchen.jpg"
                  alt="Marble and quartz countertops in a family kitchen"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <header className="selected-item-header">
                <h3>Family kitchen</h3>
                <p className="selected-meta">Marble island · waterfall edges</p>
              </header>
            </article>

            <article className="selected-item">
              <div className="selected-image-frame">
                <Image
                  src="/selected-bath.jpg"
                  alt="Stone vanity top and tub surround in a primary bathroom"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <header className="selected-item-header">
                <h3>Bath suite</h3>
                <p className="selected-meta">Vanity top · shower surround</p>
              </header>
            </article>

            <article className="selected-item">
              <div className="selected-image-frame">
                <Image
                  src="/selected-outdoor.jpg"
                  alt="Stone outdoor kitchen countertop with built-in grill"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <header className="selected-item-header">
                <h3>Outdoor kitchen</h3>
                <p className="selected-meta">Granite tops · BBQ surround</p>
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
