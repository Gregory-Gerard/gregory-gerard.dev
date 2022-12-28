---
layout: ../../layouts/CaseLayout.astro
title: xDrop
headline: Application de transfert de fichiers
icon: XDropIcon
order: 3
---

<a href="https://xdrop.fr" target="_blank">xDrop</a> est un projet réalisé dans mon temps libre qui a su trouver son petit public. Je l'ai développé en Laravel, Tailwind et un peu de JS (pas de framework).

Le but de ce service est le même que <a href="https://wetransfer.com" target="_blank">WeTransfer</a>, <a href="https://fromsmash.com" target="_blank">Smash</a>, donc de transférer des fichiers facilement, sans aucun compte, sans limite. La seule différence c'est la durée de vie plutôt courte du transfert (1 heure, au départ c'était même 10 minutes) et la génération d'un code de transfert plutôt qu'un lien, ça facilite grandement le transfert d'un téléphone vers un ordinateur (ou inversement), je vois souvent l'utilisation en open-space aussi pour se transférer des fichiers rapidement.

![Site web xDrop](/assets/cases/xdrop/website.jpg)

Le service est hébergé chez <a href="https://www.scaleway.com/fr/" target="_blank">Scaleway</a> et les fichiers sont aussi hébergés chez eux via leur offre de stockage objet (S3), que j'ai pu mettre en place très facilement avec Laravel.

Tout ça ne me coûte quasiment rien hors hébergement et nom de domaine, le stockage est très abordable et le temps de stockage tellement court que ce n'est même pas calculé par Scaleway.

Ce projet est évidemment open source, disponible sur <a href="https://github.com/Gregory-Gerard/xdrop" target="_blank">Github</a>.
