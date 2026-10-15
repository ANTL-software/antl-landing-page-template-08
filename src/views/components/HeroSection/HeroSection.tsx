import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import type { ConstructionSite } from "../../../types";
import "./HeroSection.css";
export function HeroSection({
  content,
  action,
}: {
  readonly content: ConstructionSite["hero"];
  readonly action: ConstructionSite["action"];
}) {
  return (
    <section className="build-hero" aria-labelledby="hero-title">
      <div className="build-hero__copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 id="hero-title">
          {content.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <em>{content.emphasis}</em>
        </h1>
        <p>{content.text}</p>
        <div className="build-hero__actions">
          <a className="button" href={action.href}>
            {action.label}
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a className="build-hero__discover" href={content.secondary.href}>
            {content.secondary.label}
            <FiArrowDown aria-hidden="true" />
          </a>
        </div>
        <p className="build-hero__note">{content.note}</p>
      </div>
      <figure className="build-hero__image">
        <img
          src={content.image.src}
          alt={content.image.alt}
          fetchPriority="high"
        />
        <figcaption>
          <span aria-hidden="true">01 /</span>
          {content.imageLabel}
        </figcaption>
      </figure>
    </section>
  );
}
