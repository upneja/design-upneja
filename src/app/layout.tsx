import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "design.upneja.ai — design resources by Ayush",
  description:
    "Tools, skills, and notes for fighting AI-slop UI. By Ayush Upneja.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav
          style={{
            borderBottom: "1px solid var(--color-ink)",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 700,
              color: "var(--color-ink)",
              textDecoration: "none",
            }}
          >
            design.upneja.ai
          </Link>
          <div style={{ display: "flex", gap: 24 }}>
            <Link
              href="/reskin"
              style={{ color: "var(--color-ink)", textDecoration: "none" }}
            >
              /reskin
            </Link>
            <a
              href="https://upneja.ai"
              style={{ color: "var(--color-ink)", textDecoration: "none" }}
            >
              ↗ upneja.ai
            </a>
          </div>
        </nav>
        {children}
        <footer
          style={{
            borderTop: "1px solid var(--color-ink)",
            padding: "32px 24px",
            marginTop: 96,
            fontFamily: "var(--font-display)",
            fontSize: 13,
            color: "var(--color-muted)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span>© 2026 Ayush Upneja</span>
          <span>
            Built with care. Inter is banned in this house.
          </span>
        </footer>
      </body>
    </html>
  );
}
