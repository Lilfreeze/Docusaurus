---
sidebar_position: 3
---

# Créer un article de blog

Docusaurus crée une **page pour chaque article de blog**, mais aussi une **page d'index du blog**, un **système de tags**, un flux **RSS**...

## Créez votre premier message

Créez un fichier à l'adresse `blog/2021-02-28-greetings.md` :

```md title="blog/2021-02-28-greetings.md"
---
slug : greetings
title : Salutations !
auteurs :
  - nom : Joel Marcey
    titre : Co-créateur de Docusaurus 1
    url : https://github.com/JoelMarcey
    image_url : https://github.com/JoelMarcey.png
  - nom : Sébastien Lorber
    titre : Docusaurus maintainer
    url : https://sebastienlorber.com
    image_url : https://github.com/slorber.png
tags : [greetings]
---

Félicitations, vous avez écrit votre premier message !

N'hésitez pas à vous amuser et à modifier ce message autant que vous le souhaitez.
```

Un nouveau billet de blog est désormais disponible à l'adresse suivante : [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
