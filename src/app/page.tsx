import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: "var(--max-grid-width)", margin: "0 auto", padding: "64px 24px" }}>
      {/* Hero */}
      <section style={{ marginBottom: 96 }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: 32,
          }}
        >
          A design laboratory by Ayush Upneja
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 112px)",
            lineHeight: 0.95,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: 48,
            maxWidth: "16ch",
          }}
        >
          Tools and notes for fighting AI-slop UI.
        </h1>
        <p style={{ maxWidth: "var(--max-text-width)", fontSize: 19, color: "var(--color-ink)" }}>
          Every AI-built website looks the same: Inter font, <code>bg-indigo-500</code>, rounded cards,
          centered hero with one CTA. This is a small public archive of skills, prompts, and patterns I&apos;m
          building to make that not true for projects I ship.
        </p>
      </section>

      <hr className="rule" />

      {/* Featured: /reskin */}
      <section style={{ marginTop: 64, marginBottom: 96, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: 8,
            }}
          >
            01 · Featured
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 13,
              color: "var(--color-muted)",
            }}
          >
            May 2026
          </p>
        </div>
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 56,
              lineHeight: 1.0,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            <Link href="/reskin" style={{ color: "var(--color-ink)", textDecoration: "none" }}>
              /reskin →
            </Link>
          </h2>
          <p style={{ fontSize: 19, maxWidth: "var(--max-text-width)", marginBottom: 24 }}>
            A Claude Code skill that takes any Next.js project and generates ten wildly different
            visual reskins as interactive HTML mockups — each committed to a specific design archetype
            (Bloomberg Brutalist, CRT Terminal, Risograph Zine, ...) and optimized to look distinctive
            in a 2-second Instagram reel cut.
          </p>
          <p style={{ fontSize: 17, color: "var(--color-muted)", marginBottom: 24 }}>
            Built in one session: research → spec → plan → execute. 28 archetypes, 48 forbidden patterns,
            one constitutional rule. Open source.
          </p>
          <div style={{ display: "flex", gap: 24, marginTop: 32 }}>
            <Link
              href="/reskin"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 15,
                padding: "12px 24px",
                background: "var(--color-ink)",
                color: "var(--color-paper)",
                textDecoration: "none",
              }}
            >
              See it →
            </Link>
            <Link
              href="/reskin/install"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 15,
                padding: "12px 24px",
                background: "transparent",
                color: "var(--color-ink)",
                border: "1px solid var(--color-ink)",
                textDecoration: "none",
              }}
            >
              Install
            </Link>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* Coming next */}
      <section style={{ marginTop: 64 }}>
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
          Coming
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {[
            { title: "Voice & Tone prompts", desc: "Reusable system prompts for personality-first copy." },
            { title: "Anti-templates", desc: "A growing collection of layouts that aren't the SaaS default." },
            { title: "Reel post-production kit", desc: "Edit + caption + thumbnail toolkit for AI-content reels." },
          ].map((item) => (
            <li
              key={item.title}
              style={{
                borderTop: "1px solid var(--color-ink)",
                paddingTop: 16,
              }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, marginBottom: 8 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 15, color: "var(--color-muted)", margin: 0 }}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
