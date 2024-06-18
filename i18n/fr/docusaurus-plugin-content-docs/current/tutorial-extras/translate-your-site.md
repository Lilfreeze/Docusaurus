---
sidebar_position: 2
---

# Traduisez votre site

Traduisons `docs/intro.md` en français.

## Configurer i18n

Modifiez `docusaurus.config.js` pour ajouter le support de la langue `fr`:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Traduire un document

Copiez le fichier `docs/intro.md` dans le dossier `i18n/fr` :

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Traduire `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` en français.

## Démarrez votre site traduit

Lancez votre site en français :

```bash
npm run start -- --locale fr
```

Votre site traduit est accessible à l'adresse <a href="http://localhost:3000/fr/">http://localhost:3000/fr/</a> et la page <code>Getting Started</code> est traduite.

:::caution

In development, you can only use one locale at a time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```
