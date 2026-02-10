# Story Templates

This folder contains reference templates and style guidance for writing project stories on the site. These are NOT Hugo archetypes — they are reference documents for content authors.

## Contents

- **styleguide.md** — Voice, tone, and structure rules for all content
- **build-story-template.md** — Template for Build Story projects (new builds from scratch)
- **repair-story-template.md** — Template for Repair Story projects (fixing, restoring, modding)
- **learning-story-template.md** — Template for Learning Story projects (skill acquisition, experiments)

## Usage

1. Review the styleguide before writing
2. Pick the template that best matches your project type
3. Copy the section headings into your new content file
4. Fill in each section following the guidance in the template

For creating new Hugo content files with proper front matter, use the archetypes instead:
```bash
hugo new --kind build-story electronics/my-project
hugo new --kind repair-story car-projects/my-repair
hugo new --kind learning-story learning/my-topic
```
