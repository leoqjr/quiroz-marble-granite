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
              Custom marble and granite for kitchens, baths, fireplaces, and
              outdoor spaces.
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
              Serving homeowners, designers, and contractors across LA County
              and Glendale.
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

      {/* Selected work – moved up and slightly highlighted */}
      <Reveal className="section section-muted">
        <div id="selected-work" className="section-inner selected">
          <div className="selected-header">
            <p className="who-kicker">Selected work</p>
            <h2>Recent projects from the shop</h2>
            <p className="selected-lead">
              Kitchens, baths, and outdoor spaces that show how we treat stone,
              seams, and details.
            </p>
          </div>

          <div className="selected-grid">
            <article className="selected-item selected-item-hover">
              <div className="selected-image-frame">
                <Image
                  src="/selected-kitchen.jpg"
                  alt="Marble and quartz countertops in a family kitchen"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="selected-image-overlay">
                  <span>View details</span>
                </div>
              </div>
              <header className="selected-item-header">
                <h3>Family kitchen, Glendale</h3>
                <p className="selected-meta">Marble island · waterfall edges</p>
              </header>
              <p className="selected-body">
                Custom island, perimeter tops, and full-height backsplash with
                tight seams at outlets.
              </p>
            </article>

            <article className="selected-item selected-item-hover">
              <div className="selected-image-frame">
                <Image
                  src="/selected-bath.jpg"
                  alt="Stone vanity top and tub surround in a primary bathroom"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="selected-image-overlay">
                  <span>View details</span>
                </div>
              </div>
              <header className="selected-item-header">
                <h3>Primary bath, Los Angeles</h3>
                <p className="selected-meta">Dolomite vanity · tub surround</p>
              </header>
              <p className="selected-body">
                Light, calm stone with eased edges and clean transitions around
                the tub deck.
              </p>
            </article>

            <article className="selected-item selected-item-hover">
              <div className="selected-image-frame">
                <Image
                  src="/selected-outdoor.jpg"
                  alt="Stone outdoor kitchen countertop with built-in grill"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="selected-image-overlay">
                  <span>View details</span>
                </div>
              </div>
              <header className="selected-item-header">
                <h3>Outdoor kitchen, Burbank</h3>
                <p className="selected-meta">Granite tops · BBQ surround</p>
              </header>
              <p className="selected-body">
                Durable granite wrapped around grill, prep, and seating areas
                for sun and heat.
              </p>
            </article>
          </div>

          <div className="selected-footer">
            <div className="selected-footer-content">
              <p>Want to see more?</p>
              <a href="/gallery" className="btn-secondary">
                Explore full gallery
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Who we serve (after the work, with leaner copy) */}
      <Reveal className="section">
        <div className="section-inner who">
          <div className="who-header">
            <p className="who-kicker">Who we serve</p>
            <h2>Stone work for every kind of project</h2>
            <p className="who-lead">
              We work with homeowners, designers, and contractors across Los
              Angeles.
            </p>
          </div>

          <div className="who-grid">
            <article className="who-item">
              <div className="who-tag">Homeowners</div>
              <h3>Remodels and new builds</h3>
              <p>Stone that makes everyday spaces feel finished.</p>
              <ul>
                <li>Kitchens and baths</li>
                <li>Fireplaces and feature walls</li>
                <li>Outdoor kitchens and bars</li>
              </ul>
            </article>

            <article className="who-item">
              <div className="who-tag">Designers &amp; architects</div>
              <h3>Detail‑driven projects</h3>
              <p>A shop that respects your drawings and timelines.</p>
              <ul>
                <li>Material and edge guidance</li>
                <li>Field measurements</li>
                <li>Consistent finishes across spaces</li>
              </ul>
            </article>

            <article className="who-item">
              <div className="who-tag">Contractors &amp; builders</div>
              <h3>Reliable trade partner</h3>
              <p>
                Countertops that fit your schedule, not the other way around.
              </p>
              <ul>
                <li>Coordinated installs</li>
                <li>Fast‑turn replacements</li>
                <li>Multi‑unit and light commercial</li>
              </ul>
            </article>
          </div>
        </div>
      </Reveal>

      {/* Quick CTA to About / Contact */}
      <Reveal className="section section-muted">
        <div className="section-inner">
          <div className="selected-header">
            <p className="who-kicker">Next steps</p>
            <h2>See how we work or start your project</h2>
            <p className="selected-lead">
              Learn more about our process and approach, or tell us about your
              space and we’ll follow up with a quote.
            </p>
          </div>

          <div className="section-grid">
            <a href="/about" className="card card-clickable">
              <h3>Our process &amp; story</h3>
              <p>
                See how we go from first conversation to finished stone, and
                what makes our shop different.
              </p>
            </a>

            <a href="/contact" className="card card-clickable">
              <h3>Get a free quote</h3>
              <p>
                Share a few details about your project and we’ll respond with a
                clear, no-pressure estimate.
              </p>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
