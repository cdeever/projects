---
title: "ESP32 Pumpkin"
weight: 10
---

# ESP32 Pumpkin

A Halloween decoration project combining animated lighting with motion-activated audio. An ESP32 drives a strip of WS2812B LEDs to create a realistic flickering flame effect inside the pumpkin, while a PIR motion sensor triggers spooky sound playback when trick-or-treaters approach.

The implementation uses FreeRTOS to run the LED animation and audio playback as separate tasks, keeping everything smooth and responsive. Easy to customize the flame patterns and swap in different audio effects.

<div style="display: flex; gap: 1em; flex-wrap: wrap;">
  <img src="pumpkin-glow.jpg" alt="Pumpkin glowing" style="max-width: 250px;">
  <img src="pumpkin-strobe.jpg" alt="Pumpkin strobing" style="max-width: 250px;">
</div>

**Links:**
- [GitHub Repository](https://github.com/cdeever/esp32-pumpkin)
