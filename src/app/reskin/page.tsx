import Link from "next/link";
import { EXAMPLES } from "@/data/examples";

export default function ReskinOverview() {
  const totalConcepts = EXAMPLES.reduce((sum, e) => sum + e.archetypes.length, 0);
  const projectCount = EXAMPLES.length;

  return (
    <main style={{ maxWidth: "var(--max-grid-width)", margin: "0 auto", padding: "48px 24px" }}>
      {/* Header */}
      <section style={{ marginBottom: 64 }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: 16,
          }}
        >
          01 · A Claude Code skill
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7vw, 96px)",
            lineHeight: 0.95,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: 32,
          }}
        >
          /reskin
        </h1>
        <p style={{ maxWidth: "var(--max-text-width)", fontSize: 21, lineHeight: 1.45 }}>
          Takes any Next.js project. Outputs ten wildly different visual reskins as interactive HTML
          mockups. Each one commits to a specific design archetype with hard tokens — exact fonts, hex
          palettes, motion DNA — and gets reviewed by a slop-critic before shipping to the gallery.
        </p>
      </section>

      {/* Quick stats */}
      <section
        style={{
          borderTop: "1px solid var(--color-ink)",
          borderBottom: "1px solid var(--color-ink)",
          padding: "32px 0",
          marginBottom: 64,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
      >
        {[
          { num: "28", label: "Design archetypes" },
          { num: "48", label: "Forbidden patterns" },
          { num: "10", label: "Parallel agents per run" },
          { num: String(totalConcepts), label: `Showcase concepts (${projectCount} projects)` },
        ].map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, lineHeight: 1 }}>
              {s.num}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-muted)", marginTop: 8 }}>
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* The problem */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginBottom: 64 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600 }}>
          The problem
        </h2>
        <div>
          <p style={{ fontSize: 18, marginBottom: 16 }}>
            Every AI-built website looks the same. Inter font. <code>bg-indigo-500</code>. Rounded-2xl cards.
            Centered hero + three feature cards. &quot;Build the future of X.&quot;
          </p>
          <p style={{ fontSize: 18, marginBottom: 16 }}>
            This isn&apos;t a v0 problem or a Bolt problem — it&apos;s a base-rate problem. LLMs predict the median of
            the training data, and the median of AI training data is Tailwind UI defaults.
          </p>
          <p style={{ fontSize: 18 }}>
            &quot;Be creative&quot; doesn&apos;t move the needle. The fix is to remove the option of generic output entirely.
          </p>
        </div>
      </section>

      <hr className="rule" />

      {/* The fix */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, margin: "64px 0" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600 }}>
          The fix
        </h2>
        <div>
          <ol style={{ paddingLeft: 0, listStyle: "none", margin: 0 }}>
            {[
              {
                title: "Anchored archetype library",
                body: "28 named design movements, each with hard tokens (specific font + Google Fonts URL, hex palette, exact radii, motion DNA, real reference URLs). The model can't default when there's no default to fall to.",
              },
              {
                title: "Reference grounding",
                body: "Each parallel sub-agent WebFetches its archetype's reference URLs (Awwwards winners, real production sites) and uses them as visual ground truth. Exemplars do work prose can't.",
              },
              {
                title: "Forbidden-patterns blocklist",
                body: "48 concrete slop signals (Inter, indigo-500, rounded-2xl everywhere, 'Build the future of X' copy) hard-coded as system-prompt anti-rules. Every fork has an explicit NO.",
              },
              {
                title: "Slop-critic pass",
                body: "A separate agent scores each output on 8 axes (typography commitment, palette commitment, layout primitive strength, copy specificity, motion personality, reference fidelity, video-cut recognizability, decision density). Anything that scored below threshold gets regenerated.",
              },
            ].map((step, i) => (
              <li key={step.title} style={{ borderTop: "1px solid var(--color-paper-edge)", padding: "20px 0", display: "grid", gridTemplateColumns: "40px 1fr", gap: 16 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--color-accent)", fontWeight: 700 }}>
                  0{i + 1}
                </span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, marginBottom: 6 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 16, color: "var(--color-ink)", margin: 0 }}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <blockquote style={{ borderLeft: "3px solid var(--color-accent)", padding: "8px 24px", margin: "32px 0", fontFamily: "var(--font-text)", fontStyle: "italic", fontSize: 19 }}>
            Slop is the absence of decisions, not the presence of any particular pattern. At every fork
            — font, palette, radius, density, motion, voice — commit.
          </blockquote>
        </div>
      </section>

      <hr className="rule" />

      {/* Explore */}
      <section style={{ margin: "64px 0" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: 24,
          }}
        >
          Explore
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, borderTop: "1px solid var(--color-ink)", borderLeft: "1px solid var(--color-ink)" }}>
          {[
            { href: "/reskin/archetypes", label: "28 Archetypes", desc: "The full catalog with hard tokens and reference sites." },
            { href: "/reskin/examples", label: "Examples", desc: `${totalConcepts} concepts across ${projectCount} real projects.` },
            { href: "/reskin/install", label: "Install", desc: "One curl-pipe-bash to add /reskin to your Claude Code." },
            { href: "/reskin/story", label: "The Story", desc: "How this got built. The research, the design, the first run." },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                padding: "28px 24px",
                borderRight: "1px solid var(--color-ink)",
                borderBottom: "1px solid var(--color-ink)",
                color: "var(--color-ink)",
                textDecoration: "none",
                background: "transparent",
              }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, marginBottom: 8 }}>
                {link.label} →
              </div>
              <div style={{ fontSize: 14, color: "var(--color-muted)" }}>{link.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
