import { FiArrowUpRight } from "react-icons/fi";
import type { ConstructionSite } from "../../../types";
import "./ExpertiseSection.css";
export function ExpertiseSection({
  content,
  action,
}: {
  readonly content: ConstructionSite["expertise"];
  readonly action: ConstructionSite["action"];
}) {
  return (
    <section
      className="build-expertise container"
      id="metiers"
      aria-labelledby="expertise-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="expertise-title">{content.title}</h2>
        </div>
        <p>{content.text}</p>
      </div>
      <div className="expertise-grid">
        {content.services.map((service) => (
          <article key={service.id}>
            <span className="expertise-index">{service.id}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul>
              {service.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a
              href={action.href}
              aria-label={`${action.label} : ${service.title}`}
            >
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
