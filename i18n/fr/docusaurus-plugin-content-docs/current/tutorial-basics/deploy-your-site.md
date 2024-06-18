---
sidebar_position: 5
---

# Déployer votre site

Docusaurus est un **générateur de site statique** (également appelé **[Jamstack](https://jamstack.org/)**).

Il construit votre site sous forme de simples **fichiers statiques HTML, JavaScript et CSS**.

## Construisez votre site

Construisez votre site **pour la production** :

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier `build`.

## Déployer votre site

Testez votre version de production localement :

```bash
npm run serve
```

Le dossier `build` est maintenant servi à [http://localhost:3000/](http://localhost:3000/).

Vous pouvez maintenant déployer le dossier `build` **presque n'importe où** facilement, **gratuitement** ou à un coût très faible (lisez le **[Deployment Guide](https://docusaurus.io/docs/deployment)**).
