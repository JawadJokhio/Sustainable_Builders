import "./Home.css";

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-container">
          <h1>
            Rethinking Construction for a
            <br />
            <span>Cleaner & Greener Future</span>
          </h1>

          <p>
            We believe waste is not a problem — it’s a resource. Sustainable
            Builders pioneers eco‑conscious construction inspired by circular
            design principles.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="/projects" className="btn-secondary">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="why-section">
        <div className="container">
          <h2>Why We Exist</h2>
          <p className="section-subtitle">
            Because traditional construction ignores waste — and the planet pays
            the price.
          </p>

          <div className="why-grid">
            <div className="why-card">
              <h3>🌍 Environmental Impact</h3>
              <p>
                We tackle plastic pollution by redirecting waste away from
                landfills and into meaningful use.
              </p>
            </div>

            <div className="why-card">
              <h3>🧱 Smarter Materials</h3>
              <p>
                Our approach focuses on resilience, efficiency, and long‑term
                sustainability.
              </p>
            </div>

            <div className="why-card">
              <h3>📘 Global Responsibility</h3>
              <p>
                Our work aligns with UN SDG‑12 to promote responsible production
                and consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO SECTION ================= */}
      <section className="what-we-do">
        <div className="container">
          <h2>What We Build</h2>
          <p className="section-subtitle">
            Practical solutions that merge sustainability with real‑world
            construction needs.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <h3>Eco‑Bricks Production</h3>
              <p>
                Converting plastic waste into high‑strength building blocks
                designed for sustainable infrastructure.
              </p>
            </div>

            <div className="service-card">
              <h3>Green Construction Projects</h3>
              <p>
                Applying sustainable materials and methods to create
                future‑ready structures.
              </p>
            </div>

            <div className="service-card">
              <h3>Waste‑to‑Value Systems</h3>
              <p>
                Supporting communities by transforming waste streams into
                construction resources.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= IMPACT SECTION ================= */}
      <section className="impact-section">
        <div className="container">
          <h2>Our Impact</h2>
          <p className="section-subtitle">
            Small actions, measurable change — building impact through
            sustainable construction.
          </p>

          <div className="impact-grid">
            <div className="impact-card">
              <h3>5,000+</h3>
              <p>Plastic Bottles Reused</p>
            </div>

            <div className="impact-card">
              <h3>1000</h3>
              <p>Eco‑Bricks Produced</p>
            </div>

            <div className="impact-card">
              <h3>3</h3>
              <p>Sustainable Projects</p>
            </div>

            <div className="impact-card">
              <h3>SDG‑12</h3>
              <p>Responsible Production</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
