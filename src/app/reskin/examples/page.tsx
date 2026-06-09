import Link from "next/link";
import { EXAMPLES } from "@/data/examples";
import archetypesData from "@/data/archetypes.json";
import { ShowcaseLink } from "@/components/reskin-showcase";
import type { Archetype } from "@/lib/types";

const ARCHETYPES = archetypesData as Archetype[];
const ARCHETYPE_BY_SLUG = Object.fromEntries(ARCHETYPES.map((a) => [a.slug, a]));
const totalConcepts = EXAMPLES.reduce((sum, example) => sum + example.archetypes.length, 0);

export default function ExamplesPage() {
  return (
    <main style={{ maxWidth: "var(--max-grid-width)", margin: "0 auto", padding: "48px 24px" }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 16 }}>
        <Link href="/reskin" style={{ color: "var(--color-muted)" }}>← /reskin</Link> · Examples
      </p>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 32 }}>
        Live examples
      </h1>
      <p style={{ maxWidth: "var(--max-text-width)", fontSize: 19, marginBottom: 48 }}>
        <Code>/reskin</Code> output from real projects, rendered here as public visual previews.
        Each concept shows the actual design direction across hero, detail, and action screens.
        Click any preview to open its dedicated showcase page.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          borderTop: "1px solid var(--color-ink)",
          borderLeft: "1px solid var(--color-ink)",
          marginBottom: 64,
        }}
      >
        {[
          ["Projects", EXAMPLES.length],
          ["Concepts", totalConcepts],
          ["Screens implied", totalConcepts * 3],
          ["Public previews", totalConcepts],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              borderRight: "1px solid var(--color-ink)",
              borderBottom: "1px solid var(--color-ink)",
              padding: 18,
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: 34, lineHeight: 1 }}>
              {value}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-muted)", textTransform: "uppercase", marginTop: 8 }}>
              {label}
            </div>
          </div>
        ))}
      </section>

      {EXAMPLES.map((example) => (
        <section key={example.project} style={{ marginBottom: 96 }}>
          <header style={{ borderTop: "1px solid var(--color-ink)", paddingTop: 24, marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 700 }}>
              {example.project}
            </h2>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--color-muted)" }}>
              Run {example.run_id} · {example.archetypes.length} visual concepts
              {example.project_url && (
                <>
                  {" · "}
                  <a href={example.project_url} style={{ color: "var(--color-muted)" }}>source</a>
                </>
              )}
            </div>
          </header>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 18 }}>
            {example.archetypes.map((concept) => {
              const archetype = ARCHETYPE_BY_SLUG[concept.archetype_slug];
              if (!archetype) return null;

              return (
                <ShowcaseLink
                  key={concept.archetype_slug}
                  archetype={archetype}
                  concept={concept}
                  project={example.project}
                  runId={example.run_id}
                />
              );
            })}
          </div>
        </section>
      ))}

      <section style={{ marginTop: 64, maxWidth: 740, borderTop: "1px solid var(--color-ink)", paddingTop: 24 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          What you are looking at
        </h2>
        <p style={{ fontSize: 17, margin: 0 }}>
          These are public-facing previews of the generated directions, not filesystem pointers.
          The live concept pages preserve the pitch, palette, and screen structure so you can judge
          whether a direction is worth promoting into the real app.
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
