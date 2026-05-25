import type { Example } from "@/lib/types";

/*
  Showcase examples: runs of /reskin against real projects.
  Each example references a local lab repo (not yet hosted).
  Future: render lab gallery screenshots or iframe live dev servers.
*/
export const EXAMPLES: Example[] = [
  {
    project: "jiyajale",
    project_url: "https://github.com/upneja/jiyajale",
    run_id: "2026-05-22-2156",
    archetypes: [
      { archetype_slug: "acid-graphics", archetype_name: "Acid Graphics", brief_excerpt: "Warped chrome type melting against neon op-art swirls.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/acid-graphics/" },
      { archetype_slug: "risograph-zine", archetype_name: "Risograph Zine", brief_excerpt: "Two-color overprint, visible misregistration, paper grain.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/risograph-zine/" },
      { archetype_slug: "bauhaus-geometric", archetype_name: "Bauhaus Geometric", brief_excerpt: "Primary colors only, geometric primitives at architectural scale.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/bauhaus-geometric/" },
      { archetype_slug: "geocities-formal", archetype_name: "Geocities Formal", brief_excerpt: "Times New Roman, default-blue underlined links, tiled background.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/geocities-formal/" },
      { archetype_slug: "skeuomorphic-revival", archetype_name: "Skeuomorphic Revival", brief_excerpt: "Hyper-real material textures, soft inner shadows, physical metaphors.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/skeuomorphic-revival/" },
      { archetype_slug: "crt-terminal", archetype_name: "CRT Terminal", brief_excerpt: "Green-on-black monospace with blinking cursor and scanline overlay.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/crt-terminal/" },
      { archetype_slug: "swiss-editorial-grid", archetype_name: "Swiss Editorial Grid", brief_excerpt: "Massive flush-left headlines, hairline rules, generous negative space.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/swiss-editorial-grid/" },
      { archetype_slug: "sports-almanac", archetype_name: "Sports Almanac", brief_excerpt: "Dense numerical tables, tabular figures, team color headers.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/sports-almanac/" },
      { archetype_slug: "tarot-mystical", archetype_name: "Tarot Mystical", brief_excerpt: "Indigo and oxblood with gilded gold linework and celestial motifs.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/tarot-mystical/" },
      { archetype_slug: "pixel-art-bitmap", archetype_name: "Pixel Art", brief_excerpt: "8-bit pixel art at integer scale, NES/Gameboy palette, frame animation.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/pixel-art-bitmap/" },
    ],
  },
  // reels and upneja-ai runs added when the parallel /reskin invocations complete
];
