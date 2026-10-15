# Conventions de ce template antl

- TypeScript strict, aucun `any`.
- Contenus, images, liens et paramètres métier dans `src/models/site.ts`, contrats dans `src/types/`, palette et typographies dans `src/styles/theme.css`.
- Sections autonomes sous `src/views/components/`, avec leur CSS local. Composition uniquement sous `src/views/layouts/`.
- Vues passives : isoler l’état et les actions dans les hooks, le transport dans les services.
- Imports entre dossiers via leurs barrels `index.ts`. Les imports de CSS et d’assets locaux restent explicites.
- Utiliser React Icons pour les icônes, conserver labels, focus visibles, navigation clavier et responsive.
- Garder les démonstrations explicitement fictives. Ne pas brancher une API réelle sans demande du propriétaire.
- Vérifier `npm run verify`, les parcours concernés dans le navigateur, desktop et mobile, puis `git diff --check`.
- Après évolution publiée, renouveler les captures correspondantes dans `antl-sites-showcase`.
