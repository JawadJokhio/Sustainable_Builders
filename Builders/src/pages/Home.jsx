import "./Home.css";

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-container">
          <h1>
            Building a <span>Sustainable Future</span>
            <br />
            with Eco‑Friendly Construction
          </h1>

          <p>
            Sustainable Builders transforms plastic waste into durable
            construction solutions, aligned with SDG‑12 and a cleaner planet.
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

      {/* ================= WHAT WE DO SECTION ================= */}
      <section className="what-we-do">
        <div className="container">
          <h2>What We Do</h2>
          <p className="section-subtitle">
            We turn environmental challenges into sustainable construction
            solutions.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <h3>Sustainable Bricks</h3>
              <p>
                We manufacture durable eco‑bricks from recycled plastic waste,
                reducing pollution and supporting the circular economy.
              </p>
            </div>

            <div className="service-card">
              <h3>Sustainable Construction</h3>
              <p>
                Our construction solutions focus on strength, efficiency, and
                environmentally responsible materials.
              </p>
            </div>

            <div className="service-card">
              <h3>Waste Recycling</h3>
              <p>
                We help communities manage plastic waste by converting it into
                valuable construction resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
