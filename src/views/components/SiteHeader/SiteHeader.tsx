import { FiArrowUpRight, FiLayers } from "react-icons/fi";
import type { ConstructionSite } from "../../../types";
import "./SiteHeader.css";
export function SiteHeader({ site }: { readonly site: ConstructionSite }) {
  return (
    <>
      <a className="skip-link" href="#contenu">
        {site.labels.skip}
      </a>
      <header className="build-header" id="top">
        <a className="build-brand" href="#top" aria-label={site.brand}>
          <FiLayers aria-hidden="true" />
          <span>
            {site.brandLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
        </a>
        <nav aria-label={site.labels.navigation}>
          {site.navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="button" href={site.action.href}>
          {site.action.label}
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </header>
    </>
  );
}
