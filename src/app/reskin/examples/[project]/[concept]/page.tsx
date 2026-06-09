import Link from "next/link";
import { notFound } from "next/navigation";
import { EXAMPLES } from "@/data/examples";
import archetypesData from "@/data/archetypes.json";
import { ReskinShowcase, slugifyProject } from "@/components/reskin-showcase";
import type { Archetype } from "@/lib/types";

const ARCHETYPES = archetypesData as Archetype[];
const ARCHETYPE_BY_SLUG = Object.fromEntries(ARCHETYPES.map((a) => [a.slug, a]));

export function generateStaticParams() {
  return EXAMPLES.flatMap((example) =>
    example.archetypes.map((concept) => ({
      project: slugifyProject(example.project),
      concept: concept.archetype_slug,
    })),
  );
}

export default async function ConceptShowcasePage({
  params,
}: {
  params: Promise<{ project: string; concept: string }>;
}) {
  const { project, concept } = await params;
  const example = EXAMPLES.find((item) => slugifyProject(item.project) === project);
  const selected = example?.archetypes.find((item) => item.archetype_slug === concept);
  const archetype = selected ? ARCHETYPE_BY_SLUG[selected.archetype_slug] : undefined;

  if (!example || !selected || !archetype) notFound();

  return (
    <main style={{ maxWidth: "var(--max-grid-width)", margin: "0 auto", padding: "48px 24px 80px" }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 16 }}>
        <Link href="/reskin/examples" style={{ color: "var(--color-muted)" }}>← examples</Link> · {example.project}
      </p>

      <header style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 24, alignItems: "end", marginBottom: 36 }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(42px, 6vw, 84px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 18, lineHeight: 1 }}>
            {selected.archetype_name}
          </h1>
          <p style={{ maxWidth: "var(--max-text-width)", fontSize: 19, margin: 0 }}>
            {selected.brief_excerpt}
          </p>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-muted)", textTransform: "uppercase", textAlign: "right" }}>
          <div>Run {example.run_id}</div>
          <div>{archetype.family}</div>
          <div>Cut score {archetype.video_cut_score}/10</div>
        </div>
      </header>

      <ReskinShowcase
        archetype={archetype}
        concept={selected}
        project={example.project}
        runId={example.run_id}
        variant="full"
      />

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, marginTop: 32, borderTop: "1px solid var(--color-ink)", borderLeft: "1px solid var(--color-ink)" }}>
        {[
          ["Hero", "The first-viewport identity and pitch surface."],
          ["Detail", "The browsing or analysis surface that proves the system can hold real content."],
          ["Action", "The conversion or single-task surface that tests whether the archetype survives utility."],
        ].map(([label, body]) => (
          <article
            key={label}
            style={{
              borderRight: "1px solid var(--color-ink)",
              borderBottom: "1px solid var(--color-ink)",
              padding: 20,
            }}
          >
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, marginBottom: 8 }}>
              {label}
            </h2>
            <p style={{ margin: 0, color: "var(--color-muted)", fontSize: 15 }}>
              {body}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
