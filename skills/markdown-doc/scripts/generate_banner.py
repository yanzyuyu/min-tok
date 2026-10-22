import argparse
import html
from pathlib import Path

THEME_PALETTES = {
    "cyber": {
        "bg_stops": ("#060913", "#0b1120", "#0f172a"),
        "glow_left": "#06b6d4",
        "glow_right": "#3b82f6",
        "accent": "#06b6d4",
        "border": "#1e293b",
        "text_tag": "#38bdf8",
    },
    "music": {
        "bg_stops": ("#070a12", "#0d111c", "#140a12"),
        "glow_left": "#ff0033",
        "glow_right": "#3b82f6",
        "accent": "#ff2a55",
        "border": "#21262d",
        "text_tag": "#7ee787",
    },
    "emerald": {
        "bg_stops": ("#040d08", "#081b11", "#0d281a"),
        "glow_left": "#10b981",
        "glow_right": "#06b6d4",
        "accent": "#10b981",
        "border": "#163a26",
        "text_tag": "#34d399",
    },
    "purple": {
        "bg_stops": ("#090514", "#120a24", "#1d113a"),
        "glow_left": "#a855f7",
        "glow_right": "#ec4899",
        "accent": "#c084fc",
        "border": "#2e1a4f",
        "text_tag": "#e879f9",
    },
    "minimal": {
        "bg_stops": ("#0d1117", "#161b22", "#21262d"),
        "glow_left": "#58a6ff",
        "glow_right": "#8b949e",
        "accent": "#58a6ff",
        "border": "#30363d",
        "text_tag": "#79c0ff",
    },
}

def generate_banner(
    title: str,
    tagline: str,
    tags: list[str],
    theme_name: str = "cyber",
    width: int = 900,
    height: int = 240,
) -> str:
    palette = THEME_PALETTES.get(theme_name, THEME_PALETTES["cyber"])
    esc_title = html.escape(title)
    esc_tagline = html.escape(tagline)

    tag_elements = []
    current_x = 0
    tag_colors = ["#f43f5e", "#fbbf24", "#10b981", "#38bdf8", "#a855f7", "#c9d1d9"]

    for idx, tag in enumerate(tags):
        esc_tag = html.escape(tag.strip().upper())
        char_len = len(esc_tag)
        tag_width = max(char_len * 7.5 + 24, 70)
        tag_color = tag_colors[idx % len(tag_colors)]
        tag_elements.append(
            f'<rect x="{current_x:.1f}" y="0" width="{tag_width:.1f}" height="24" rx="6" fill="#161b22" stroke="#30363d" stroke-width="1" />'
            f'<text x="{current_x + tag_width / 2:.1f}" y="16" fill="{tag_color}" font-family="-apple-system, BlinkMacSystemFont, \'Segoe UI\', Inter, monospace" font-size="11" font-weight="600" text-anchor="middle">{esc_tag}</text>'
        )
        current_x += tag_width + 8

    tags_markup = "\n      ".join(tag_elements)

    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">
  <defs>
    <linearGradient id="bg_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{palette["bg_stops"][0]}" />
      <stop offset="50%" stop-color="{palette["bg_stops"][1]}" />
      <stop offset="100%" stop-color="{palette["bg_stops"][2]}" />
    </linearGradient>

    <radialGradient id="mesh_left" cx="15%" cy="30%" r="50%">
      <stop offset="0%" stop-color="{palette["glow_left"]}" stop-opacity="0.25" />
      <stop offset="100%" stop-color="{palette["glow_left"]}" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="mesh_right" cx="85%" cy="75%" r="45%">
      <stop offset="0%" stop-color="{palette["glow_right"]}" stop-opacity="0.18" />
      <stop offset="100%" stop-color="{palette["glow_right"]}" stop-opacity="0" />
    </radialGradient>

    <linearGradient id="emblem_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{palette["accent"]}" />
      <stop offset="100%" stop-color="{palette["glow_right"]}" />
    </linearGradient>

    <filter id="subtle_shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.6" />
    </filter>

    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#ffffff" stroke-opacity="0.02" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="{width}" height="{height}" rx="16" fill="url(#bg_grad)" stroke="{palette["border"]}" stroke-width="1.2" />
  <rect width="{width}" height="{height}" rx="16" fill="url(#grid)" />

  <circle cx="120" cy="110" r="140" fill="url(#mesh_left)" />
  <circle cx="780" cy="180" r="160" fill="url(#mesh_right)" />

  <g transform="translate(68, 62)">
    <circle cx="58" cy="58" r="54" fill="none" stroke="{palette["accent"]}" stroke-opacity="0.2" stroke-width="1.5" stroke-dasharray="4 4" />
    <circle cx="58" cy="58" r="44" fill="#0f172a" stroke="#334155" stroke-width="1.5" filter="url(#subtle_shadow)" />
    <path d="M 58 26 L 82 38 C 82 64 68 80 58 86 C 48 80 34 64 34 38 Z" fill="url(#emblem_grad)" />
    <path d="M 50 56 L 56 62 L 68 48" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <g transform="translate(225, 88)">
    <text x="0" y="24" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif" font-size="38" font-weight="800" letter-spacing="-0.03em">
      {esc_title}
    </text>

    <text x="0" y="55" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif" font-size="14.5" font-weight="450" letter-spacing="-0.01em">
      {esc_tagline}
    </text>

    <g transform="translate(0, 78)">
      {tags_markup}
    </g>
  </g>
</svg>"""

def main() -> None:
    parser = argparse.ArgumentParser(description="Generate aesthetic vector SVG banner")
    parser.add_argument("--title", required=True, help="Main title of the project")
    parser.add_argument("--tagline", required=True, help="Single-sentence technical tagline")
    parser.add_argument("--tags", default="PRODUCTION,ZERO DEPS,CLEAN AUDIT", help="Comma-separated micro-tags")
    parser.add_argument("--theme", choices=list(THEME_PALETTES.keys()), default="cyber", help="Visual theme palette")
    parser.add_argument("--out", default="banner.svg", help="Output SVG filepath")
    parser.add_argument("--width", type=int, default=900, help="Banner width in pixels")
    parser.add_argument("--height", type=int, default=240, help="Banner height in pixels")

    args = parser.parse_args()
    tag_list = [t.strip() for t in args.tags.split(",") if t.strip()]

    svg_content = generate_banner(
        title=args.title,
        tagline=args.tagline,
        tags=tag_list,
        theme_name=args.theme,
        width=args.width,
        height=args.height,
    )

    out_file = Path(args.out)
    out_file.write_text(svg_content, encoding="utf-8")

if __name__ == "__main__":
    main()
