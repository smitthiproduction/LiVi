// Généré par packages/design-tokens/scripts/build.mjs — ne pas modifier à la main.
export const themes = ["dark","light","pastel"] as const;
export type Theme = (typeof themes)[number];
export const couleurs = {
  "dark": {
    "bg": "#000000",
    "bg-elevated": "#1c1c1f",
    "surface": "#1a1a1d",
    "surface-solid": "#1a1a1d",
    "surface-raised": "#46464c",
    "surface-sunken": "#2c2c30",
    "knob": "#ffffff",
    "glass": "rgba(255,255,255,0.09)",
    "glass-strong": "rgba(36,36,40,0.72)",
    "glass-edge": "rgba(255,255,255,0.24)",
    "hairline": "rgba(255,255,255,0.08)",
    "scrim": "rgba(0,0,0,0.55)",
    "liquid-1": "#1d5cff",
    "liquid-2": "#19c2ff",
    "liquid-3": "#a8f0ff",
    "ink": "#ffffff",
    "ink-secondary": "#9b9ba3",
    "ink-tertiary": "#83838c",
    "on-ink": "#000000",
    "accent": "#5cc8ff",
    "accent-text": "#5cc8ff",
    "accent-soft": "#0b2533",
    "on-accent": "#001b2b",
    "gain": "#3ddc97",
    "gain-soft": "#0e2a1f",
    "loss": "#ff6b6b",
    "loss-soft": "#2f1515",
    "gain-alt": "#6fa8ff",
    "loss-alt": "#ffa94d",
    "warning": "#ffb340",
    "danger": "#ff6b6b",
    "info": "#5cc8ff",
    "focus-ring": "#5cc8ff",
    "chart-1": "#f2f2f5",
    "chart-2": "#5cc8ff",
    "chart-3": "#ffcf70",
    "chart-4": "#8a8aff",
    "chart-5": "#5c5c66",
    "chart-grid": "rgba(255,255,255,0.06)",
    "tint-1": "#1a1a1d",
    "tint-2": "#1a1a1d",
    "tint-3": "#1a1a1d",
    "tint-4": "#1a1a1d",
    "tint-5": "#1a1a1d"
  },
  "light": {
    "bg": "#f2f2f6",
    "bg-elevated": "#ffffff",
    "surface": "#ffffff",
    "surface-solid": "#ffffff",
    "surface-raised": "#ffffff",
    "surface-sunken": "#e6e6eb",
    "knob": "#ffffff",
    "glass": "rgba(255,255,255,0.70)",
    "glass-strong": "rgba(255,255,255,0.82)",
    "glass-edge": "rgba(255,255,255,0.95)",
    "hairline": "rgba(0,0,0,0.07)",
    "scrim": "rgba(0,0,0,0.32)",
    "liquid-1": "#3d7bff",
    "liquid-2": "#4fd2ff",
    "liquid-3": "#d5f7ff",
    "ink": "#000000",
    "ink-secondary": "#5c5c64",
    "ink-tertiary": "#6d6d73",
    "on-ink": "#ffffff",
    "accent": "#00609f",
    "accent-text": "#00609f",
    "accent-soft": "#e6f3fc",
    "on-accent": "#ffffff",
    "gain": "#077346",
    "gain-soft": "#e6f6ee",
    "loss": "#bf2b2b",
    "loss-soft": "#fdecec",
    "gain-alt": "#1f5fd6",
    "loss-alt": "#a85200",
    "warning": "#985200",
    "danger": "#bf2b2b",
    "info": "#00609f",
    "focus-ring": "#00609f",
    "chart-1": "#111114",
    "chart-2": "#00609f",
    "chart-3": "#c98a00",
    "chart-4": "#5b5bd6",
    "chart-5": "#a3a3ab",
    "chart-grid": "rgba(0,0,0,0.06)",
    "tint-1": "#ffffff",
    "tint-2": "#ffffff",
    "tint-3": "#ffffff",
    "tint-4": "#ffffff",
    "tint-5": "#ffffff"
  },
  "pastel": {
    "bg": "#f3f1f8",
    "bg-elevated": "#ffffff",
    "surface": "#ffffff",
    "surface-solid": "#ffffff",
    "surface-raised": "#ffffff",
    "surface-sunken": "#e9e6f1",
    "knob": "#ffffff",
    "glass": "rgba(255,255,255,0.62)",
    "glass-strong": "rgba(255,255,255,0.80)",
    "glass-edge": "rgba(255,255,255,0.95)",
    "hairline": "rgba(21,20,43,0.07)",
    "scrim": "rgba(21,20,43,0.28)",
    "liquid-1": "#c9b8ff",
    "liquid-2": "#ffc6ad",
    "liquid-3": "#b3e3ff",
    "ink": "#15142b",
    "ink-secondary": "#55546c",
    "ink-tertiary": "#636275",
    "on-ink": "#ffffff",
    "accent": "#3b48c9",
    "accent-text": "#3b48c9",
    "accent-soft": "#e3e6fc",
    "on-accent": "#ffffff",
    "gain": "#0b7347",
    "gain-soft": "#ddf3e8",
    "loss": "#b8322a",
    "loss-soft": "#fbe4e1",
    "gain-alt": "#2453c7",
    "loss-alt": "#a14f00",
    "warning": "#8f5200",
    "danger": "#b8322a",
    "info": "#3b48c9",
    "focus-ring": "#3b48c9",
    "chart-1": "#15142b",
    "chart-2": "#3b48c9",
    "chart-3": "#d9822b",
    "chart-4": "#3a9e75",
    "chart-5": "#b8679a",
    "chart-grid": "rgba(21,20,43,0.06)",
    "tint-1": "#d9f2e6",
    "tint-2": "#e6e0fa",
    "tint-3": "#fde3d3",
    "tint-4": "#d7e9fb",
    "tint-5": "#faf0c8"
  }
} as const;
export const espacements = {
  "space-1": "4px",
  "space-2": "8px",
  "space-3": "12px",
  "space-4": "16px",
  "space-5": "20px",
  "space-6": "24px",
  "space-8": "32px",
  "space-10": "40px",
  "space-14": "56px"
} as const;
export const rayons = {
  "radius-xs": "10px",
  "radius-sm": "14px",
  "radius-md": "20px",
  "radius-lg": "28px",
  "radius-xl": "36px",
  "radius-pill": "999px"
} as const;
export const typographie = {
  "hero": {
    "fontSize": 52,
    "lineHeight": 56,
    "fontWeight": 800,
    "family": "sans"
  },
  "display-title": {
    "fontSize": 34,
    "lineHeight": 40,
    "fontWeight": 800,
    "family": "sans"
  },
  "title-1": {
    "fontSize": 28,
    "lineHeight": 34,
    "fontWeight": 800,
    "family": "sans"
  },
  "title-2": {
    "fontSize": 22,
    "lineHeight": 28,
    "fontWeight": 700,
    "family": "sans"
  },
  "title-3": {
    "fontSize": 17,
    "lineHeight": 22,
    "fontWeight": 700,
    "family": "sans"
  },
  "body": {
    "fontSize": 16,
    "lineHeight": 22,
    "fontWeight": 500,
    "family": "sans"
  },
  "body-strong": {
    "fontSize": 16,
    "lineHeight": 22,
    "fontWeight": 700,
    "family": "sans"
  },
  "callout": {
    "fontSize": 14,
    "lineHeight": 20,
    "fontWeight": 500,
    "family": "sans"
  },
  "caption": {
    "fontSize": 12.5,
    "lineHeight": 16,
    "fontWeight": 600,
    "family": "sans"
  },
  "overline": {
    "fontSize": 12,
    "lineHeight": 16,
    "fontWeight": 700,
    "family": "sans"
  },
  "figure-lg": {
    "fontSize": 32,
    "lineHeight": 38,
    "fontWeight": 800,
    "family": "sans"
  },
  "figure": {
    "fontSize": 16,
    "lineHeight": 20,
    "fontWeight": 700,
    "family": "sans"
  },
  "figure-sm": {
    "fontSize": 13,
    "lineHeight": 16,
    "fontWeight": 700,
    "family": "sans"
  },
  "code": {
    "fontSize": 13,
    "lineHeight": 18,
    "fontWeight": 450,
    "family": "mono"
  }
} as const;
export const polices = {"sans":"Manrope, -apple-system, BlinkMacSystemFont, \"SF Pro Display\", system-ui, sans-serif","mono":"\"Geist Mono\", \"SF Mono\", ui-monospace, Menlo, monospace"} as const;
