---
sidebar_position: 1
---

# Gérer les versions des documents

Docusaurus peut gérer plusieurs versions de vos documentations.

## Créer une version de la documentation

Publiez une version 1.0 de votre projet :

```bash
npm run docusaurus docs:version 1.0
```

Le dossier `docs` est copié dans `versioned_docs/version-1.0` et `versions.json` est créé.

Vos docs ont maintenant 2 versions:

- `1.0` à `http://localhost:3000/docs/` pour la version 1.0 docs
- `current` à `http://localhost:3000/docs/next/` pour les **docs à venir, non publiés**

## Ajouter une liste déroulante de versions

Pour naviguer de façon transparente entre les versions, ajoutez une liste déroulante de version.

Modifier le fichier `docusaurus.config.js` :

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

La liste déroulante de la version docs apparaît dans votre barre de navigation :

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Mise à jour d'une version existante

Il est possible de modifier les docs versionnés dans leur dossier respectif:

- `versioned_docs/version-1.0/hello.md` mises à jour `http://localhost:3000/docs/hello`
- `docs/hello.md` met à jour `http://localhost:3000/docs/next/hello`
