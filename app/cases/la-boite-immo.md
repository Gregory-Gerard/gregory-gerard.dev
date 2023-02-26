---
layout: ../../layouts/CaseLayout.astro
title: La Boîte Immo
headline: 1er partenaire des indépendants
icon: LaBoiteImmoIcon
order: 1
---

<a href="https://www.la-boite-immo.com" target="_blank">La Boîte Immo</a> est une boîte spécialisée dans les services webmarketing pour l'immobilier, créée en 2009. Elle propose une gamme de services pour accompagner les professionnels de l'immobilier, en particulier les agences indépendantes, dans la création et la gestion de leur entreprise. Son produit phare est le logiciel Hektor, utilisé par 45 000 professionnels chaque jour. La Boîte Immo propose également des services de création de sites internet, de référencement SEO et SEA, de formations en ligne, de supports marketing et de solution d'inter-cabinet. L'entreprise compte 178 employés répartis dans plusieurs bureaux en France et à Tunis. Elle est leader sur le marché, avec 8 000 agences clients. Le groupe est toujours en pleine croissance depuis sa création.

Je suis à La Boîte Immo depuis **Juillet 2021**, dans le pôle logiciel Hektor, qui est un logiciel pour les agents immobiliers, leader dans le secteur des logiciels immobiliers pour les agences indépendantes.

D'abord, j'ai été dans l'équipe « projet », donc mes missions étaient principalement le développement sur la base d'un cahier des charges pour réaliser les nouvelles évolutions du logiciel. Je m'occupais aussi de la partie maintenance du logiciel, via un système de tickets.

Environ un an après avoir rejoint La Boîte Immo, je deviens **Tech Lead**, alors mes missions ont changé et ont évolué. Je suis devenu un **référent technique** de l'équipe. Je dois également réaliser la **revue de code** de chaque nouveau projet et réviser les cahiers des charges et les user stories. Je réalise aussi la **maintenance** via un système de tickets, je récupère principalement les tickets complexes, sinon je répartis les tâches entre les développeurs, je m'occupe aussi des urgences. Je mets en place **des outils pour améliorer l'environnement de travail des développeurs** et travaille sur la **dette technique**. Je suis également chargé de mettre en place des **processus de CI/CD** et de réaliser des **tests unitaires**. Dans certains cas, je peux aussi m'occuper du développement des **projets critiques**.

En un an et demi, le logiciel a grandement évolué. Hektor est un logiciel qui a 12 ans, avec donc énormément de legacy, c'est parfois compliqué de le faire évoluer mais aujourd'hui l'équipe travaille sur ce sujet et petit à petit la dette technique se résorbe. Un des sujets principaux est une refonte en React (aujourd'hui le front est en Twig voir en HTML + PHP pour les vues les plus anciennes), c'est un grand défi pour un logiciel qui a 12 ans.

Dans mes missions les plus intéressantes, j'ai pu :
- Être responsable de la refonte du service permettant la conversion des fichiers **HTML vers PDF**. J'ai réalisé un microservice en Node.js, qui consiste simplement à générer des fichiers PDF grâce à Chromium Headless, mais avec toutes les difficultés du scaling, de la charge, gestion des erreurs, sécurité... En usage, le microservice génère jusqu'à **60 000 conversions** par jour.
- La réalisation d'un microservice pour gérer **l'ensemble des envois d'emails du logiciel**, grâce à la connexion avec un service tiers d'envoi d'emails. Ce microservice a été réalisé en Symfony 6, fonctionne principalement en asynchrone pour gérer la charge (grâce au messenger de Symfony). Il a été entièrement pensé pour être maintenable dès le départ étant donné la criticité du projet (gérer les emails de **45 000 utilisateurs**, il faut pas vraiment se rater 😶‍🌫️). Le microservice permet aussi en l'occurrence d'être réutilisé par n'importe quel projet interne à La Boîte Immo, donc il a été conçu de manière assez générique.
- Passer un projet complet en compatible PSR-12, intégrer des pipelines de vérification de code, définir les règles de coding style via des outils comme <a href="https://github.com/PHP-CS-Fixer/PHP-CS-Fixer" target="_blank">PHP CS Fixer</a>...
- J'ai aussi beaucoup travaillé sur l'environnement des développeurs. Aujourd'hui on a des développeurs sous Windows, chez qui on a mis en place le <a href="https://learn.microsoft.com/fr-fr/windows/wsl/install" target="_blank">WSL</a>, mais aussi des développeurs sous Mac, c'est un petit challenge de réussir à faire en sorte d'avoir le même environnement, on a donc tout dockerisé, même PhpStorm !

D'ailleurs, on recrute des développeurs, des commerciaux, scrum master, product manager... Si tu es intéressé et que les sujets que j'ai évoqué te parle, n'hésite pas à faire un tour sur notre page <a href="https://www.welcometothejungle.com/fr/companies/la-boite-immo/jobs" target="_blank">Welcome to the Jungle</a> 😄
