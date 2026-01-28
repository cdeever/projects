---
title: "ESP32 Pumpkin"
weight: 10
---

# ESP32 Pumpkin

A Halloween decoration project combining animated lighting with motion-activated audio. An ESP32 drives a strip of WS2812B LEDs to create a realistic flickering flame effect inside the pumpkin, while a PIR motion sensor triggers an evil laugh when trick-or-treaters approach.

Written in C with the ESP-IDF, the implementation uses FreeRTOS to run the LED animation and I2S audio playback as separate tasks, keeping everything smooth and responsive. Different sounds can be swapped in for variety.

Future plans: build two more of these in different size pumpkins, each with their own voice, for an evil pumpkin family effect.

<div style="display: flex; gap: 1em; flex-wrap: wrap;">
  <img src="pumpkin-glow.jpg" alt="Pumpkin glowing" style="max-width: 250px;">
  <img src="pumpkin-strobe.jpg" alt="Pumpkin strobing" style="max-width: 250px;">
</div>

**Links:**
- [GitHub Repository](https://github.com/cdeever/esp32-pumpkin)
