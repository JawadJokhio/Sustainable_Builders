import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="container">
        <h1>About Sustainable Builders</h1>

        <p className="about-intro">
          Sustainable Builders is committed to creating environmentally
          responsible construction solutions by transforming plastic waste into
          durable building materials.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To reduce plastic pollution and promote sustainable construction
              through innovative recycling and eco‑friendly building solutions.
            </p>
          </div>

          <div className="about-card">
            <h3>SDG‑12 Alignment</h3>
            <p>
              We actively support the United Nations Sustainable Development
              Goal‑12 by encouraging responsible consumption and production.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To become a leading sustainable construction company that balances
              environmental protection with economic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
