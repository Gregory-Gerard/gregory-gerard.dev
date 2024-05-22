---
title: Pitchoun
headline: TV & Radio Platform
icon: PitchounIcon
order: 2
---

## Introduction

<a href="https://pitchoun-medias.fr" target="_blank">Pitchoun Médias</a> is an independent media group targeting children aged 4 to 12 and their families. It offers educational and musical content through its television, radio stations, digital offerings, and event services. The group includes two television channels, several radio stations, and a digital platform that includes apps, podcasts, and a video replay service. In addition to these activities, Pitchoun Médias also organizes events for children and families.

The group offers subscription plans that allow users to access additional and exclusive content. One of these plans is MyPitchoun, which provides access to educational content for children and their families, along with child learning tracking features. The MyPitchoun+ plan includes all the benefits of MyPitchoun, as well as access to additional content, such as early access to TV episodes, a **24/7 live TV**, and exclusive podcasts.

I have been supporting Pitchoun Médias for **years** on almost all fronts for their digital presence. I worked on the first version of the website, which was also one of my first freelance experiences. The group renewed their trust in me to create a second version, more ambitious, modern, and advanced. Here are the main topics covered in this project:

- **Website**: Built with <a href="https://laravel.com" target="_blank">Laravel</a>, <a href="https://tailwindcss.com" target="_blank">Tailwind</a>, <a href="https://alpinejs.dev" target="_blank">Alpine.js</a>, and many third-party services, but mainly <a href="https://fr.kinow.com" target="_blank">Kinow</a> for the VOD and subscriptions, and <a href="https://www.ausha.co/fr/" target="_blank">Ausha</a> for the podcast section. Overall, the website is quite classic with a custom content management system (complete site administration).
- **Live TV**: A more technically interesting aspect, we manage our own live TV infrastructure, broadcasting 24/7. The group streams an RTMP feed that we integrate and process to make it web-compatible.
- **Infrastructure**: Everything is hosted on dedicated servers, all running with Debian.

  For the website, the <abbr title="Linux Apache MariaDB PHP"><a href="https://fr.wikipedia.org/wiki/LAMP" target="_blank">LAMP</a></abbr> stack is installed, with a single server being sufficient for the load.

  For the live TV part, I used <a href="https://www.nginx.com" target="_blank">NGINX</a> as the entry point for processing the RTMP feed. The processing part is done with <a href="https://ffmpeg.org" target="_blank">FFmpeg</a>. Since an RTMP feed is not web-consumable, it must be encoded using FFmpeg for conversion to HLS (web-compatible format).
- **Others**: <a href="https://github.com/louislam/uptime-kuma" target="_blank">Uptime Kuma</a> and <a href="https://github.com/netdata/netdata" target="_blank">Netdata</a> for infrastructure monitoring, and many bash scripts for automating maintenance 😅

## Stack

### Website

For the website part, nothing too technically interesting. The most complex part was **integrating external providers**, adapting Laravel's authentication system with <a href="https://laravel.com/docs/9.x/authentication#adding-custom-user-providers" target="_blank">custom providers</a> (accounts managed externally by Kinow), properly managing rate limiting, cache management...

### Live TV

Regarding live TV, as explained earlier, the group manages a live stream available **24/7**, composed of different programs, like a traditional TV channel. On my end, I provided an entry point via NGINX for the control room to push this RTMP feed to my entry point. This was very interesting because working with video on the web is complicated: **little documentation**, **many proprietary tools**, **heavy processing** for a server, the amount of data to process and send requires **stability**...

To recap, an **RTMP** (Real-Time Messaging Protocol) stream is a real-time data transmission protocol mainly used for live streaming on the Internet. It allows the transmission of video, audio, and other data in real-time from a server to a client, such as an online video player or a live streaming application.

![Schema](/cases/pitchoun/schema.png)

**HLS (HTTP Live Streaming)** is a protocol for streaming video content over the Internet. It allows streaming videos online using the HTTP protocol, making it compatible with most web browsers and mobile devices. In practice, it is a format that divides the video stream into small segments (e.g., 4 seconds each), which is perfect for live streaming (also widely used for VOD to optimize loading times and use <abbr title="Adaptive Bitrate">ABR</abbr>). It includes a main file simply describing the different segments, their locations, durations, qualities... Here is an example:

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

Regarding costs, I initially planned to integrate a partially ready-made solution with AWS, Azure, or GCP. However, while processing the RTMP feed was not particularly expensive, as often with these services, the most costly part is usually the incoming data (RTMP feed) and the outgoing data (3 HLS streams, including one in HD). Therefore, I ran several simulations across various third-party services, and the costs ranged **between €1000 to €2000 per month**. Continuous streaming is quite niche and therefore expensive.

By integrating this homemade solution, which has now been running for over 2 years, I avoided these expenses (the live TV project would never have materialized if the cost had been as mentioned). A good dedicated server, some hard work, and every problem has its solution 🥳

Need to integrate a similar solution, do video processing, have your own streaming feed available 24/7? <a href="mailto:contact@gregory-gerard.dev">Contact me</a>!

