---
title: La Boîte Immo
headline: 1er partenaire des indépendants
icon: LaBoiteImmoIcon
order: 1
---

## Présentation

<a href="https://www.la-boite-immo.com" target="_blank">La Boîte Immo</a> est une boîte spécialisée dans les services webmarketing pour l'immobilier, créée en 2009. Elle propose une gamme de services pour accompagner les professionnels de l'immobilier, en particulier les agences indépendantes, dans la création et la gestion de leur entreprise. Son produit phare est le logiciel Hektor, utilisé par 45 000 professionnels chaque jour. La Boîte Immo propose également des services de création de sites internet, de référencement SEO et SEA, de formations en ligne, de supports marketing et de solution d'inter-cabinet. L'entreprise compte ~200 employés répartis dans plusieurs bureaux en France et à Tunis. Elle est leader sur le marché, avec 8 000 agences clients. Le groupe est toujours en pleine croissance depuis sa création.

## Parcours

Je suis à La Boîte Immo depuis **Juillet 2021**, dans le pôle logiciel Hektor, qui est un logiciel pour les agents immobiliers, leader dans le secteur des logiciels immobiliers pour les agences indépendantes.

Mon parcours a débuté en tant que développeur web, où je participais à l'évolution des différents produits, de la mise en place d'outils pour l'environnement de travail et de la maintenance via un système de tickets. Rapidement, j'ai pris des responsabilités en tant que **Tech Lead**, en devenant le référent technique de l'équipe « Qualité & Production ».

Par la suite, j'ai pris la tête de la **squad « CRM »**, où j'ai conçu et mis en œuvre des fonctionnalités innovantes pour améliorer la gestion de la relation client des professionnels de l'immobilier.

Aujourd'hui, je suis **Lead Dev** du pôle logiciel Hektor. Mon rôle consiste à diriger les développements, définir l'orientation technique et apporter des solutions sur des sujets complexes, l'architecture technique et la qualité générale. J'œuvre aussi à faire monter en compétences l'équipe avec laquelle je travaille et moi-même grâce à des revues de code, des sessions de pair programming, une veille technique continue, et plus encore.

## Missions

Voici quelques-unes de mes missions non exhaustives effectuées au fil des années :

- **Intégration de l'IA dans Hektor** : J'ai intégré des modèles de langage avancés (LLM) en y ajoutant quelques fonctionnalités (intégration d'une base de connaissance par exemple). Cet outil transforme le quotidien des utilisateurs en répondant à leurs questions sur le logiciel, réduisant ainsi les appels au SAV. Il permet également de créer des annonces, des contacts et des emails via des commandes vocales, grâce à une connexion entre le LLM et notre logiciel.

- **Évolution CRM** : Au sein de la squad CRM, j'ai mis en place le message queuing grâce à Symfony Messenger, sous forme de microservice utilisant Redis comme bus de messages. Cette solution facilite l'écoute des insertions ou modifications en base de données, optimisant le temps de développement et permettant des évolutions d'automatisation du logiciel de manière agile et efficace.

- **Refonte du service de conversion PDF** : J'ai développé un microservice en Node.js qui utilise Chromium Headless pour générer des fichiers PDF. Le service gère les défis de mise à l'échelle, de charge, de gestion des erreurs et de sécurité, générant jusqu'à 60 000 conversions par jour. Pour optimiser le temps de conversion et éviter les fuites de mémoire, j'ai mis en place un système de pooling qui maintient constamment des instances de Chromium ouvertes, les détruisant après chaque conversion.

- **Gestion des envois d'emails** : J'ai créé un microservice en Symfony 6 pour centraliser l'envoi d'emails, fonctionnant principalement en asynchrone grâce à Symfony Messenger. Ce service gère les emails de 45 000 utilisateurs, avec une architecture pensée pour être maintenable et réutilisable par d'autres projets internes à La Boîte Immo.

- **Amélioration de la qualité de code** : J'ai intégré des pipelines de vérification de code et défini des règles de style de codage à l'aide d'outils comme PHP CS Fixer, assurant ainsi un code propre et maintenable. De plus, j'ai pu mettre en place des pipelines sur une majorité des projets, incluant le linting, le type checking, le formatage et la livraison automatique.

- **Optimisation de l'expérience développeur (DX)** : J'ai maintenu et évolué notre plateforme de développement sous Docker, offrant un environnement ISO prod compatible avec Windows, MacOS et Linux. J'ai également développé des outils facilitant l'installation et la maintenance, tout en participant à l'élaboration de nos normes de développements et de commits.

Pour donner un peu de contexte, Hektor est un logiciel avec un lourd héritage technique (le logiciel a plus de 12 ans). La plupart des missions sont complexes, les technologies utilisées peuvent être limitées (ce qui a pu nécessiter l'intégration de certains microservices par exemple). C'est pour cela que la qualité du logiciel et son amélioration sont désormais au cœur de mon travail au quotidien.
