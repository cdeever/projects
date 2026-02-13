---
title: "Home Rehab Tracker"
description: "Hugo-based renovation tracker for a whole-house rehab project"
summary: "A static site tracking 647 renovation tasks across a 1990s-era house — built in under 24 hours with AI-assisted development"
date: 2026-01-05
tags: ["hugo", "github-pages", "project-tracking", "renovation"]
status: "in progress"
showHero: true
heroStyle: "background"
layoutBackgroundHeaderSpace: false
---

A Hugo-based project tracking site for a whole-house renovation — scores of projects across three floors, each broken into individual tasks, resulting in hundreds of distinct work items with progress indicators showing what's done, what's in progress, and what's left. Built entirely through conversation with Claude Code in under 24 hours, auto-published to GitHub Pages on every commit.

## The idea

I have a 1990s-era house — good bones, built better than many modern houses, with larger bedrooms and 9-foot ceilings downstairs — but it needed a major cosmetic renovation and some convenience upgrades. That's a lot of projects to keep track of in my head. After building the Deevnet docs site and seeing how easy it was to use Claude Code to generate a Hugo site that auto-publishes on commit, I wanted to apply that same pattern to the renovation.

## What I did

I started after dinner on a Sunday night and spent several hours brain-dumping every renovation task I could think of — room by room, floor by floor. Claude Code generated the Hugo site structure, organized the tasks, and published it to GitHub Pages. I'd review, suggest refactors, add more detail, and it would regenerate. The next morning I got up early and put in two more hours before work, then finished the last bits during lunch in under 30 minutes. Full site, all done — as of the time of this writing, 647 tasks captured with clear progress tracking across the whole house, implemented in less than 24 hours total.

## What surprised me

Once I started the site, it became addictive. Talking to the AI and getting all the tasks accounted for had a momentum to it — each round of review surfaced more things I'd forgotten or hadn't properly scoped. The site went from a quick experiment to a genuinely comprehensive renovation roadmap faster than I expected.

With multiple projects currently in flight including the master bathroom overhaul, I had been feeling a bit of anxiety and the sense of "will this house ever be done." After capturing all the tasks, I felt very good about the progress made over the years — and now it gives a better sense of control seeing the path to the finish line.

## Result

Fully working and actively used. The site tracks hundreds of items across first floor, second floor, and non-living spaces (garage, basement, exterior), with completion status on every task. Progress bars are nested — individual tasks roll up to progress for a room or area, rooms roll up to a floor, and floors roll up to overall renovation progress on the main landing page. Each task also carries a level-of-effort weight (not visible on the site) so the AI can calculate effort-weighted progress rather than just counting checkboxes. It auto-publishes on commit and serves as the single source of truth for what's done and what's next.

## Takeaways

- Hugo + GitHub Pages + AI is an incredibly efficient way to stand up a project tracker — no SaaS, no Jira, no subscription fees, free hosting
- Conversational AI development is a natural fit for this kind of brain-dump-to-structure workflow
- This generic approach works for any significant project that needs to show progress — not just home renovation
- What would have taken days of spreadsheet wrangling was done in an evening, a morning, and a lunch break

## Links

- [Check out the site](https://cdeever.github.io/home-rehab/)
- [Check out the code](https://github.com/cdeever/home-rehab)
