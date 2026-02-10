# Content Style Guide

This site is a working journal of real projects, repairs, builds, and learning.
Everything here is first-person, story-driven, and grounded in actual experience.

The goal is not to document perfectly — it is to capture the **story, decisions, and lessons** behind each project so others (and future me) can follow the thinking.

---

## Voice & Tone

**Primary voice:** first-person, builder's journal
**Perspective:** personal, practical, honest
**Audience:** curious builders, future me, and anyone who likes seeing how things actually get made or fixed

### Writing style
- Write in **first person** ("I", "we" when appropriate)
- Conversational but technically accurate
- Clear and direct — no corporate tone
- Assume reader is smart but not inside my head
- Prefer short paragraphs and scannable sections

### Tone guidelines
- Practical over academic
- Curious over authoritative
- Honest about mistakes and surprises
- Avoid hype and marketing language
- Avoid sounding like formal documentation
- Avoid sounding like AI-generated filler

### What to emphasize
- Why the project exists
- What actually happened
- Decisions and tradeoffs
- Lessons learned
- What I'd do differently

### What to avoid
- Overly polished "success only" narratives
- Generic filler explanations
- Long textbook-style theory (unless it's a learning story)
- Corporate or resume-style language

This site should read like:
> A well-organized lab notebook crossed with a workshop journal

---

## Structure Rules

Every story must follow a consistent narrative structure so readers know what to expect.

Each story uses one of three story types:
- **Build** — creating something new
- **Repair** — fixing, restoring, troubleshooting
- **Learning** — exploring to understand

Claude or manual writing should follow the appropriate template.

### Required opening section for all stories

Every post must begin with a quick orientation — "the story in 30 seconds" — that gives readers immediate context. Before diving into sections, include a short paragraph (2-4 sentences) that answers: what is this project, why does it exist, and where does it stand now? This lets someone scanning the site decide in seconds whether they want to read more.

---

## Story Types

Each story type has a template that defines the section headings and narrative flow. Use the matching template when writing a new post.

| Story type | Template file |
|---|---|
| Build | `build-story-template.md` |
| Repair | `repair-story-template.md` |
| Learning | `learning-story-template.md` |

### Long-form vs. short-form

Each template offers two variants:

- **Long-form** — for deep, multi-phase projects with real narrative arc. Use when the project has enough history, decisions, and surprises to sustain detailed sections.
- **Short-form** — for focused, single-purpose builds, quick fixes, or small experiments. Covers the same narrative beats (why, what, surprise, result, lessons) in a compact format.

Pick the form that fits the project. A weekend Halloween build doesn't need ten sections; a multi-year infrastructure platform does. Both forms use the same voice, tone, and opening orientation paragraph.

Not every section needs to be long — some may be a single sentence — but keep the headings so stories stay scannable and consistent.

---

## Front Matter Conventions

Every post uses Blowfish front matter in YAML format. Required and optional fields:

| Field | Required | Description |
|---|---|---|
| `title` | yes | Human-readable project title |
| `description` | yes | One-line summary for SEO and social sharing |
| `summary` | no | Short blurb shown on list/card views (defaults to `description` if omitted) |
| `date` | yes | Publication or last-updated date (`YYYY-MM-DD`) |
| `draft` | yes | Set `true` while writing, `false` to publish |
| `tags` | no | List of tags for filtering (e.g., `[esp32, arduino, iot]`) |
| `status` | no | Freeform project status (e.g., `"complete"`, `"in progress"`, `"on hold"`) |
| `showHero` | no | Set `true` to display the feature image as a hero banner |
| `heroStyle` | no | Hero layout — typically `"background"` |

---

## Image Guidelines

- The feature image for a post must be named `feature.*` (e.g., `feature.jpg`, `feature.png`) and placed inside the page bundle alongside `index.md`. Blowfish uses this for card thumbnails and hero banners automatically.
- Keep images at a reasonable size — aim for under 500 KB per image. Resize or compress before committing.
- Use descriptive filenames for additional images (e.g., `wiring-diagram.jpg`, `finished-build.jpg`).

---

## Link Conventions

Every post should end with a `## Links` section containing bulleted markdown links to relevant external resources. Use clear labels:

```markdown
## Links

- [GitHub Repository](https://github.com/user/project)
- [Documentation Site](https://project.docs.example.com)
- [Service Manual (PDF)](https://example.com/manual.pdf)
- [Related Project — Widget Controller](../widget-controller/)
```

Omit the section entirely if there are genuinely no external links, but most projects will have at least a repo link.
