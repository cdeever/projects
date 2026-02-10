---
title: "Home Rehab"
description: "Hugo-based renovation tracker for a whole-house rehab project"
summary: "A static site tracking 647 renovation tasks across a 1990s-era house — built in under 24 hours with AI-assisted development"
date: 2026-01-05
tags: ["hugo", "github-pages", "project-tracking", "renovation"]
status: "in progress"
showHero: true
heroStyle: "background"
---

A Hugo-based project tracking site for a whole-house renovation — 647 tasks across three floors, with progress indicators showing what's done, what's in progress, and what's left. Built entirely through conversation with Claude Code in under 24 hours, auto-published to GitHub Pages on every commit.

## The itch

Two things converged. First, I have a 1990s-era house with years of in-progress renovation work and significant projects still ahead before the place is fully up to date — way too much to keep track of in my head. Second, after building the Deevnet docs site and seeing how easy it was to use Claude Code to generate a Hugo site that auto-publishes on commit, I wanted to apply that same pattern to the renovation.

## What I did

I started after dinner on a Sunday night and spent several hours brain-dumping every renovation task I could think of — room by room, floor by floor. Claude Code generated the Hugo site structure, organized the tasks, and published it to GitHub Pages. I'd review, suggest refactors, add more detail, and it would regenerate. The next morning I got up early and put in two more hours before work, then finished the last bits during lunch in under 30 minutes. Full site, all done — 647 tasks with clear progress tracking across the whole house, implemented in less than 24 hours total.

## What surprised me

Once I started the site, it became addictive. Talking to the AI and getting all the tasks accounted for had a momentum to it — each round of review surfaced more things I'd forgotten or hadn't properly scoped. The site went from a quick experiment to a genuinely comprehensive renovation roadmap faster than I expected.

## Result

Fully working and actively used. The site tracks 647 items across first floor, second floor, and non-living spaces (garage, basement, exterior), with completion status on every task. It auto-publishes on commit and serves as the single source of truth for what's done and what's next.

## Takeaways

- Hugo + GitHub Pages + AI is an incredibly efficient way to stand up a project tracker — no SaaS, no Jira, no subscription fees, free hosting
- Conversational AI development is a natural fit for this kind of brain-dump-to-structure workflow
- This generic approach works for any significant project that needs to show progress — not just home renovation
- What would have taken days of spreadsheet wrangling was done in an evening, a morning, and a lunch break

## Links

- [Documentation Site](https://cdeever.github.io/home-rehab/)
- [GitHub Repository](https://github.com/cdeever/home-rehab)
