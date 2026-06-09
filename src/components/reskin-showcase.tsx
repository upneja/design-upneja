import Link from "next/link";
import type { CSSProperties } from "react";
import type { Archetype, ExampleConcept } from "@/lib/types";

export function slugifyProject(project: string) {
  return project
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function conceptHref(project: string, concept: ExampleConcept) {
  return `/reskin/examples/${slugifyProject(project)}/${concept.archetype_slug}`;
}

type ShowcaseProps = {
  archetype: Archetype;
  concept: ExampleConcept;
  project: string;
  runId: string;
  variant?: "card" | "full";
};

export function ReskinShowcase({
  archetype,
  concept,
  project,
  runId,
  variant = "card",
}: ShowcaseProps) {
  const full = variant === "full";
  const colors = {
    bg: archetype.palette.background,
    fg: archetype.palette.primary,
    accent: archetype.palette.accent,
  };

  return (
    <div
      style={{
        background: colors.bg,
        color: colors.fg,
        border: `1px solid ${colors.fg}`,
        minHeight: full ? 620 : 360,
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          borderBottom: `1px solid ${colors.fg}`,
          display: "grid",
          gridTemplateColumns: full ? "1fr auto 1fr" : "1fr auto",
          gap: 12,
          padding: full ? 18 : 12,
          fontFamily: "var(--font-mono)",
          fontSize: full ? 12 : 10,
          textTransform: "uppercase",
        }}
      >
        <span>{project}</span>
        {full && <span>{runId}</span>}
        <span style={{ textAlign: "right" }}>{concept.archetype_name}</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: full ? "1.05fr 1fr" : "1fr",
          minHeight: 0,
        }}
      >
        <Scene
          archetype={archetype}
          concept={concept}
          project={project}
          full={full}
        />
        <div
          style={{
            borderLeft: full ? `1px solid ${colors.fg}` : "none",
            borderTop: full ? "none" : `1px solid ${colors.fg}`,
            padding: full ? 22 : 16,
            display: "grid",
            alignContent: "space-between",
            gap: 18,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: full ? 38 : 24,
                lineHeight: 1,
                margin: "0 0 14px",
                fontWeight: 700,
              }}
            >
              {concept.archetype_name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                textTransform: "uppercase",
                margin: "0 0 16px",
                color: colors.accent,
              }}
            >
              {archetype.family} / cut score {archetype.video_cut_score}/10
            </p>
            <p style={{ margin: 0, fontSize: full ? 18 : 14, lineHeight: 1.45 }}>
              {concept.brief_excerpt}
            </p>
          </div>

          <PreviewTriptych archetype={archetype} project={project} />
        </div>
      </div>

      <div
        style={{
          borderTop: `1px solid ${colors.fg}`,
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          padding: full ? 16 : 12,
          fontFamily: "var(--font-mono)",
          fontSize: full ? 12 : 10,
          textTransform: "uppercase",
        }}
      >
        <span>Hero / Detail / Action screens</span>
        <span style={{ color: colors.accent }}>Live preview</span>
      </div>
    </div>
  );
}

function Scene({
  archetype,
  concept,
  project,
  full,
}: {
  archetype: Archetype;
  concept: ExampleConcept;
  project: string;
  full: boolean;
}) {
  const slug = concept.archetype_slug;
  const colors = {
    bg: archetype.palette.background,
    fg: archetype.palette.primary,
    accent: archetype.palette.accent,
  };
  const kind = sceneKind(slug);

  const base: CSSProperties = {
    minHeight: full ? 500 : 210,
    padding: full ? 26 : 16,
    position: "relative",
    overflow: "hidden",
    background: sceneBackground(kind, colors),
  };

  if (kind === "terminal") {
    return (
      <div style={base}>
        <MonoLine colors={colors} text={`${project}@reskin:~$ open ${slug}`} />
        <MonoLine colors={colors} text="loading archetype tokens..." />
        <MonoLine colors={colors} text="rendering hero/detail/action..." />
        <div style={{ marginTop: full ? 52 : 26, fontFamily: "var(--font-mono)", fontSize: full ? 28 : 18 }}>
          {">"} {project.toLowerCase()} ships as a terminal ritual
        </div>
        <div style={{ marginTop: 18, border: `1px solid ${colors.accent}`, padding: 12 }}>
          STATUS: PASS / MOTION: SCANLINE / PALETTE: PHOSPHOR
        </div>
      </div>
    );
  }

  if (kind === "stats") {
    return (
      <div style={base}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: full ? 44 : 26, fontWeight: 700 }}>
          {project} season ledger
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr repeat(4, 1fr)", marginTop: 20, fontFamily: "var(--font-mono)", fontSize: full ? 14 : 10, borderTop: `1px solid ${colors.fg}` }}>
          {["SCREEN", "PWR", "CUT", "HOOK", "SHIP", "Hero", "97", "A+", "02s", "Live", "Detail", "88", "B+", "05s", "Ready", "Action", "94", "A", "01s", "Film"].map((cell, index) => (
            <span key={index} style={{ padding: "8px 6px", borderBottom: `1px solid ${colors.fg}` }}>
              {cell}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "blueprint") {
    return (
      <div style={base}>
        <svg viewBox="0 0 420 280" style={{ width: "100%", height: "100%" }}>
          <rect x="14" y="14" width="392" height="252" fill="none" stroke={colors.fg} />
          <path d="M210 36 350 112 210 190 70 112Z" fill="none" stroke={colors.accent} />
          <path d="M210 70 300 120 210 170 120 120Z" fill="none" stroke={colors.fg} />
          <path d="M70 112v88l140 70 140-70v-88" fill="none" stroke={colors.fg} />
          <line x1="36" y1="36" x2="36" y2="232" stroke={colors.accent} strokeDasharray="4 6" />
          <text x="54" y="134" fill={colors.fg} fontSize="14" fontFamily="monospace">
            {concept.archetype_name}
          </text>
          <text x="54" y="156" fill={colors.accent} fontSize="11" fontFamily="monospace">
            SHEET A-001 / {project.toUpperCase()}
          </text>
        </svg>
      </div>
    );
  }

  if (kind === "collage") {
    return (
      <div style={base}>
        {["hero", "detail", "action"].map((label, index) => (
          <div
            key={label}
            style={{
              position: "absolute",
              left: `${12 + index * 24}%`,
              top: `${14 + (index % 2) * 18}%`,
              width: full ? 190 : 110,
              minHeight: full ? 140 : 82,
              background: index === 1 ? colors.accent : "#fff",
              color: index === 1 ? colors.bg : colors.fg,
              border: `2px solid ${colors.fg}`,
              transform: `rotate(${[-7, 4, -3][index]}deg)`,
              padding: 12,
              fontFamily: index === 0 ? "var(--font-display)" : "var(--font-mono)",
              fontWeight: 700,
            }}
          >
            {label.toUpperCase()}
            <div style={{ marginTop: 20, fontSize: full ? 22 : 14 }}>
              {index === 0 ? project : concept.archetype_name}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={base}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: full ? 13 : 10, textTransform: "uppercase", color: colors.accent, margin: "0 0 12px" }}>
          {slug}
        </p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: full ? 54 : 30, lineHeight: 1, margin: 0, maxWidth: 520 }}>
          {project} through {concept.archetype_name}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: full ? 42 : 24 }}>
          {["hero", "detail", "action"].map((label, index) => (
            <div key={label} style={{ minHeight: full ? 110 : 64, border: `1px solid ${colors.fg}`, background: index === 1 ? colors.accent : "transparent", color: index === 1 ? colors.bg : colors.fg, padding: 10, fontFamily: "var(--font-mono)", fontSize: full ? 12 : 9 }}>
              {label.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewTriptych({ archetype, project }: { archetype: Archetype; project: string }) {
  const colors = {
    bg: archetype.palette.background,
    fg: archetype.palette.primary,
    accent: archetype.palette.accent,
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
      {["Hero", "Detail", "Action"].map((label, index) => (
        <div
          key={label}
          style={{
            border: `1px solid ${colors.fg}`,
            minHeight: 74,
            padding: 8,
            background: index === 1 ? colors.accent : "transparent",
            color: index === 1 ? colors.bg : colors.fg,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            display: "grid",
            alignContent: "space-between",
          }}
        >
          <span>{label.toUpperCase()}</span>
          <span>{project.slice(0, 14)}</span>
        </div>
      ))}
    </div>
  );
}

function MonoLine({ colors, text }: { colors: { fg: string; accent: string }; text: string }) {
  return (
    <div style={{ fontFamily: "var(--font-mono)", color: colors.accent, fontSize: 12, marginBottom: 8 }}>
      {text}
    </div>
  );
}

function sceneKind(slug: string) {
  if (slug.includes("terminal") || slug.includes("geocities")) return "terminal";
  if (slug.includes("sports") || slug.includes("bloomberg")) return "stats";
  if (slug.includes("blueprint")) return "blueprint";
  if (slug.includes("collage") || slug.includes("notebook") || slug.includes("riso")) return "collage";
  return "default";
}

function sceneBackground(kind: string, colors: { bg: string; fg: string; accent: string }) {
  if (kind === "blueprint") {
    return `
      linear-gradient(${alpha(colors.accent, 0.18)} 1px, transparent 1px),
      linear-gradient(90deg, ${alpha(colors.accent, 0.18)} 1px, transparent 1px),
      ${colors.bg}
    `;
  }

  if (kind === "terminal") {
    return `repeating-linear-gradient(0deg, ${colors.bg}, ${colors.bg} 11px, ${alpha(colors.accent, 0.14)} 12px), ${colors.bg}`;
  }

  if (kind === "collage") {
    return `radial-gradient(circle at 20% 25%, ${alpha(colors.accent, 0.28)} 0 6px, transparent 7px), ${colors.bg}`;
  }

  if (kind === "stats") {
    return `linear-gradient(90deg, ${alpha(colors.fg, 0.1)} 1px, transparent 1px), ${colors.bg}`;
  }

  return `linear-gradient(135deg, ${colors.bg}, ${alpha(colors.accent, 0.3)})`;
}

function alpha(hex: string, opacity: number) {
  if (!hex.startsWith("#") || hex.length !== 7) return hex;
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

export function ShowcaseLink({
  archetype,
  concept,
  project,
  runId,
}: ShowcaseProps) {
  return (
    <Link
      href={conceptHref(project, concept)}
      style={{ color: "inherit", textDecoration: "none", display: "block" }}
    >
      <ReskinShowcase
        archetype={archetype}
        concept={concept}
        project={project}
        runId={runId}
      />
    </Link>
  );
}
