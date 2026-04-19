import { Reveal } from "../../components/Reveal";

export default function AboutPage() {
  return (
    <div className="page">
      <div className="page-inner">
        <h1>About Quiroz Marble &amp; Granite</h1>
        <p className="page-lead">
          A family shop in Los Angeles focused on careful stone fabrication,
          reliable scheduling, and clean installs.
        </p>
      </div>

      {/* Our process (moved from home) */}
      <Reveal className="section section-muted section-process">
        <div className="section-inner process">
          <div className="process-header">
            <p className="process-kicker">Our process</p>
            <h2>A clear path from idea to install</h2>
            <p className="process-lead">
              Four clear steps from first conversation to finished stone.
            </p>
          </div>

          <div className="process-grid">
            <article className="process-step">
              <div className="process-step-number">1</div>
              <h3>Share your project</h3>
              <p>
                Send plans or photos with rough sizes so we can understand your
                space.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">2</div>
              <h3>Choose stone &amp; pricing</h3>
              <p>
                Select slabs with our guidance and lock in a clear, itemized
                quote.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">3</div>
              <h3>Template and fabricate</h3>
              <p>
                We template on site, then cut and finish in our shop to match
                the plan.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">4</div>
              <h3>Install &amp; care</h3>
              <p>
                Our crew installs, seals if needed, and walks you through care
                basics.
              </p>
            </article>
          </div>
        </div>
      </Reveal>

      {/* Why choose us (moved from home) */}
      <Reveal className="section">
        <div className="section-inner">
          <div className="selected-header">
            <p className="who-kicker">Why choose us</p>
            <h2>Stone work done the right way</h2>
            <p className="selected-lead">
              A family shop focused on careful fabrication, clear communication,
              and clean installs.
            </p>
          </div>

          <div className="section-grid section-grid-3">
            <article className="card">
              <h3>In‑house fabrication</h3>
              <p>
                Templates, cutting, and finishing done in our shop for tight
                seams and clean edges.
              </p>
            </article>

            <article className="card">
              <h3>Local, family‑owned</h3>
              <p>
                Serving LA County and Glendale with scheduling that respects
                your project.
              </p>
            </article>

            <article className="card">
              <h3>Guidance all the way</h3>
              <p>
                Help choosing materials and details, plus a clear process to
                install day.
              </p>
            </article>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
