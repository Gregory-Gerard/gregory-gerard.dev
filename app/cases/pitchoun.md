---
title: Pitchoun Médias
headline: Plateforme de TV & Radio
icon: PitchounIcon
order: 2
---

## Présentation

<a href="https://pitchoun-medias.fr" target="_blank">Pitchoun Médias</a> est un groupe média indépendant qui cible les enfants de 4 à 12 ans et leur famille. Il propose du contenu ludo-éducatif et musical à travers sa télévision, ses radios, ses offres numériques et son service événementiel. Le groupe compte deux chaînes de télévision, plusieurs radios déclinées en différentes versions et une offre digitale comprenant des applications, des podcasts et une offre de replay vidéo. En plus de ces activités, Pitchoun Médias organise également des événements pour les enfants et les familles.

Le groupe propose des offres d'abonnement permettant à ses utilisateurs d'accéder à du contenu supplémentaire et exclusif. L'une de ces offres est MyPitchoun, qui donne accès à du contenu ludo-éducatif pour les enfants et leur famille, ainsi qu'à des fonctionnalités de suivi de l'apprentissage de l'enfant. L'offre MyPitchoun+ inclut tous les avantages de MyPitchoun, ainsi qu'un accès à du contenu supplémentaire, comme des épisodes de télévision en avant-première, un **live TV 24h/24 7j/7** et des podcasts exclusifs.

J'accompagne Pitchoun Médias depuis maintenant **des années** sur à peu près tous les fronts pour leur présence numérique, j'ai pu travailler sur la première version du site internet qui était aussi une de mes premières expériences en freelance. Le groupe a renouvelé sa confiance en moi pour réaliser une deuxième version, plus ambitieuse, plus moderne, plus poussée. Voici rapidement tous les principaux sujets travaillé dans ce projet

- **Site web** : Réalisé avec les technos <a href="https://laravel.com" target="_blank">Laravel</a>, <a href="https://tailwindcss.com" target="_blank">Tailwind</a>, <a href="https://alpinejs.dev" target="_blank">Alpine.js</a>, avec pas mal de services tiers mais principalement <a href="https://fr.kinow.com" target="_blank">Kinow</a> pour la partie VOD et abonnements, <a href="https://www.ausha.co/fr/" target="_blank">Ausha</a> pour la partie podcast. En somme, le site web est assez classique avec un système de gestion de contenu fait maison (donc administration complète du site web)
- **Live TV** : Aspect plus intéressant techniquement, on gère notre propre infrastructure de live TV, diffusé 24h/24 7j/7. Le groupe diffuse un flux RTMP qu'on intègre et traite afin de le rendre compatible pour du web.
- **Infra** : Côté infrastucture, tout est hébergé sur des serveurs dédiés, toutes sous Debian.

  Pour le site web, la stack <abbr title="Linux Apache MariaDB PHP"><a href="https://fr.wikipedia.org/wiki/LAMP" target="_blank">LAMP</a></abbr> est installée, un seul serveur étant suffisant pour la charge.

  Pour la partie live TV, j'ai utilisé <a href="https://www.nginx.com" target="_blank">NGINX</a> qui est le point d'entrée pour le traitement du flux RTMP. La partie traitement est réalisée avec <a href="https://ffmpeg.org" target="_blank">FFmpeg</a>, un flux RTMP n'étant pas consommable en web, il est obligatoire de passer par une étape d'encodage grâce à FFmpeg pour une conversion en HLS (format compatible en web)
- **Autres** : <a href="https://github.com/louislam/uptime-kuma" target="_blank">Uptime Kuma</a> et <a href="https://github.com/netdata/netdata" target="_blank">Netdata</a> pour le monitoring de l'infrastructure et beaucoup de script bash pour automatiser la maintenance 😅

## Stack

### Site web

Pour la partie site web, rien de très intéressant techniquement, le plus complexe a été **l'intégration des prestataires externes**, adapter le système d'authentification de Laravel avec des <a href="https://laravel.com/docs/9.x/authentication#adding-custom-user-providers" target="_blank">providers personnalisés</a> (gestion des comptes externalisées chez Kinow), gérer correctement le rate limiting, la gestion du cache...

### Live TV

Concernant le live TV, comme expliqué précédemment, le groupe gère via sa régie un flux live qui est disponible **24h/24 7j/7**, composé des différents programmes, comme une chaîne TV classique. De mon côte, j'ai mis à disposition un point d'entrée via NGINX pour que la régie pousse ce flux RTMP vers moin point d'entrée. Ce fut très intéressant car travailler dans la vidéo dans le web est compliqué : **peu de documentation**, **beaucoup d'outils propriétaires**, **le traitement est lourd** pour un serveur, la quantité de données à traiter et envoyer requiert de la **stabilité**...

Pour rappel, un flux **RTMP** (Real-Time Messaging Protocol) est un protocole de transmission de données en temps réel utilisé principalement pour la diffusion en direct sur Internet. Il permet de transmettre des vidéos, de l'audio et d'autres données en temps réel à partir d'un serveur vers un client, comme un lecteur vidéo en ligne ou une application de diffusion en direct.

![Schema](/cases/pitchoun/schema.png)

**HLS (HTTP Live Streaming)** est un protocole de diffusion de contenu vidéo en continu sur Internet. Il permet de diffuser des vidéos en ligne en utilisant le protocole HTTP, ce qui le rend compatible avec la plupart des navigateurs Web et des appareils mobiles. En pratique c'est un format permettant de découper le flux vidéo en petit segment (4 secondes par exemple), pour le live streaming c'est parfait (c'est aussi très utilisé pour de la VOD afin d'optimiser le temps de chargement et faire usage de l'<abbr title="Adaptative Bitrate">ABR</abbr>), il comporte donc un fichier principal décrivant simplement les différents segments, leurs emplacements, leurs durées, leurs qualités... Voici un exemple :

```swift
#EXTM3U
#EXT-X-TARGETDURATION:10
#EXT-X-VERSION:4
#EXT-X-MEDIA-SEQUENCE:1
#EXTINF:10.0,
fileSequence1.ts
#EXTINF:10.0,
fileSequence2.ts
#EXTINF:10.0,
fileSequence3.ts
#EXTINF:10.0,
fileSequence4.ts
#EXTINF:10.0,
fileSequence5.ts
```

Pour parler de tarifs aussi, au départ j'avais évidemment prévu d'intégrer une solution en partie prête grâce à AWS, Azure ou encore GCP. Cependant, autant le traitement du flux RTMP n'était pas spécialement couteux, mais comme souvent avec ces services, le plus cher c'est souvent les données entrantes (flux RTMP) et les données sortantes (3 flux HLS dont un en HD), j'ai donc réalisé plusieurs simulations au travers de plusieurs services tiers et on se situait **entre 1000€ à 2000€ par mois**, le streaming continu, c'est assez niche et donc couteux.

En intégrant cette solution fait maison, qui tient depuis désormais plus de 2 ans, j'ai donc évité ces dépenses (enfin, le projet de live TV n'aurait d'ailleurs jamais vu le jour si le tarif avait été celui évoqué), un bon serveur dédié, un peu d'huile de coude et chaque problème à sa solution 🥳

Besoin d'intégrer une solution similaire, faire du traitement vidéo, avoir votre propre flux de streaming dispo 24h/24 7j/7 ? <a href="mailto:contact@gregory-gerard.dev">Contactez-moi</a> !
