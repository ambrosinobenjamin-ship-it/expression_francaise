# Le Carnet — deux pages, un même site

Site statique (HTML/CSS/JS pur, sans serveur) qui réunit deux carnets :

- **index.html** — une expression française par jour.
- **mots.html** — un mot rare par jour.

Les deux pages partagent la même feuille de style (`style.css`) et une
barre de navigation en haut de page permet de passer de l'une à l'autre.

## Fichiers

```
index.html            → page « Expressions »
mots.html              → page « Mots rares »
style.css              → style partagé par les deux pages
expressions-data.js    → tableau EXPRESSIONS (100 entrées)
expressions-script.js  → logique de la page Expressions
mots-data.js            → tableau MOTS (50 entrées)
mots-script.js          → logique de la page Mots rares
```

## Ajouter du contenu

- Pour une expression : ouvrez `expressions-data.js`, ajoutez un objet au
  tableau `EXPRESSIONS` (`expression`, `explication`, `exemple`).
- Pour un mot rare : ouvrez `mots-data.js`, ajoutez un objet au tableau
  `MOTS` (`mot`, `nature`, `definition`, `exemple`).

## Héberger le site

Comme il s'agit d'un seul dossier avec plusieurs pages HTML, un seul
déploiement suffit pour les deux :

- **GitHub Pages** : poussez tous ces fichiers dans un repository
  **public**, puis Settings → Pages → source "Deploy from a branch"
  (branche `main`, dossier `/ root`). Le site sera accessible à
  `https://ton-pseudo.github.io/nom-du-repo/` (page Expressions) et
  `https://ton-pseudo.github.io/nom-du-repo/mots.html` (page Mots rares).
- **Netlify** : glissez-déposez le dossier sur netlify.com/drop, ou
  connectez le repository (privé ou public, gratuit dans les deux cas).

Aucune configuration de build n'est nécessaire : ce sont des fichiers
statiques, prêts à être servis tels quels.
