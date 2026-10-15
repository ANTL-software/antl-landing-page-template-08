import { FiLayers, FiArrowUpRight } from "react-icons/fi";
import type { ConstructionSite } from "../../../types";
import "./SiteFooter.css";
export function SiteFooter({ site }: { readonly site: ConstructionSite }) {
  return (
    <footer className="build-footer">
      <div className="container">
        <div className="build-footer__top">
          <a className="build-brand" href="#top">
            <FiLayers aria-hidden="true" />
            <span>
              {site.brandLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
          </a>
          <p>{site.footer.text}</p>
          <a href="#top" aria-label={site.labels.home}>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="build-footer__bottom">
          <p>{site.footer.notice}</p>
          <p>{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
