import Link from "next/link";

export default function InstallPage() {
  return (
    <main style={{ maxWidth: "var(--max-grid-width)", margin: "0 auto", padding: "48px 24px" }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 16 }}>
        <Link href="/reskin" style={{ color: "var(--color-muted)" }}>← /reskin</Link> · Install
      </p>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 32 }}>
        Install /reskin
      </h1>

      <section style={{ maxWidth: 740, marginBottom: 48 }}>
        <p style={{ fontSize: 18, marginBottom: 16 }}>
          One command. Copies the skill into your local Claude Code skills directory. Works on macOS
          and Linux. Requires git and (optionally, for the archetype validator) jq.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          1. Run the installer
        </h2>
        <pre>
{`curl -fsSL https://raw.githubusercontent.com/ayushupneja/reskin/main/install.sh | bash`}
        </pre>
        <p style={{ fontSize: 15, color: "var(--color-muted)", marginTop: 12 }}>
          Or clone the repo and run <code>install.sh</code> manually. The script clones the repo to a
          temp directory and copies the <code>skill/</code> contents to <code>~/.claude/skills/reskin/</code>.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          2. Restart Claude Code (or open a new session)
        </h2>
        <p style={{ fontSize: 17 }}>
          The Claude Code harness loads skills at session start. After installing, open a new terminal
          and run <code>claude</code>. Type <code>/</code> and confirm <code>reskin</code> appears in the
          autocomplete list.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          3. Run it on a project
        </h2>
        <p style={{ fontSize: 17, marginBottom: 16 }}>
          Open a Next.js project and invoke the skill:
        </p>
        <pre>
{`cd ~/Projects/your-next-app
claude
> /reskin`}
        </pre>
        <p style={{ fontSize: 15, color: "var(--color-muted)", marginTop: 12 }}>
          Optional flag: <code>/reskin --archetypes bloomberg-brutalist,crt-terminal,risograph-zine</code> to pre-select
          archetypes instead of weighted-random sampling.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          What it does
        </h2>
        <ol style={{ paddingLeft: 20, fontSize: 17, lineHeight: 1.7 }}>
          <li>Reads your routes, git log, README, CLAUDE.md to identify the top 3 user-journey screens</li>
          <li>Samples 10 of 28 baked-in design archetypes (weighted by 2-sec-cut recognizability, family-diverse)</li>
          <li>Dispatches 10 parallel sub-agents — each generates hero + 2 supporting screens committed to one archetype</li>
          <li>Slop-critic pass reviews and regenerates concepts where defaults leaked in</li>
          <li>Scaffolds <code>~/Projects/&lt;your-app&gt;-reskin-lab/</code> as a standalone Next.js sandbox</li>
          <li>Runs <code>npm install</code>, starts dev server on port 3001, opens browser to the gallery</li>
        </ol>
        <p style={{ fontSize: 15, color: "var(--color-muted)", marginTop: 16 }}>
          Total runtime: about 10-15 minutes per project. Subsequent runs reuse the lab repo.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Requirements
        </h2>
        <ul style={{ paddingLeft: 20, fontSize: 17, lineHeight: 1.7 }}>
          <li><a href="https://claude.com/code">Claude Code</a> installed</li>
          <li>A Next.js project (App Router or Pages). Vue/Svelte/Astro not yet supported.</li>
          <li><code>jq</code> for the validator (<code>brew install jq</code> on macOS)</li>
          <li>Node.js 20+ for the generated lab repo</li>
        </ul>
      </section>

      <hr className="rule" />

      <section style={{ margin: "48px 0" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--color-muted)" }}>
          Source: <a href="https://github.com/ayushupneja/reskin">github.com/ayushupneja/reskin</a> · MIT
        </p>
      </section>
    </main>
  );
}
