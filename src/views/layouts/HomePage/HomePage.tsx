import { constructionSite } from "../../../models";
import { useContactForm } from "../../../hooks";
import {
  SiteHeader,
  HeroSection,
  StrengthsStrip,
  ExpertiseSection,
  ProjectsSection,
  ProcessSection,
  ContactSection,
  SiteFooter,
} from "../../components";
export function HomePage() {
  const form = useContactForm(
    constructionSite.contact.form,
    constructionSite.contact.endpoint,
  );
  return (
    <>
      <SiteHeader site={constructionSite} />
      <main id="contenu">
        <HeroSection
          content={constructionSite.hero}
          action={constructionSite.action}
        />
        <StrengthsStrip items={constructionSite.strengths} />
        <ExpertiseSection
          content={constructionSite.expertise}
          action={constructionSite.action}
        />
        <ProjectsSection content={constructionSite.projects} />
        <ProcessSection content={constructionSite.process} />
        <ContactSection content={constructionSite.contact} form={form} />
      </main>
      <SiteFooter site={constructionSite} />
    </>
  );
}
