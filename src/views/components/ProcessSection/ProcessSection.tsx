import type { ConstructionSite } from "../../../types";
import "./ProcessSection.css";
export function ProcessSection({
  content,
}: {
  readonly content: ConstructionSite["process"];
}) {
  return (
    <section className="build-process" id="methode">
      <div className="container">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <ol>
          {content.steps.map((step, index) => (
            <li key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
