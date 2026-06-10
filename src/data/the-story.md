# How `/reskin` Got Built

A first-person account of designing a Claude Code skill to fight AI-slop UI. One session, ~5 hours, from problem statement to live skill.

---

## The problem

Every AI-built website looks the same.

Inter font. `bg-indigo-500`. `rounded-2xl` on every card. Centered hero with one CTA. Three feature cards directly below. "Build the future of X." Maybe a purple-to-blue gradient if the model is feeling bold. Lucide icon set, defaulted to.

This isn't a v0 problem. It's a Bolt problem and a Lovable problem and a Framer-AI problem and a Galileo problem and a me-prompting-Claude problem. It's the median of the training data, and "be creative" prompts don't move the median.

I build a lot of side projects. I also film a lot of Instagram reels where I cut into the apps mid-sentence — show the user the thing I just shipped. The cuts only land if the app has visual personality. If my reel cuts to Inter + indigo + rounded cards, it could be cutting to *anyone's* app. There's no recognition, no signature, no reason to watch. The reel dies.

I'd been working around this manually: copy a screenshot from Dribbble, paste it into the prompt, beg the model to match. Inconsistent results. Mostly slop with a faint cosmetic veneer.

I wanted a skill. Input: a completed Next.js project (already built well from a data/journeys perspective). Output: 10 wildly different visual reskins as evaluable wireframes. Pick one, build it properly into the real app, film the reel against a UI that has an opinion.

## The research phase

Before designing the skill, I spent ~5 minutes on the question of *why* AI UI converges. Then I dispatched three research agents in parallel:

**Agent A** investigated prior art: how do v0, Galileo, Uizard, Magic Patterns, framer.ai, Locofy, and Mobbin attempt aesthetic diversity? What works, what fails, where's the public discourse?

**Agent B** built a curated library: 25-30 distinct UI design archetypes, each with hard tokens (specific fonts, hex palettes, motion DNA, real reference URLs) and a "would this read in a 2-second video cut?" score.

**Agent C** catalogued the AI-slop signal set: concrete observable design tells that mark UI as AI-generated, organized by category (typography, color, layout, component, copy, motion, imagery).

I asked for punch lists, not surveys. Each agent came back in 4-5 minutes with concrete, citable findings.

## What the research found

Agent A's biggest finding: **anchored reference grounding beats adjectives**. Specifying "make it look like Linear" or "make it look like Are.na" — naming an actual product the model has seen many times — collapses the latent space into a knowable region. Saying "make it modern" or "make it clean" produces the statistical mean. v0 and Magic Patterns generate multiple variants up front, which forces differentiation. Krea and Uizard ingest reference images instead of asking the model to invent. The pattern across what works: hard tokens (hex codes, exact font URLs, exact spacing) beat prose every time.

Agent B's library returned 28 distinct archetypes, each specific enough to be recognized in a flash: Swiss Editorial Grid, Bloomberg Brutalist, CRT Terminal, Tactile Brutalism, Liquid Glass (post-Apple WWDC25), Frutiger Aero Revival, Cute-alism (kawaii brutalist), Risograph Zine, Newsprint Broadsheet, Sports Almanac, Architectural Blueprint, ASCII Art Revival, Notebook Sketch, Acid Graphics, Bauhaus Geometric, Tarot Mystical, Photographic Editorial, Skeuomorphic Revival, Vaporwave Y2K, Notion Sketched, Surveillance Dossier, Acid Editorial, Tech-Bro Console, Pixel Art, Maximalist Collage, Cinema Letterbox, Geocities Formal, Architectural Mono-Color. Each one came with required font families, color logic, motion personality, real reference URLs (Awwwards winners, real production sites — not Dribbble shots which are often fake), and explicit anti-rules.

Agent C catalogued 48 concrete slop signals across 7 categories. The Tailwind defaults are the worst offenders: `bg-indigo-500`, `from-indigo-500 to-purple-600`, `slate-50`, `rounded-2xl`, `hover:scale-105`, `fade-in-up` on scroll. But the deeper finding was the meta-pattern:

> *Slop is the absence of decisions, not the presence of any particular pattern.*

Rounded corners aren't slop. *Uniform* rounded corners on every surface are. Inter isn't always wrong. Inter as the unexamined default is. The tell isn't any specific design choice — it's the *avoidance of choice*. Models regress to defaults that "offend no one" when they aren't forced to commit at every fork. The cost of being generic is invisible to the model; the cost of a bold-but-wrong choice is high. So they're generic.

This reframed the design. The skill couldn't just ban slop patterns. It had to *force a decision at every fork*.

## The design (four mechanisms)

The pipeline:

**1. Anchored archetype library.** Each of the 28 archetypes is a JSON object with hard tokens: `font_display`, `font_text`, `font_import_url` (a real Google Fonts CSS2 URL), `palette` with hex codes, `radii_scale` as an array of numbers, `shadow_recipe`, `motion_dna` (the personality of motion, not just "smooth"), `reference_urls` (2-3 real sites), `two_sec_hook` (what's recognizable in a fast cut), `anti_rules` (what would ruin this archetype). The skill samples 10 of 28 weighted by `video_cut_score`, with a hard family-diversity constraint so no two archetypes from the same family appear in the same run.

**2. Reference grounding.** Each parallel sub-agent WebFetches its archetype's reference URLs and uses them as visual ground truth. Exemplars do work prose can't.

**3. Forbidden-patterns blocklist.** All 48 slop signals are hard-coded as a "NO" list in the concept-generator prompt. The model sees: do not use Inter. Do not use `bg-indigo-500`. Do not use the centered-hero + three-feature-cards layout. The blocklist is appended verbatim to every generation.

**4. Slop-critic pass.** After 10 concepts are generated, a separate critic agent scores each on 8 axes: typography commitment, palette commitment, layout primitive strength, copy specificity, motion personality, reference fidelity, video-cut recognizability, decision density. Anything scoring below threshold on two or more axes gets regenerated with explicit feedback. One regen cycle per concept; beyond that, accept and flag in the gallery.

The constitutional rule sits at the top of every sub-agent's prompt: *Slop is the absence of decisions. At every fork — font, palette, radius, density, motion, voice — commit. Any output that could have come from defaults is rejected.*

## The architecture

Two architectural decisions that mattered:

**Sandbox sibling repo, not a branch in the target project.** When you run `/reskin` on `~/Projects/your-app/`, it creates `~/Projects/your-app-reskin-lab/` as a standalone Next.js app. Real stack, real components, real data shapes, but zero risk to your prod code. Runs accumulate as timestamped directories. A `LIVE.md` at lab root tracks which concept you've promoted.

**Parallel generation with shared critique.** Ten concept generators run concurrently (one per archetype) — each truly isolated from the others' aesthetic choices, so they can't accidentally converge. Then a single critic agent reviews all ten holistically and triggers regeneration for the worst. This pattern is what Agent A's research showed actually works at scale.

## Implementation: subagent-driven, 14 tasks

I wrote a spec (`docs/SPEC.md`), then a plan (`docs/PLAN.md`) that broke the skill into 14 tasks, each with explicit file paths, full code/content, and TDD steps where applicable. Then I executed using `superpowers:subagent-driven-development`.

Most tasks were mechanical — writing markdown files whose content was already specified in the plan. I did those inline. Task 4 (transcribing 28 archetypes into JSON with Google Fonts substitutions for commercial fonts) was the one task that benefitted from a dedicated subagent: focused context, careful schema adherence, validator-passing on first return. Came back in ~4 minutes with `PASS: 28 archetypes validated; 16 families`.

Tests are minimal but real: a `jq`-based schema validator for `archetypes.json`, and a bash test that asserts `scaffold-lab.sh` produces the expected file structure with substitutions. Both pass.

Total session time: roughly 5 hours from "I have an idea" to "the skill is installed and discoverable." Total cost: a few dollars in Claude API tokens.

## The first run: jiyajale

Right after the skill installed, I ran it on `~/Projects/jiyajale/` (a smaller side project). 10 concepts generated in ~15 minutes. Sampled archetypes were a clean mix: acid-graphics, risograph-zine, bauhaus-geometric, geocities-formal, skeuomorphic-revival, crt-terminal, swiss-editorial-grid, sports-almanac, tarot-mystical, pixel-art-bitmap.

Each concept committed to its archetype. The CRT Terminal version was actually terminal-green-on-black with a blinking cursor. The Geocities Formal version had Times New Roman, default-blue underlined links, and tiled-background vibes. The Risograph Zine had two-color overprint with visible misregistration. They didn't all *succeed* equally — some felt closer to their archetype than others — but they didn't collapse to the median. That was the test.

## What I'd do differently

A few things became clear after the first end-to-end run that I'd reconsider for v1.1 or v2:

- **The slop-critic is text-based.** It reads the generated code and scores against the forbidden-patterns blocklist. But some slop is visual — only obvious when you see the rendered pixels. A Playwright-based screenshot + image-critic pass would catch what the text critic misses. Deferred to v2.
- **No `/reskin promote` subcommand yet.** When you pick a winning concept, you currently edit `LIVE.md` and `status.md` by hand. The subcommand is in the spec but deferred to v1.1 to keep the v1 surface tight.
- **No way to add custom archetypes yet.** If you want to ship a "Camp Neja Postcard" archetype, you have to edit `archetypes.json` directly. v2 will support `~/.claude/skills/reskin/user-archetypes.json` that merges with the built-ins.
- **Only Next.js is supported.** v1 reads `app/` or `pages/` directories specifically. Vue/Svelte/Astro would need separate journey-extraction logic.

## The bigger pattern

The thing I took away from building this isn't the skill itself. It's the workflow.

The skill is ~25 files, ~1500 lines, built in one session. None of those files are particularly clever. What's load-bearing is the research-then-spec-then-plan-then-execute cycle. Skipping research would have produced a worse archetype library. Skipping the spec would have produced a leaky design. Skipping the plan would have wasted subagent time. Doing each in order, with the previous step's artifacts as input, made the final implementation almost mechanical.

This is also the first thing I've shipped where the *constitutional rule* — the meta-principle behind the design — is encoded directly into the runtime, not just the docs. Every sub-agent literally reads "slop is the absence of decisions" before generating its concept. Whether that actually changes the model's behavior is an empirical question, but it's a different bet than just listing rules.

The other test will be whether the gallery cuts well in actual Instagram reels. That's what this was for. The reels are coming.

---

*— Ayush Upneja, May 2026*
*Built with [Claude Code](https://claude.com/code) + the `superpowers` skill suite.*
*Source: [github.com/upneja/reskin](https://github.com/upneja/reskin)*
*Examples and archetype catalog: [design.upneja.ai/reskin](https://design.upneja.ai/reskin)*
