import Link from "next/link";

export default function StoryPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 16 }}>
        <Link href="/reskin" style={{ color: "var(--color-muted)" }}>← /reskin</Link> · The Story
      </p>

      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 80px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: 24 }}>
        How /reskin got built
      </h1>

      <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--color-muted)", marginBottom: 48 }}>
        A first-person account of designing a Claude Code skill to fight AI-slop UI. One session,
        ~5 hours, from problem statement to live skill.
      </p>

      <article style={{ fontSize: 19, lineHeight: 1.65 }}>
        <Section title="The problem">
          <P>Every AI-built website looks the same.</P>
          <P>
            Inter font. <Code>bg-indigo-500</Code>. <Code>rounded-2xl</Code> on every card. Centered
            hero with one CTA. Three feature cards directly below. &quot;Build the future of X.&quot; Maybe a
            purple-to-blue gradient if the model is feeling bold. Lucide icon set, defaulted to.
          </P>
          <P>
            This isn&apos;t a v0 problem. It&apos;s a Bolt problem and a Lovable problem and a Framer-AI problem
            and a Galileo problem and a me-prompting-Claude problem. It&apos;s the median of the training
            data, and &quot;be creative&quot; prompts don&apos;t move the median.
          </P>
          <P>
            I build a lot of side projects. I also film a lot of Instagram reels where I cut into the
            apps mid-sentence — show the user the thing I just shipped. The cuts only land if the app
            has visual personality. If my reel cuts to Inter + indigo + rounded cards, it could be
            cutting to anyone&apos;s app. There&apos;s no recognition, no signature, no reason to watch. The
            reel dies.
          </P>
          <P>
            I&apos;d been working around this manually: copy a screenshot from Dribbble, paste it into the
            prompt, beg the model to match. Inconsistent results. Mostly slop with a faint cosmetic
            veneer.
          </P>
          <P>
            I wanted a skill. Input: a completed Next.js project (already built well from a
            data/journeys perspective). Output: 10 wildly different visual reskins as evaluable
            wireframes. Pick one, build it properly into the real app, film the reel against a UI that
            has an opinion.
          </P>
        </Section>

        <Section title="The research phase">
          <P>
            Before designing the skill, I spent ~5 minutes on the question of <em>why</em> AI UI
            converges. Then I dispatched three research agents in parallel.
          </P>
          <P>
            <strong>Agent A</strong> investigated prior art: how do v0, Galileo, Uizard, Magic Patterns,
            framer.ai, Locofy, and Mobbin attempt aesthetic diversity? What works, what fails, where&apos;s
            the public discourse?
          </P>
          <P>
            <strong>Agent B</strong> built a curated library: 25-30 distinct UI design archetypes, each
            with hard tokens (specific fonts, hex palettes, motion DNA, real reference URLs) and a
            &quot;would this read in a 2-second video cut?&quot; score.
          </P>
          <P>
            <strong>Agent C</strong> catalogued the AI-slop signal set: concrete observable design tells
            that mark UI as AI-generated, organized by category (typography, color, layout, component,
            copy, motion, imagery).
          </P>
          <P>
            I asked for punch lists, not surveys. Each agent came back in 4-5 minutes with concrete,
            citable findings.
          </P>
        </Section>

        <Section title="What the research found">
          <P>
            Agent A&apos;s biggest finding: <strong>anchored reference grounding beats adjectives</strong>.
            Specifying &quot;make it look like Linear&quot; or &quot;make it look like Are.na&quot; — naming an actual
            product the model has seen many times — collapses the latent space into a knowable region.
            Saying &quot;make it modern&quot; or &quot;make it clean&quot; produces the statistical mean.
          </P>
          <P>
            Agent B&apos;s library returned 28 distinct archetypes, each specific enough to be recognized in
            a flash: Swiss Editorial Grid, Bloomberg Brutalist, CRT Terminal, Tactile Brutalism, Liquid
            Glass, Frutiger Aero Revival, Cute-alism, Risograph Zine, Newsprint Broadsheet, Sports
            Almanac, Architectural Blueprint, ASCII Art Revival, Notebook Sketch, Acid Graphics,
            Bauhaus Geometric, Tarot Mystical, Photographic Editorial, Skeuomorphic Revival, Vaporwave
            Y2K, Notion Sketched, Surveillance Dossier, Acid Editorial, Tech-Bro Console, Pixel Art,
            Maximalist Collage, Cinema Letterbox, Geocities Formal, Architectural Mono-Color.
          </P>
          <P>
            Agent C catalogued 48 concrete slop signals across 7 categories. The Tailwind defaults are
            the worst offenders: <Code>bg-indigo-500</Code>, <Code>from-indigo-500 to-purple-600</Code>,{" "}
            <Code>slate-50</Code>, <Code>rounded-2xl</Code>, <Code>hover:scale-105</Code>,{" "}
            <Code>fade-in-up</Code> on scroll. But the deeper finding was the meta-pattern:
          </P>
          <Quote>Slop is the absence of decisions, not the presence of any particular pattern.</Quote>
          <P>
            Rounded corners aren&apos;t slop. <em>Uniform</em> rounded corners on every surface are. Inter
            isn&apos;t always wrong. Inter as the unexamined default is. The tell isn&apos;t any specific design
            choice — it&apos;s the <em>avoidance of choice</em>. Models regress to defaults that &quot;offend no
            one&quot; when they aren&apos;t forced to commit at every fork.
          </P>
          <P>
            This reframed the design. The skill couldn&apos;t just ban slop patterns. It had to{" "}
            <em>force a decision at every fork</em>.
          </P>
        </Section>

        <Section title="The design (four mechanisms)">
          <P>
            <strong>Anchored archetype library.</strong> Each of the 28 archetypes is a JSON object
            with hard tokens: <Code>font_display</Code>, <Code>font_import_url</Code> (a real Google
            Fonts CSS2 URL), <Code>palette</Code> with hex codes, <Code>radii_scale</Code> as an array
            of numbers, <Code>motion_dna</Code> (the personality of motion, not just &quot;smooth&quot;),{" "}
            <Code>reference_urls</Code> (2-3 real sites), and{" "}
            <Code>anti_rules</Code> (what would ruin the archetype).
          </P>
          <P>
            <strong>Reference grounding.</strong> Each parallel sub-agent WebFetches its archetype&apos;s
            reference URLs and uses them as visual ground truth. Exemplars do work prose can&apos;t.
          </P>
          <P>
            <strong>Forbidden-patterns blocklist.</strong> All 48 slop signals are hard-coded as a
            &quot;NO&quot; list in the concept-generator prompt. The model sees: do not use Inter. Do not use{" "}
            <Code>bg-indigo-500</Code>. Do not use the centered-hero + three-feature-cards layout.
          </P>
          <P>
            <strong>Slop-critic pass.</strong> After 10 concepts are generated, a separate critic agent
            scores each on 8 axes: typography commitment, palette commitment, layout primitive
            strength, copy specificity, motion personality, reference fidelity, video-cut
            recognizability, decision density.
          </P>
          <P>
            The constitutional rule sits at the top of every sub-agent&apos;s prompt: <em>Slop is the
            absence of decisions. At every fork — font, palette, radius, density, motion, voice —
            commit. Any output that could have come from defaults is rejected.</em>
          </P>
        </Section>

        <Section title="Sandbox, not a branch">
          <P>
            Two architectural decisions that mattered.
          </P>
          <P>
            <strong>Sandbox sibling repo, not a branch in the target project.</strong> When you run{" "}
            <Code>/reskin</Code> on <Code>~/Projects/your-app/</Code>, it creates{" "}
            <Code>~/Projects/your-app-reskin-lab/</Code> as a standalone Next.js app. Real stack, real
            components, real data shapes, but zero risk to your prod code.
          </P>
          <P>
            <strong>Parallel generation with shared critique.</strong> Ten concept generators run
            concurrently — each truly isolated from the others&apos; aesthetic choices, so they can&apos;t
            accidentally converge. Then a single critic agent reviews all ten holistically.
          </P>
        </Section>

        <Section title="The first run">
          <P>
            Right after the skill installed, I ran it on jiyajale (a smaller side project). 10
            concepts generated in ~15 minutes. Sampled archetypes were a clean mix: acid-graphics,
            risograph-zine, bauhaus-geometric, geocities-formal, skeuomorphic-revival, crt-terminal,
            swiss-editorial-grid, sports-almanac, tarot-mystical, pixel-art-bitmap.
          </P>
          <P>
            Each concept committed to its archetype. The CRT Terminal version was actually
            terminal-green-on-black with a blinking cursor. The Geocities Formal version had Times New
            Roman, default-blue underlined links, and tiled-background vibes. The Risograph Zine had
            two-color overprint with visible misregistration. They didn&apos;t all <em>succeed</em>{" "}
            equally — but they didn&apos;t collapse to the median. That was the test.
          </P>
        </Section>

        <Section title="The bigger pattern">
          <P>
            The thing I took away from building this isn&apos;t the skill itself. It&apos;s the workflow.
          </P>
          <P>
            The skill is ~25 files, ~1500 lines, built in one session. None of those files are
            particularly clever. What&apos;s load-bearing is the research-then-spec-then-plan-then-execute
            cycle. Skipping research would have produced a worse archetype library. Skipping the spec
            would have produced a leaky design. Skipping the plan would have wasted subagent time.
            Doing each in order, with the previous step&apos;s artifacts as input, made the final
            implementation almost mechanical.
          </P>
          <P>
            This is also the first thing I&apos;ve shipped where the <em>constitutional rule</em> — the
            meta-principle behind the design — is encoded directly into the runtime, not just the docs.
            Every sub-agent literally reads &quot;slop is the absence of decisions&quot; before generating its
            concept.
          </P>
          <P>
            The other test will be whether the gallery cuts well in actual Instagram reels. That&apos;s
            what this was for. The reels are coming.
          </P>
        </Section>

        <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--color-muted)", marginTop: 80, textAlign: "center" }}>
          — Ayush Upneja, May 2026 <br />
          Built with <a href="https://claude.com/code">Claude Code</a> + the superpowers skill suite.
        </p>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: 32,
        fontWeight: 700,
        letterSpacing: "-0.01em",
        marginBottom: 24,
        marginTop: 64,
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: 20 }}>{children}</p>;
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code style={{
      fontFamily: "var(--font-mono)",
      fontSize: "0.9em",
      background: "var(--color-paper-edge)",
      padding: "1px 6px",
      color: "var(--color-ink)",
    }}>
      {children}
    </code>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote style={{
      borderLeft: "3px solid var(--color-accent)",
      padding: "8px 24px",
      margin: "32px 0",
      fontStyle: "italic",
      fontSize: 22,
      lineHeight: 1.4,
    }}>
      {children}
    </blockquote>
  );
}
