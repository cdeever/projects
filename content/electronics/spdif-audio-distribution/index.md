---
title: "S/PDIF Audio Distribution"
description: "Whole-home digital audio distribution using S/PDIF over repurposed CATV coax"
summary: "A DIY whole-home audio system that distributes digital audio — and live vinyl — to vintage hi-fi gear in multiple rooms using S/PDIF over existing coax"
date: 2023-01-01
tags: ["audio", "spdif", "vinyl", "hi-fi", "vintage"]
status: "complete"
draft: false
showHero: true
heroStyle: "background"
layoutBackgroundHeaderSpace: false
---

A whole-home digital audio system built on S/PDIF (Sony/Philips Digital Interface) over repurposed CATV coax. S/PDIF carries digital audio over a single cable — it's the orange RCA jack on the back of most receivers. A basement media server streams to vintage hi-fi systems in multiple rooms, and when a record drops on the turntable, it automatically takes over every zone. Every room in the house has noise-free digital high-fidelity audio on tap — powered by vintage gear, a media server, and a few dollars' worth of gear and repurposed coax.

## The idea

I've always been a music listener — always have been, probably always will be. I love hearing music on vintage gear from the '70s and '80s, and while I'm a vinyl aficionado, I also appreciate the convenience of digital and streaming. I wanted the best of both worlds: high-quality digital audio in any room of the house — or even outside — just by turning on the system in that room. And if a record is playing, I wanted it to follow me through the house just as easily. Put the record on, and it's everywhere.

## What I did

At my previous house, I had a similar setup — but it was all analog, with two coax cables running to each room. It worked, but running an unbalanced signal was never noise-free, even on short runs. When it came time to replicate the system after moving, I knew I wanted to upgrade. The new house only had single coax runs to each room, and I didn't like the idea of pulling a second line to upstairs bedrooms. Little did I know, that limitation would actually become an advantage. I eventually came across the DAC and ADC approach and decided to try it.

It starts with a media server in the basement running iTunes, Spotify, Tidal, and MusicBee for playing lossless FLAC files ripped from my CD collection — all controllable from my phone or any computer via RDP. The S/PDIF output from the sound card runs at 48 kHz sampling — on par with DVD audio, slightly above CD quality — and feeds into an automatic digital A/B switch that can override one channel with another when a signal is present.

From there, the digital output is split and sent over repurposed CATV coax lines to each room. The master bedroom has a vintage Marantz system, and another bedroom runs an '80s-era Carver setup that lines up pretty close to Ferris Bueller's system in his Day Off movie. The family room home theater takes a direct S/PDIF input, and an old receiver in the basement feeds speakers outdoors. There's even an output to the [FM transmitter](../fm-transmitter/) so I can listen on my '80s-era ghetto blaster while playing arcade games or working in the garage. Each system has a DAC that feeds into aux for perfectly clean audio.

Now for the vinyl side — and this is where it feels like magic. In my living room office, I have my Onkyo system with the amp I bought as a high schooler, and this is the primary system for spinning records. An ADC on the tape monitor output digitizes whatever the system is playing and sends it back to the basement over a second coax line I ran specifically for the return. The turntable is the most common source, and powering it on activates the ADC — but switching to the cassette deck or CD player would work just as well. There, it feeds into the digital A/B switch and automatically overrides the media server input. So when a record is playing, it takes over every room — no button presses, no app switching, just music.

## What surprised me

When I first tried splitting the S/PDIF signal, I didn't expect it to reach multiple rooms — especially upstairs — but it did. Originally I was splitting analog out of the media server with passive splits and ADCs on each line. When I moved to an all-digital backend, one of the upstairs rooms became hit or miss on signal reliability. I'll eventually build an active S/PDIF splitter to send an amplified signal upstairs. In the meantime, I have a workaround with an extra ADC just to keep that room reliable.

## Result

The system works and it's highly convenient. I can have a record playing, move on to tasks around the house, and just turn on the system in whatever room I'm in — the music is never far away. Cleaning to '80s hair metal happens at double speed. For Dark Side of the Moon headphone listening in the bedroom, there's zero static from the high-fidelity streaming. It just works.

## Takeaways

- S/PDIF is more resilient than I expected — it carried signal through passive coax splits to multiple rooms, though the move to an all-digital backend did cut signal strength enough to matter on the longest run
- Bang for the buck, the DACs and ADCs sell for under $20 online — you'd have to spend hundreds or maybe even thousands to match this with a commercial digital streaming system
- 48 kHz is DVD-level quality sampling, and some gear goes up to 192 kHz, but I'd happily A/B this system against far more expensive gear — the media source, speakers, amps, and headphones make the biggest difference in the signal path, not the sampling rate. I love good sound, but I'm not a hard core audiophile
- A Sonos setup might have a slight edge with its digital delay synchronization between rooms, but repurposing the existing CATV coax lines gets you there for not a lot of money

![Musou DAC and ADC converters — the digital-to-analog and analog-to-digital bridges that make the system work](dac-adc-converters.jpg)
