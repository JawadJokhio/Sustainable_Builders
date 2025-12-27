import "./Sustainability.css";

const Sustainability = () => {
  return (
    <section className="sustainability-page">
      <div className="container">
        <h1>Sustainability at Sustainable Builders</h1>

        <p className="sustainability-intro">
          Sustainability is at the core of everything we do. From recycling
          plastic waste to producing eco‑friendly construction materials, our
          processes are designed to protect the environment and future
          generations.
        </p>

        <div className="sustainability-grid">
          <div className="sustainability-card">
            <h3>Plastic Waste Reduction</h3>
            <p>
              We collect and recycle plastic waste, preventing it from entering
              landfills and oceans.
            </p>
          </div>

          <div className="sustainability-card">
            <h3>Eco‑Friendly Materials</h3>
            <p>
              Our eco‑bricks and construction materials are durable, cost‑
              effective, and environmentally responsible.
            </p>
          </div>

          <div className="sustainability-card">
            <h3>SDG‑12 Commitment</h3>
            <p>
              We actively contribute to UN SDG‑12 by promoting responsible
              consumption and sustainable production practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
