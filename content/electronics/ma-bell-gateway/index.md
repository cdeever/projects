---
title: "Ma Bell Bluetooth Gateway"
description: "ESP32-based vintage rotary phone to Bluetooth bridge"
summary: "Resurrects vintage rotary phones for modern use by bridging analog telephony to Bluetooth"
date: 2024-11-02
tags: ["esp32", "bluetooth", "telephony", "analog", "slic"]
status: ""
showHero: true
heroStyle: "background"
---

An ESP32-based project that resurrects vintage rotary phones for modern use. The gateway emulates a telephone company's central office line and bridges classic analog phones to Bluetooth-connected devices—bringing the nostalgia of 1970s landline telephony into the modern wireless era.

The system delivers authentic telephone-line characteristics: proper DC voltage for subscriber loops, off-hook detection, ringing signals, and dial tone generation. At its core is the HC-5504B SLIC (Subscriber Line Interface Circuit), a telecom chip that implements the "BORSCHT" functions that Bell System central offices provided to every telephone line.

Lift the handset, get a dial tone, pulse dial a number, and make a call over Bluetooth. Incoming calls ring the actual bell.

**Links:**
- [Check out the docs](https://cdeever.github.io/esp32-ma-bell-gateway/)
- [Check out the code](https://github.com/cdeever/esp32-ma-bell-gateway)
