export type Archetype = {
  slug: string;
  name: string;
  family: string;
  video_cut_score: number;
  font_display: string;
  font_text: string;
  font_import_url: string;
  palette: {
    primary: string;
    background: string;
    accent: string;
  };
  radii_scale: number[];
  shadow_recipe: string;
  motion_dna: string;
  two_sec_hook: string;
  reference_urls: string[];
  anti_rules: string[];
};

export type Example = {
  project: string;
  project_url?: string;
  run_id: string;
  archetypes: ExampleConcept[];
};

export type ExampleConcept = {
  archetype_slug: string;
  archetype_name: string;
  brief_excerpt: string;
  lab_path: string;
};
