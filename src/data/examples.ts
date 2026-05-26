import type { Example } from "@/lib/types";

/*
  Showcase examples: runs of /reskin against real projects.
  Each example references a local lab repo (not yet hosted).
  Brief excerpts are the "Aesthetic stance" line from each concept's brief.md.
*/
export const EXAMPLES: Example[] = [
  {
    project: "upneja-ai",
    project_url: "https://upneja.ai",
    run_id: "2026-05-24-2012",
    archetypes: [
      { archetype_slug: "architectural-blueprint", archetype_name: "Architectural Blueprint", brief_excerpt: "Construction document for a personal AI practice. Every page is a numbered sheet (A-001/12) with title block, dimension lines, isometric drawing, materials schedule.", lab_path: "~/Projects/upneja-ai-reskin-lab/src/app/runs/2026-05-24-2012/architectural-blueprint/" },
      { archetype_slug: "bloomberg-brutalist", archetype_name: "Bloomberg Brutalist", brief_excerpt: "Treat 27 side projects as a financial holdings book — every shipped repo is a position, every WIP is open volume, every category is a sector.", lab_path: "~/Projects/upneja-ai-reskin-lab/src/app/runs/2026-05-24-2012/bloomberg-brutalist/" },
      { archetype_slug: "cinema-letterbox", archetype_name: "Cinema Letterbox", brief_excerpt: "A portfolio presented like an A24 feature film. Title cards in 2.39:1 letterbox, Trajan caps for titles, monospace Courier for runtime captions.", lab_path: "~/Projects/upneja-ai-reskin-lab/src/app/runs/2026-05-24-2012/cinema-letterbox/" },
      { archetype_slug: "frutiger-aero-revival", archetype_name: "Frutiger Aero Revival", brief_excerpt: "Windows Vista welcome screen circa 2007 — wallpaper meets brand site. Earnest, tropical, glossy, full of light. Portfolio as a sunny pond with bubbles drifting up.", lab_path: "~/Projects/upneja-ai-reskin-lab/src/app/runs/2026-05-24-2012/frutiger-aero-revival/" },
      { archetype_slug: "liquid-glass", archetype_name: "Liquid Glass", brief_excerpt: "iOS 26 / Vision Pro spatial UI ported to a personal portfolio. Every surface is a refractive lens floating over a colored, alive background — the portfolio feels like a desk in zero-g.", lab_path: "~/Projects/upneja-ai-reskin-lab/src/app/runs/2026-05-24-2012/liquid-glass/" },
      { archetype_slug: "maximalist-collage", archetype_name: "Maximalist Collage", brief_excerpt: "A physical scrapbook of 27 projects assembled at a kitchen table at 2am. Polaroids, washi tape, marker scribbles, ransom-note type-pairings. Restraint is the enemy.", lab_path: "~/Projects/upneja-ai-reskin-lab/src/app/runs/2026-05-24-2012/maximalist-collage/" },
      { archetype_slug: "notebook-sketch", archetype_name: "Notebook Sketch", brief_excerpt: "A FigJam board printed out and pinned to a real wall. Sticky notes, taped corners, wobbly hand-drawn arrows, casual lowercase voice. The portfolio as a thinking-out-loud space.", lab_path: "~/Projects/upneja-ai-reskin-lab/src/app/runs/2026-05-24-2012/notebook-sketch/" },
      { archetype_slug: "sports-almanac", archetype_name: "Sports Almanac", brief_excerpt: "Baseball-Reference for one person's side-project career. Ayush is the player, each project is a roster entry, each category is a position, every status is a stat line.", lab_path: "~/Projects/upneja-ai-reskin-lab/src/app/runs/2026-05-24-2012/sports-almanac/" },
      { archetype_slug: "surveillance-dossier", archetype_name: "Surveillance Dossier", brief_excerpt: "Ayush's portfolio leaked from a manila folder. Every project is a case file, every category is a sector, every CTA is a typed-out instruction. Memos with redaction bars do the work.", lab_path: "~/Projects/upneja-ai-reskin-lab/src/app/runs/2026-05-24-2012/surveillance-dossier/" },
      { archetype_slug: "tactile-brutalism", archetype_name: "Tactile Brutalism", brief_excerpt: "A wood-and-iron workshop catalogue. Ayush isn't a 'tech bro' — he's a craftsman with 27 tools laid out on a workbench, each labeled, each functional.", lab_path: "~/Projects/upneja-ai-reskin-lab/src/app/runs/2026-05-24-2012/tactile-brutalism/" },
    ],
  },
  {
    project: "reels (Creator OS)",
    project_url: "https://github.com/upneja/reels",
    run_id: "2026-05-24-2012",
    archetypes: [
      { archetype_slug: "acid-graphics", archetype_name: "Acid Graphics", brief_excerpt: "Creator OS as the cover of a Pangram type-foundry zine in 1997 on acid: chrome-melt italics, op-art swirls, single yellow smiley, lime + magenta on near-black.", lab_path: "~/Projects/reels-reskin-lab/src/app/runs/2026-05-24-2012/acid-graphics/" },
      { archetype_slug: "bloomberg-brutalist", archetype_name: "Bloomberg Brutalist", brief_excerpt: "A financial terminal pretending to be a Sunday magazine — Creator OS as a content trading desk where every brief, claim, and metric is a market signal.", lab_path: "~/Projects/reels-reskin-lab/src/app/runs/2026-05-24-2012/bloomberg-brutalist/" },
      { archetype_slug: "crt-terminal", archetype_name: "CRT Terminal", brief_excerpt: "Creator OS as a 1986 phosphor-green dial-up BBS — creator-os@upneja:~$ — every command emits a build log, every brief is a man page.", lab_path: "~/Projects/reels-reskin-lab/src/app/runs/2026-05-24-2012/crt-terminal/" },
      { archetype_slug: "geocities-formal", archetype_name: "Geocities Formal", brief_excerpt: "Creator OS as a hand-coded 1998 personal homepage on Geocities — Times New Roman, default-blue underlined links, tiled background, MARQUEE tags, GIFs of construction signs.", lab_path: "~/Projects/reels-reskin-lab/src/app/runs/2026-05-24-2012/geocities-formal/" },
      { archetype_slug: "pixel-art-bitmap", archetype_name: "Pixel Art", brief_excerpt: "Creator OS as a PICO-8 cart — 16-color palette, 8x8 sprites, integer pixel grid. Each project tile is a sprite, each brief is a quest, each 'ship' is a level-up.", lab_path: "~/Projects/reels-reskin-lab/src/app/runs/2026-05-24-2012/pixel-art-bitmap/" },
      { archetype_slug: "risograph-zine", archetype_name: "Risograph Zine", brief_excerpt: "Creator OS as a hand-collated indie zine: cream paper, two-pass ink misregistration, halftone dots — like It's Nice That bound a folio of Ayush's filming briefs.", lab_path: "~/Projects/reels-reskin-lab/src/app/runs/2026-05-24-2012/risograph-zine/" },
      { archetype_slug: "sports-almanac", archetype_name: "Sports Almanac", brief_excerpt: "Creator OS as a Baseball-Reference page for Ayush's content career: stat tables, career splits, OPS+ for posts, team color header bars per franchise.", lab_path: "~/Projects/reels-reskin-lab/src/app/runs/2026-05-24-2012/sports-almanac/" },
      { archetype_slug: "surveillance-dossier", archetype_name: "Surveillance Dossier", brief_excerpt: "Creator OS as a Cold War FOIA file: manila folders, typewriter carbons, red CLASSIFIED stamps over the day's filming brief — every claim gets a redaction bar until verified.", lab_path: "~/Projects/reels-reskin-lab/src/app/runs/2026-05-24-2012/surveillance-dossier/" },
    ],
  },
  {
    project: "jiyajale",
    project_url: "https://github.com/upneja/jiyajale",
    run_id: "2026-05-22-2156",
    archetypes: [
      { archetype_slug: "acid-graphics", archetype_name: "Acid Graphics", brief_excerpt: "Y2K rave flyer crashed into a 2024 Pangram type-foundry site: Fraunces italic 900 melts into chrome-mercury gradients, every headline skews and warps.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/acid-graphics/" },
      { archetype_slug: "bauhaus-geometric", archetype_name: "Bauhaus Geometric", brief_excerpt: "Karaoke as a Kandinsky composition: three primitives (red circle = vocal, blue square = instrumental, yellow triangle = action) carry every meaning.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/bauhaus-geometric/" },
      { archetype_slug: "crt-terminal", archetype_name: "CRT Terminal", brief_excerpt: "Jiyajale reframed as a single-purpose VT220 utility from 1986: green-on-black, ASCII boxes drawn with + and |, every action a typed command. Admits it's a Unix process.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/crt-terminal/" },
      { archetype_slug: "geocities-formal", archetype_name: "Geocities Formal", brief_excerpt: "Jiyajale reframed as a 1999 GeoCities homepage built by an Indian aunty with affectionate cringe — Times New Roman, table layouts, marquee banners, animated stars, blink-text.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/geocities-formal/" },
      { archetype_slug: "pixel-art-bitmap", archetype_name: "Pixel Art", brief_excerpt: "A kids' karaoke arcade booth from 1993: Jiyajale rebuilt as an NES cartridge ripper, where mom's song becomes the boss fight and the vocals are the loot.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/pixel-art-bitmap/" },
      { archetype_slug: "risograph-zine", archetype_name: "Risograph Zine", brief_excerpt: "Jiyajale becomes a hand-printed audio zine — every page is a scanned spread from a fluorescent-pink-and-cyan riso pressing on cream stock.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/risograph-zine/" },
      { archetype_slug: "skeuomorphic-revival", archetype_name: "Skeuomorphic Revival", brief_excerpt: "A 2009 GarageBand / Logic Pro X tape deck imagined as a personal karaoke factory — brushed-steel chassis screwed to a leather-lined desk, brass nameplates engraved with verbs.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/skeuomorphic-revival/" },
      { archetype_slug: "sports-almanac", archetype_name: "Sports Almanac", brief_excerpt: "Karaoke as a stat-book: every song is a season entry filed against the Demucs League register, every screen is a page out of baseball-reference dot com.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/sports-almanac/" },
      { archetype_slug: "swiss-editorial-grid", archetype_name: "Swiss Editorial Grid", brief_excerpt: "A karaoke tool re-cast as a printed Swiss design quarterly: rigid 12-column grid, Work Sans 900 at billboard scale flush-left against oceans of white.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/swiss-editorial-grid/" },
      { archetype_slug: "tarot-mystical", archetype_name: "Tarot Mystical", brief_excerpt: "Vocal separation as a divination rite: a three-card spread of gold-leafed tarot upon a midnight-indigo cosmos, where Demucs is the oracle.", lab_path: "~/Projects/jiyajale-reskin-lab/src/runs/2026-05-22-2156/tarot-mystical/" },
    ],
  },
];
