import Link from "next/link";
import archetypesData from "@/data/archetypes.json";
import type { Archetype } from "@/lib/types";

const ARCHETYPES = archetypesData as Archetype[];

export default function ArchetypesPage() {
  // Sort by video_cut_score descending
  const sorted = [...ARCHETYPES].sort((a, b) => b.video_cut_score - a.video_cut_score);

  return (
    <main style={{ maxWidth: "var(--max-grid-width)", margin: "0 auto", padding: "48px 24px" }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 16 }}>
        <Link href="/reskin" style={{ color: "var(--color-muted)" }}>← /reskin</Link> · The 28 Archetypes
      </p>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 32 }}>
        The 28 Archetypes
      </h1>
      <p style={{ maxWidth: "var(--max-text-width)", fontSize: 19, marginBottom: 48 }}>
        Each archetype is a JSON object with hard tokens — specific fonts (with Google Fonts URL),
        committed hex palette, exact radii, motion DNA, real reference URLs, and explicit anti-rules.
        Sub-agents sample 10 of these per run, weighted by 2-second-cut recognizability and
        constrained to one archetype per design family. Hover for the 2-sec hook.
      </p>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 0,
        borderTop: "1px solid var(--color-ink)",
        borderLeft: "1px solid var(--color-ink)",
      }}>
        {sorted.map((a) => (
          <article key={a.slug} style={{
            background: a.palette.background,
            color: a.palette.primary,
            padding: 24,
            borderRight: "1px solid var(--color-ink)",
            borderBottom: "1px solid var(--color-ink)",
            position: "relative",
            minHeight: 220,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }} title={a.two_sec_hook}>
            {/* Score badge */}
            <div style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: a.palette.accent,
              color: a.palette.background,
              fontFamily: "var(--font-display)",
              fontSize: 11,
              fontWeight: 700,
              padding: "2px 6px",
              letterSpacing: "0.05em",
            }}>
              {a.video_cut_score}/10
            </div>

            {/* Name */}
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 8,
              color: a.palette.primary,
            }}>
              {a.name}
            </h2>

            {/* Family */}
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              opacity: 0.7,
              marginBottom: 16,
              color: a.palette.primary,
            }}>
              {a.family}
            </p>

            {/* Palette swatches */}
            <div style={{ display: "flex", gap: 0, marginBottom: 12, height: 24, border: `1px solid ${a.palette.primary}` }}>
              <div style={{ flex: 1, background: a.palette.primary }} />
              <div style={{ flex: 1, background: a.palette.background, borderLeft: `1px solid ${a.palette.primary}`, borderRight: `1px solid ${a.palette.primary}` }} />
              <div style={{ flex: 1, background: a.palette.accent }} />
            </div>

            {/* Hex codes */}
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.7, margin: 0, color: a.palette.primary }}>
              {a.palette.primary} · {a.palette.background} · {a.palette.accent}
            </p>

            {/* Font */}
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.7, marginTop: 8, color: a.palette.primary }}>
              {a.font_display}
            </p>
          </article>
        ))}
      </section>

      <section style={{ marginTop: 64, maxWidth: 740 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, marginBottom: 16 }}>
          How to read these
        </h2>
        <p style={{ fontSize: 17, marginBottom: 16 }}>
          The colored tile uses the archetype&apos;s actual palette (primary / background / accent). The
          score in the corner is a 0-10 rating of how recognizable the archetype is in a 2-second
          Instagram reel cut — higher means it gets sampled more often.
        </p>
        <p style={{ fontSize: 17, marginBottom: 16 }}>
          Each archetype also carries motion DNA (the personality of motion, not just &quot;smooth&quot;), 2-3
          reference URLs (Awwwards winners or real production sites — not Dribbble shots), and explicit
          anti-rules (what would ruin the archetype). View the raw JSON in the source:{" "}
          <a href="https://github.com/ayushupneja/reskin/blob/main/skill/archetypes.json">skill/archetypes.json</a>.
        </p>
      </section>
    </main>
  );
}
