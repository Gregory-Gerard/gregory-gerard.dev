---
title: La Boîte Immo
headline: Leading partner for real estate agencies
icon: LaBoiteImmoIcon
order: 1
---

## Introduction

<a href="https://www.la-boite-immo.com" target="_blank">La Boîte Immo</a> is a company specializing in web marketing services for the real estate sector, founded in 2009. It offers a range of services to support real estate professionals, particularly independent agencies, in creating and managing their businesses. Its flagship product is the Hektor software, used by 45,000 professionals every day. La Boîte Immo also offers website creation services, SEO and SEA, online training, marketing support, and inter-agency solutions. The company has around 200 employees spread across several offices in France and Tunisie. It is the market leader, with 8,000 agencies. The group has been continuously growing since its inception.

## Background

I have been with La Boîte Immo since **July 2021**, in the Hektor software division, which is a leading software for independent real estate agencies.

My journey began as a web developer, where I participated in the development of various products, the implementation of tools for the work environment, and maintenance via a ticketing system. I quickly took on responsibilities as a **Tech Lead**, becoming the technical referent for the "Quality & Production" team.

Subsequently, I led the **CRM squad**, where I designed and implemented innovative features to improve customer relationship management for real estate professionals.

Today, I am the **Lead Developer** of the Hektor software division. My role involves leading developments, defining technical direction, and providing solutions on complex issues, technical architecture, and overall quality. I also work to enhance the skills of the team I work with, as well as my own, through code reviews, pair programming sessions, continuous technical monitoring, and more.

## Missions

Here are some of the non-exhaustive missions I have carried out over the years:

- **Integration of AI in Hektor**: I've integrated large language models (LLM) by adding some features (e.g., integration of a knowledge base). This tool transforms users daily lives by answering their questions about the software, thus reducing calls to customer support. It also allows the creation of real estate properties, contacts, emails... (bonus: with voice recognition), thanks to a connection between the LLM and our software.

- **CRM squad**: Within the CRM squad, I implemented message queuing at scale using Symfony Messenger, as a microservice using Redis as a message bus. This solution facilitates the listening of database insertions or modifications, optimizing development time. In addition to the features I developed (e.g., automated emailing, reminders to buyers), I also implemented a technical foundation to facilitate the development of similar functionalities.

- **PDF conversion service**: I developed a microservice in Node.js that uses Chromium Headless to generate PDF documents from HTML, CSS, sometimes JS. The service handles challenges related to scaling, load, error management, and security, generating up to 60,000 conversions per day. To optimize conversion time and avoid memory leaks, I implemented a pooling system that keeps Chromium instances open, destroying them after each conversion.

- **Email service**: I created a microservice in Symfony 6 to centralize email sending, primarily working asynchronously thanks to Symfony Messenger (again!). This service manages emails for 45,000 users, with an architecture designed to be maintainable and reusable by other internal projects at La Boîte Immo.

- **Improving code quality**: I integrated code linting pipelines and defined coding style rules using tools like PHP CS Fixer, ESLint, ensuring clean and maintainable code. Additionally, I implemented pipelines for most projects, including linting, type checking, testing, formatting, and automatic delivery.

- **Better <abbr title="Developer Experience">DX</abbr>**: I maintained and evolved our development platform under Docker, providing a production-like environment compatible with Windows, macOS, and Linux. I also developed tools to facilitate new computer installation and daily maintenance, while participating in the development of our standards for development and commits.

To provide some context, Hektor is software with a significant technical debt (the software is over 12 years old). Most missions are complex, and the technologies used can be limited (which is one of the reasons for integrating microservices, to overcome technical limitations). This is why software quality and improvement are now at the heart of my daily work.
