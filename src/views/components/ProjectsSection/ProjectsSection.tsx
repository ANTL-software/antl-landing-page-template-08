import { FiArrowUpRight } from "react-icons/fi";
import type { ConstructionSite } from "../../../types";
import "./ProjectsSection.css";
export function ProjectsSection({
  content,
}: {
  readonly content: ConstructionSite["projects"];
}) {
  return (
    <section
      className="build-projects"
      id="projets"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 id="projects-title">{content.title}</h2>
          </div>
          <p>{content.text}</p>
        </div>
        <div className="project-grid">
          {content.items.map((item, index) => (
            <figure key={item.title}>
              <div className="project-image">
                <img src={item.image.src} alt={item.image.alt} loading="lazy" />
                <span aria-hidden="true">
                  0{index + 1}
                  <FiArrowUpRight />
                </span>
              </div>
              <figcaption>
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="project-notice">{content.notice}</p>
      </div>
    </section>
  );
}
