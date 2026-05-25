import Link from "next/link";
import { EXAMPLES } from "@/data/examples";
import archetypesData from "@/data/archetypes.json";
import type { Archetype } from "@/lib/types";

const ARCHETYPES = archetypesData as Archetype[];
const ARCHETYPE_BY_SLUG = Object.fromEntries(ARCHETYPES.map((a) => [a.slug, a]));

export default function ExamplesPage() {
  return (
    <main style={{ maxWidth: "var(--max-grid-width)", margin: "0 auto", padding: "48px 24px" }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 16 }}>
        <Link href="/reskin" style={{ color: "var(--color-muted)" }}>← /reskin</Link> · Examples
      </p>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 32 }}>
        Examples
      </h1>
      <p style={{ maxWidth: "var(--max-text-width)", fontSize: 19, marginBottom: 48 }}>
        <Code>/reskin</Code> output from running against real projects. Each row is one project; each
        card is one concept (one archetype). Concepts are live Next.js routes you can clone and run
        locally to click through the full hero / detail / action screens.
      </p>

      {EXAMPLES.map((ex) => (
        <section key={ex.project} style={{ marginBottom: 96 }}>
          <header style={{ borderTop: "1px solid var(--color-ink)", paddingTop: 24, marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 700, letterSpacing: "-0.01em" }}>
              {ex.project}
            </h2>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--color-muted)" }}>
              Run {ex.run_id} · {ex.archetypes.length} concepts
              {ex.project_url && (
                <>
                  {" · "}
                  <a href={ex.project_url} style={{ color: "var(--color-muted)" }}>source</a>
                </>
              )}
            </div>
          </header>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 0,
            borderTop: "1px solid var(--color-ink)",
            borderLeft: "1px solid var(--color-ink)",
          }}>
            {ex.archetypes.map((concept) => {
              const archetype = ARCHETYPE_BY_SLUG[concept.archetype_slug];
              if (!archetype) return null;
              return (
                <article key={concept.archetype_slug} style={{
                  background: archetype.palette.background,
                  color: archetype.palette.primary,
                  padding: 24,
                  borderRight: "1px solid var(--color-ink)",
                  borderBottom: "1px solid var(--color-ink)",
                  minHeight: 240,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: archetype.palette.primary,
                    }}>
                      {concept.archetype_name}
                    </h3>
                    <span style={{
                      background: archetype.palette.accent,
                      color: archetype.palette.background,
                      fontFamily: "var(--font-display)",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "2px 6px",
                      letterSpacing: "0.05em",
                      flexShrink: 0,
                    }}>
                      {archetype.video_cut_score}/10
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.7,
                    color: archetype.palette.primary,
                  }}>
                    {archetype.family}
                  </p>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.45,
                    color: archetype.palette.primary,
                    opacity: 0.9,
                    marginBottom: 12,
                    flex: 1,
                  }}>
                    {concept.brief_excerpt}
                  </p>
                  <div style={{ display: "flex", gap: 0, height: 16, border: `1px solid ${archetype.palette.primary}`, opacity: 0.6 }}>
                    <div style={{ flex: 1, background: archetype.palette.primary }} />
                    <div style={{ flex: 1, background: archetype.palette.background, borderLeft: `1px solid ${archetype.palette.primary}`, borderRight: `1px solid ${archetype.palette.primary}` }} />
                    <div style={{ flex: 1, background: archetype.palette.accent }} />
                  </div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.65, margin: 0, color: archetype.palette.primary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {concept.lab_path}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      {EXAMPLES.length === 1 && (
        <section style={{ marginTop: 64, padding: 32, border: "1px dashed var(--color-muted)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
            More examples coming
          </h2>
          <p style={{ fontSize: 15, color: "var(--color-muted)", margin: 0 }}>
            /reskin runs against <code>reels</code> and <code>upneja-ai</code> are in flight. This page
            will update with their concepts when they finish.
          </p>
        </section>
      )}

      <section style={{ marginTop: 64, maxWidth: 740 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Running these locally
        </h2>
        <p style={{ fontSize: 17 }}>
          Each example concept lives as Next.js route files in a sibling lab repo. To view a concept
          in the browser, clone the target project, install /reskin, and run it yourself — or browse
          the brief and code on the local lab path noted on each card.
        </p>
      </section>
    </main>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.9em", background: "var(--color-paper-edge)", padding: "1px 6px" }}>
      {children}
    </code>
  );
}
