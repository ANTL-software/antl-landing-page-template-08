# antl — template 08 / Atelier Solide — bâtiment & artisanat

Démonstration fictive React, Vite et TypeScript strict. Aucune référence client réelle.

## Démarrer

```bash
npm ci
npm run dev
npm run verify
```

## Personnaliser pour un client

- `src/models/site.ts` : tous les contenus, liens, titres, légendes, labels accessibles et paramètres métier. Le contrat est dans `src/types/site.ts`.
- `src/styles/theme.css` : couleurs, typographies, largeur de contenu et rythme des sections. Les styles de composants utilisent ces variables.
- `src/assets/` et son `index.ts` : images locales remplaçables, référencées par le modèle avec leur texte alternatif.
- `src/views/components/NomSection/` : chaque section possède son composant et sa feuille CSS. Les vues restent passives.
- `src/views/layouts/HomePage/` : ordre et présence des sections. Supprimer ou déplacer un composant ici pour composer une autre page.
- `src/hooks/` : état et actions. `src/services/` : communication avec un service externe lorsque nécessaire.
- Chaque dossier métier expose son API par `index.ts`. Aucune utilisation de `any`.

## Publication

Le workflow `.github/workflows/pages.yml` publie `dist/` sur GitHub Pages à chaque push sur `main`. Le chemin public est configuré dans `vite.config.ts`. Pour une autre URL, modifier ce chemin, le titre/description de `index.html`, le favicon et `public/404.html`.

## Crédits et limites

Photographies d’illustration sous licence Unsplash : voir `ASSETS.md`. La marque, les prestations et les tarifs éventuels sont fictifs. Avant une livraison client, remplacer les contenus, vérifier les droits des nouveaux visuels et renseigner les informations légales correspondant au client.

## Formulaire de contact

Structure reprise du portfolio `ndecressac.fr` : nom et email sur la même ligne, objet, message, action d’envoi, notice et retour de statut. La logique est dans `useContactForm`, le transport dans `services/contact.ts`.

Sans configuration, **aucun message n’est envoyé, aucune donnée n’est stockée**. La soumission montre un retour explicite de démonstration puis vide les champs.

Pour connecter une API propre au client, définir `VITE_CONTACT_ENDPOINT` lors du build. Le service effectue un POST JSON `{ name, email, subject, message }` et attend une réponse HTTP 2xx. Le serveur doit autoriser l’origine du site (CORS), valider les champs, limiter les abus et gérer l’envoi. L’API personnelle du portfolio n’est jamais appelée. Mettre à jour la notice de confidentialité et les mentions légales avant une mise en service réelle. Ne jamais placer de secret dans une variable Vite publique.
