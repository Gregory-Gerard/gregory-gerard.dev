---
title: xDrop
headline: File transfer application
icon: XDropIcon
order: 3
---

<a href="https://xdrop.fr" target="_blank">xDrop</a> is a project I developed in my spare time that has found a small audience. I built it using Laravel, Tailwind, and a bit of JS (no framework).

The purpose of this service is the same as <a href="https://wetransfer.com" target="_blank">WeTransfer</a>, <a href="https://fromsmash.com" target="_blank">Smash</a>, which is to transfer files easily, without any account, and without limits. The only difference is the rather short lifespan of the transfer (1 hour, initially it was even 10 minutes) and the generation of a transfer code instead of a link. This greatly facilitates the transfer from a phone to a computer (or vice versa). I often see it being used in open spaces for quick file transfers.

![xDrop website](/cases/xdrop/website.jpg)

The service is hosted on <a href="https://www.scaleway.com/fr/" target="_blank">Scaleway</a> and the files are also hosted by them through their object storage offer (S3), which I was able to set up very easily with Laravel.

This project is, of course, open source, available on <a href="https://github.com/Gregory-Gerard/xdrop" target="_blank">Github</a>.
