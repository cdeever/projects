---
title: "Deevnet"
description: "Infrastructure automation ecosystem using IaC and CaC"
summary: "A fully rebuildable infrastructure platform — all hosts are stateless, all configuration lives in code"
date: 2025-09-04
tags: ["infrastructure", "ansible", "terraform", "packer", "pxe", "iac"]
status: "in progress"
showHero: true
heroStyle: "background"
---

Deevnet is a portable, fully rebuildable infrastructure platform — a home lab you can throw in a bag, take to a Meetup, and rebuild from scratch using nothing but code and a GitHub login. It started as a way to get a consistent network for embedded programming projects and turned into a full Infrastructure as Code ecosystem spanning two physical deployments. The automation is largely in place for the builder node and network layer, with hypervisor automation in progress.

## The itch

For years I've been a home lab enthusiast, but I kept running into the same problem: servers built by hand inevitably drift, go EOL, or die — and then you're staring down a rebuild with no memory of how you set it up in the first place. Hard drive crashes, dead SD cards, outdated operating systems. Every time, it was a painful manual reconstruction. Documentation never kept up because maintaining it was its own chore.

Around the same time, I got into embedded programming and joined a local Meetup group. Working with microcontrollers and IoT devices that need to talk to each other or reach the internet means you need a real, consistent network — not just your laptop's hotspot. I thought: why not bundle a portable home lab into a toolkit alongside my breadboards and microcontrollers, so I can work on IoT projects on the go?

## The idea

The vision was two things at once. First, a portable development lab with real networking — something I could carry to a Meetup and have a proper infrastructure environment wherever I am. Second, a hands-on learning platform for the Infrastructure as Code and Configuration as Code skills I use professionally. Everything rebuildable from GitHub. Every host stateless. Lose a drive, wipe a card, swap hardware — doesn't matter. Pull the repos, run the automation, and you're back.

## Constraints

I wanted to keep the build reasonably inexpensive and physically lightweight. That meant refurbished small-form-factor hardware and single-board computers rather than rackmount gear. The network switch needed VLAN support, so a smart switch was required, but everything else was chosen for cost and portability.

I also set myself a design constraint: could the entire platform be bootstrapped air-gapped, from a single "frozen" machine with all the artifacts baked in? Not because I actually need to work disconnected, but as a proof of concept — if you can build infrastructure with no external dependencies, you really do have everything codified.

## Design approach

I stuck with industry-standard tooling: Ansible for configuration management, Packer for image builds, Terraform for provisioning, and PXE for bare-metal deployment. The choice was deliberate — these are the tools I work with professionally, and using them here means the learning transfers both directions.

The key architectural decision was the **Builder Node**. It solves the chicken-and-egg problem: you need existing infrastructure to build new infrastructure. The Builder Node consolidates all the build tools, artifacts, and automation into a single portable configuration. Apply the roles to any machine — or even an existing box — and you've got a bootstrap point that can stand up a full environment with minimal manual setup.

The physical hardware stack for the mobile deployment is compact: a travel router on the edge to interface with whatever upstream internet is available, a dual-NIC Zimaboard configured as the gateway handling DNS, DHCP, NAT, and Wake-on-LAN for easy startup, a 16-port smart switch, and two refurbished small-form-factor desktop PCs running Proxmox — one for the management plane, one for tenant applications.

## Build log

The project has gone through three distinct phases.

**Phase 1: Manual.** I set everything up by hand — installed operating systems, configured services, wired the network. This got the platform functional and helped me understand what the automation would eventually need to do.

**Phase 2: Codification.** I started converting the manual setup into automation, working through Ansible playbooks, Packer image definitions, and PXE boot configurations. The goal was to be able to wipe any host and have it rebuild itself from code.

**Phase 3: AI-assisted development.** I began using ChatGPT to flush out ideas and architectural decisions, then handing implementation work over to Claude Code. The productivity difference has been dramatic — what used to take weeks or months of development time can be done in hours. Some new features have gone from concept to working implementation with full documentation in just minutes.

## Challenges

The Raspberry Pi image builder was the gnarliest problem. The SBC hat I wanted to automate requires the physical hardware to be present during installation, so a single-pass automated image build was off the table. I had to split it into two passes: first, build the base image, then run the hardware-specific installer with the hat actually attached to a real Pi. On top of that, building ARM images on x86 hardware required some creative container configuration to handle the cross-architecture build. In the end, it's actually a very clean solution — fully codified in a repeatable pattern that works for future Pi images, and it even bundles a validation script to verify the result.

## Breakthrough moment

The moment it clicked was when the Ansible inventory structure came together. I got a clean separation between physical host fields and environment-level configuration, and wired up DHCP and DNS — both A-records and CNAMEs — to provision straight from inventory. One source of truth driving the whole network layer. That was when it started feeling like a real platform instead of a collection of scripts.

The other satisfying milestone was the first time I wiped an SD card clean, reimaged a Pi, and felt absolutely nothing. No anxiety, no scrambling for notes. Just run the automation and it's back. That's when the "fully rebuildable" philosophy stopped being aspirational and started being real.

## Current state

The Builder Node automation is largely complete and working well. Network automation covers DNS, DHCP, and basic provisioning from inventory. The Raspberry Pi image pipeline is solid with its two-pass build process.

The router layer needs work — I'm planning to move from OPNsense to a more automation-friendly platform, likely VyOS, so all the VLAN setup can be fully codified. Hypervisor automation for rebuilding the Proxmox nodes is started but still in progress.

The platform exists in two deployments: Deevnet Mobile (the portable lab) and Deevnet Home (permanent home infrastructure), both managed from the same codebase.

## What's next

The target milestone is a full **recovery event** — once all the repos are filled in and each component has been individually rebuilt and validated, I'll wipe the entire platform and rebuild it from scratch end to end. When that works, we'll know we're done.

Before that, the immediate priorities are migrating the router to VyOS and completing the Proxmox hypervisor automation. Those are the biggest remaining gaps between "mostly automated" and "fully rebuildable."

## Lessons learned

This project has been a crash course in when to use which tool. Ansible, Terraform, and Packer each have a sweet spot, and understanding which problems belong to which tool has been one of the biggest takeaways.

Setting up Hugo-based documentation that publishes to GitHub Pages has been an unexpectedly efficient mechanism for keeping docs current. The docs explain exactly how the system works in a format that's understandable by both humans and AI agents — which matters when you're using agentic AI as a development partner.

And the AI-assisted workflow itself has been a revelation. The combination of using one tool to think through architecture and another to implement it has fundamentally changed what's possible for a solo builder with limited evening and weekend hours.

## Links

- [Check out the docs](https://deevnet.github.io/deevnet-docs/)
- [Check out the code](https://github.com/deevnet)
