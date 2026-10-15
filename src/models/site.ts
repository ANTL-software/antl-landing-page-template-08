import { houseImage, craftImage, extensionImage } from "../assets";
import type { ConstructionSite } from "../types";

const contactEndpoint =
  import.meta.env.VITE_CONTACT_ENDPOINT?.trim() || undefined;
export const constructionSite = {
  brand: "Atelier Solide",
  brandLines: ["ATELIER", "SOLIDE."],
  tagline: "Construction & rénovation",
  labels: {
    skip: "Aller au contenu",
    navigation: "Navigation principale",
    home: "Revenir en haut",
  },
  navigation: [
    { label: "Nos métiers", href: "#metiers" },
    { label: "Les projets", href: "#projets" },
    { label: "Notre méthode", href: "#methode" },
  ],
  action: { label: "Parlons de votre projet", href: "#contact" },
  hero: {
    eyebrow: "Le goût du travail bien fait",
    lines: ["Vos idées.", "Notre métier."],
    emphasis: "Du solide.",
    text: "Rénover une maison, imaginer une extension, repenser un intérieur. Donnons ensemble une forme concrète à vos envies.",
    image: {
      src: houseImage,
      alt: "Façade contemporaine associant bois, pierre et grandes ouvertures",
    },
    imageLabel: "Des matières justes. Des espaces à vivre.",
    secondary: { label: "Découvrir nos métiers", href: "#metiers" },
    note: "Rénovation · Extension · Aménagement",
  },
  strengths: [
    { title: "Un projet bien compris", text: "Vos usages avant les plans." },
    { title: "Des choix expliqués", text: "Du concret, à chaque étape." },
    { title: "Le soin des finitions", text: "Jusque dans les détails." },
  ],
  expertise: {
    eyebrow: "01 / Nos métiers",
    title: "De la première idée au dernier détail.",
    text: "Une approche complète de l’habitat, pour transformer l’existant et faire de la place à vos nouveaux projets.",
    services: [
      {
        id: "01",
        title: "Rénover",
        text: "Révéler le potentiel de votre maison, moderniser vos pièces et retrouver des espaces qui vous ressemblent.",
        tags: ["Rénovation intérieure", "Remise en état", "Redistribution"],
      },
      {
        id: "02",
        title: "Agrandir",
        text: "Imaginer des mètres carrés utiles et une extension qui trouve naturellement sa place dans l’existant.",
        tags: ["Extensions", "Ouvertures", "Aménagements"],
      },
      {
        id: "03",
        title: "Aménager",
        text: "Associer les bonnes matières, le bon volume et les bonnes finitions pour un intérieur facile à vivre.",
        tags: ["Menuiserie", "Revêtements", "Finitions"],
      },
    ],
  },
  projects: {
    eyebrow: "02 / Matières & perspectives",
    title: "Du projet à l’espace de vie.",
    text: "Le bois, la pierre, la lumière. Des inspirations pour imaginer ce que votre maison pourrait devenir.",
    notice:
      "Sélection d’images d’inspiration. Ces projets ne sont pas des réalisations de l’entreprise : Atelier Solide est une marque fictive de démonstration.",
    items: [
      {
        title: "Ouvrir la maison sur l’extérieur",
        category: "Habitat contemporain / Inspiration",
        image: {
          src: houseImage,
          alt: "Maison contemporaine avec une façade en bois et en pierre",
        },
      },
      {
        title: "Faire de la place à la lumière",
        category: "Extension bois / Inspiration",
        image: {
          src: extensionImage,
          alt: "Construction en bois avec terrasse et larges baies vitrées",
        },
      },
      {
        title: "Le détail fait la différence",
        category: "Geste artisanal / Inspiration",
        image: {
          src: craftImage,
          alt: "Un artisan travaille une pièce de bois dans un atelier",
        },
      },
    ],
  },
  process: {
    eyebrow: "03 / Une méthode claire",
    title: "On construit aussi la confiance.",
    steps: [
      {
        title: "On échange",
        text: "Vous nous parlez de vos envies, de votre lieu et de vos contraintes.",
      },
      {
        title: "On précise",
        text: "Nous étudions les possibilités, les étapes et les matériaux adaptés.",
      },
      {
        title: "On chiffre",
        text: "Le périmètre et les prestations sont détaillés avant de s’engager.",
      },
      {
        title: "On réalise",
        text: "Le chantier avance avec des points réguliers et une attention aux finitions.",
      },
    ],
  },
  contact: {
    eyebrow: "04 / Votre projet commence ici",
    title: "Une idée en tête ? Parlons-en.",
    text: "Une pièce à réinventer, une maison à rénover, un besoin d’espace : racontez-nous ce que vous imaginez.",
    region: "Rochefort & ses alentours",
    note: "Les bons projets commencent par une conversation.",
    endpoint: contactEndpoint,
    form: {
      nameLabel: "Votre nom",
      emailLabel: "Votre email",
      subjectLabel: "L’objet de votre demande",
      messageLabel: "Parlez-nous de votre projet",
      submit: contactEndpoint ? "Envoyer ma demande" : "Essayer le formulaire",
      sending: "Envoi en cours…",
      privacyNotice: contactEndpoint
        ? "Les informations saisies sont transmises au service de contact configuré pour répondre à votre demande. Ne communiquez pas de données sensibles."
        : "Formulaire de démonstration : vos informations ne sont ni envoyées ni enregistrées. Aucun professionnel ne recevra cette demande.",
      success: "Votre demande a été transmise. Merci pour votre message.",
      demoSuccess:
        "Démo terminée : le formulaire fonctionne. Aucun message n’a été envoyé ni enregistré.",
      error: "L’envoi n’a pas abouti. Réessayez dans quelques instants.",
    },
  },
  footer: {
    text: "Des idées aux fondations. Des fondations aux finitions.",
    notice:
      "Atelier Solide est une entreprise fictive. Un site de démonstration signé antl.",
    copyright: "© 2026 Atelier Solide · Construction & rénovation",
  },
} satisfies ConstructionSite;
