import "./Projects.css";
import GC from "../assets/GC.jpeg";
import B from "../assets/B.jpeg";
import R from "../assets/R.jpg";

const Projects = () => {
  return (
    <section className="projects-page">
      <div className="container">
        <h1>Our Projects & Products</h1>
        <p className="section-subtitle">
          Sustainable construction solutions created using recycled materials
          and eco‑friendly processes.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <img src={B} alt="Eco Bricks" />
            <h3>Eco Bricks</h3>
            <p>
              Durable bricks manufactured from recycled plastic waste for
              sustainable construction.
            </p>
          </div>

          <div className="project-card">
            <img src={GC} alt="Green Construction" />

            <h3>Green Construction</h3>
            <p>
              Environment‑friendly construction projects focusing on reduced
              carbon footprint.
            </p>
          </div>

          <div className="project-card">
            <img src={R} alt="Recycling Initiative" />
            <h3>Recycling Initiative</h3>
            <p>
              Community‑based plastic recycling programs converted into
              construction resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
