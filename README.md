# Le Carnet — expression du jour

Site statique (HTML/CSS/JS pur, sans framework ni serveur) qui affiche une
expression française différente chaque jour, avec son explication et un
exemple.

## Fonctionnement

- `data.js` contient le tableau `EXPRESSIONS` (actuellement 50 entrées).
- `script.js` calcule le numéro du jour dans l'année et affiche
  `EXPRESSIONS[jour % nombre_d_expressions]`. Comme il n'y a que 50 entrées,
  le cycle se répète environ 7 fois par an — ajoutez des expressions dans
  `data.js` pour couvrir les 365 jours sans répétition.
- Le visiteur peut aussi naviguer manuellement (← précédente / suivante →,
  ou les flèches du clavier) et parcourir tout le carnet via le bouton
  « Feuilleter tout le carnet ».
- Aucune base de données, aucune requête réseau : tout est calculé côté
  navigateur à partir de la date locale.

## Ajouter une expression

Ouvrez `data.js` et ajoutez un objet à la fin du tableau :

```js
{ expression: "Avoir un chat dans la gorge",
  explication: "Avoir la voix enrouée.",
  exemple: "Excuse-moi, j'ai un chat dans la gorge ce matin." },
```

## Héberger le site (gratuit)

Le site n'a besoin d'aucun serveur particulier — trois fichiers statiques
suffisent. Options les plus simples :

- **GitHub Pages** : créez un dépôt, poussez ces fichiers, activez Pages
  dans les réglages du dépôt (branche `main`, dossier racine).
- **Netlify / Vercel** : glissez-déposez le dossier sur netlify.com/drop,
  ou connectez le dépôt Git pour un déploiement automatique.
- **En local** : ouvrez simplement `index.html` dans un navigateur, ou
  lancez `python3 -m http.server` dans ce dossier puis visitez
  `http://localhost:8000`.

## Pour aller plus loin

- Remplacer `data.js` par un appel à une API ou un fichier JSON externe si
  la liste devient très longue.
- Ajouter un champ `origine` à chaque entrée pour raconter d'où vient
  l'expression (petit encart supplémentaire dans la page).
- Ajouter un flux RSS ou un envoi par e-mail quotidien (nécessiterait alors
  un petit backend ou un service tiers type Mailchimp/Zapier).
