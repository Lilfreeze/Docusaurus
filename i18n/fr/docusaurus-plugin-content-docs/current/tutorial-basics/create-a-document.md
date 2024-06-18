---
sidebar_position: 2
---

# Créer un document

Les documents sont des **groupes de pages** reliés entre eux :

- un **côté**
- \*\* navigation précédente/suivante\*\*
- **versionnement**

## Créez votre premier document

Créez un fichier Markdown dans `docs/hello.md` :

```md title="docs/hello.md"
# Bonjour

Ceci est mon **premier document Docusaurus** !
```

Un nouveau document est désormais disponible à l'adresse suivante : [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configurer la barre latérale

Docusaurus **crée automatiquement une barre latérale** à partir du dossier `docs`.

Ajoutez des métadonnées pour personnaliser l'étiquette et la position de la barre latérale :

```md title="docs/hello.md" {1-4}
---
sidebar_label : 'Hi!'
sidebar_position : 3
---

# Hello

Ceci est mon **premier document Docusaurus** !
```

Il est également possible de créer votre barre latérale explicitement dans `sidebars.js` :

```js title="sidebars.js"
export default {
  tutorialSidebar : [
    'intro',
    // highlight-next-line
    'hello',
    {
      type : 'category',
      label : 'Tutorial',
      items : ['tutorial-basics/create-a-document'],
    },
  ],
} ;
```
