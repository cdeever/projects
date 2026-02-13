---
title: "Ma Bell Bluetooth Gateway"
description: "ESP32-based vintage rotary phone to Bluetooth bridge"
summary: "Resurrects vintage rotary phones for modern use by bridging analog telephony to Bluetooth"
date: 2024-11-02
tags: ["esp32", "bluetooth", "telephony", "analog", "slic"]
status: "in progress"
showHero: true
heroStyle: "background"
layoutBackgroundHeaderSpace: false
---

An ESP32-based gateway that brings vintage rotary phones back to life over Bluetooth. The idea started at Vintage Computer Festival Midwest in 2024, and it's turned into a deep dive into Bell System engineering, SLIC chips, and embedded audio. The project is still in progress — the Bluetooth firmware is working, the SLIC chip is selected, and the next milestone is a breadboard prototype of the analog hardware.

## The idea

At Vintage Computer Festival Midwest in Chicago in September 2024, I saw a functioning vintage PBX system and it immediately took me back to the beige ITT Trimline wall phone in my family's kitchen growing up — illuminated rotary dial, Western Electric ringer, the whole deal. Not long after, I found the exact same phone model on eBay — manufactured September 1982 and never used. I couldn't leave it sitting dormant.

I wanted to build a device that would let this phone do what it was made to do: ring, dial, and carry a conversation — just routed through Bluetooth instead of a copper pair from the central office. Off-the-shelf Bluetooth adapters exist, but they skip all the interesting parts. I wanted to replicate the actual subscriber line interface — the experience of picking up a handset and hearing a real dial tone, not just a Bluetooth pairing chime.

## What I did

The gateway is built around an ESP32-WROVER-IE for its Bluetooth HFP support and real-time GPIO control. The analog side centers on an HC-5504B SLIC (Subscriber Line Interface Circuit) — a telecom chip that handles the BORSCHT functions the Bell System's central offices provided to every subscriber line: Battery feed, Overvoltage protection, Ringing, Supervision, Codec, Hybrid, and Test.

The firmware handles a state machine for call flow, rotary pulse decoding, tone generation, and the Bluetooth audio bridge. The system targets proper Bell System electrical standards: −48 VDC idle voltage, 70–90 V AC ringing at 20 Hz, loop current between 23–35 mA, and the correct supervisory tones — dial tone at 350 + 440 Hz, ringback at 440 + 480 Hz, busy at 480 + 620 Hz, and the howler off-hook warning using four frequencies.

## What surprised me

Until you really dissect what happens when someone picks up a phone, it seems simple — you lift the handset and talk. But once you start implementing it, the layers pile up fast. There's off-hook detection, dial tone generation, recognizing rotary pulses or DTMF digits, two-way audio, ring voltage, supervision signals — and each one has to happen at the right time in the right sequence. This project turned out to be significantly more complicated than I originally expected.

## Result

Still in progress. I've settled on the HC-5504B SLIC as the core analog interface and the firmware is fairly far along — Bluetooth HFP pairing and call detection are working. The next step is building a breadboard prototype around the SLIC and prototyping the other hardware functions: ring generation, audio path, and power supply. The firmware will need the real hardware underneath it to bring everything to the finish line. Once the prototype is validated, the plan is to design custom PCBs covering power management, signal conditioning, audio routing, and isolation — and package it all in a clean enclosure with standard RJ-11 ports. Pick up the handset, hear a dial tone, pulse dial a number, and make a call over Bluetooth. Incoming calls ring the actual bell.

## Takeaways

- The Bell System's engineering standards are remarkably well-documented — decades-old specs for voltages, timing, and tone frequencies are still precise enough to build against today
- BORSCHT isn't just an acronym to memorize — each function represents a real engineering problem that the SLIC chip has to solve
- Bridging analog telephony to digital Bluetooth means working across very different signal domains — DC loop current on one side, HFP codec negotiation on the other

## Links

- [Check out the docs](https://cdeever.github.io/esp32-ma-bell-gateway/)
- [Check out the code](https://github.com/cdeever/esp32-ma-bell-gateway)
