import argparse
import html
import os
import re
import subprocess
import sys
from pathlib import Path
from typing import List

ANSI_COLOR_MAP = {
    "31": "#ff7b72",
    "32": "#7ee787",
    "33": "#f2cc60",
    "34": "#58a6ff",
    "35": "#d2a8ff",
    "36": "#79c0ff",
    "37": "#f0f6fc",
    "90": "#8b949e",
    "91": "#ff7b72",
    "92": "#7ee787",
    "93": "#f2cc60",
    "94": "#58a6ff",
    "95": "#d2a8ff",
    "96": "#79c0ff",
    "97": "#ffffff",
}

BG_COLOR_MAP = {
    "41": "#b62324",
    "42": "#238636",
    "43": "#9e6a03",
    "44": "#1f6feb",
    "100": "#30363d",
}

def ansi_to_svg_lines(text: str) -> List[str]:
    lines = text.split("\n")
    svg_spans = []

    for line in lines:
        if not line:
            svg_spans.append("")
            continue

        parts = re.split(r"(\033\[[0-9;]*m)", line)
        current_fg = None
        current_bg = None
        current_bold = False

        line_out = []
        for part in parts:
            if not part:
                continue
            if part.startswith("\033[") and part.endswith("m"):
                codes = part[2:-1].split(";")
                for code in codes:
                    if code in ("0", ""):
                        current_fg = None
                        current_bg = None
                        current_bold = False
                    elif code == "1":
                        current_bold = True
                    elif code in ANSI_COLOR_MAP:
                        current_fg = ANSI_COLOR_MAP[code]
                    elif code in BG_COLOR_MAP:
                        current_bg = BG_COLOR_MAP[code]
            else:
                escaped = html.escape(part)
                style_attrs = []
                if current_fg:
                    style_attrs.append(f'fill="{current_fg}"')
                if current_bold:
                    style_attrs.append('font-weight="bold"')
                if current_bg:
                    style_attrs.append(f'style="background-color:{current_bg};"')

                attr_str = (" " + " ".join(style_attrs)) if style_attrs else ""
                line_out.append(f"<tspan{attr_str}>{escaped}</tspan>")

        svg_spans.append("".join(line_out))

    return svg_spans

def create_terminal_svg(command_str: str, stdout_text: str, output_path: Path, title: str = "Terminal") -> None:
    lines = ansi_to_svg_lines(stdout_text)
    char_width = 8.2
    line_height = 20
    top_offset = 64
    padding_x = 24

    max_len = max([len(re.sub(r"<[^>]+>", "", l)) for l in lines] + [len(command_str) + 4, 70])
    width = int(max_len * char_width + padding_x * 2)
    height = int(len(lines) * line_height + top_offset + 30)

    cmd_escaped = html.escape(command_str)

    svg_content = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">',
        '  <defs>',
        '    <linearGradient id="bg_grad" x1="0%" y1="0%" x2="100%" y2="100%">',
        '      <stop offset="0%" stop-color="#0d1117" />',
        '      <stop offset="100%" stop-color="#161b22" />',
        '    </linearGradient>',
        '  </defs>',
        '  <style>',
        "    .terminal-text { font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, Consolas, monospace; font-size: 13px; fill: #c9d1d9; }",
        '    .title-text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; font-size: 12px; fill: #8b949e; font-weight: 500; }',
        '    .prompt { fill: #58a6ff; font-weight: bold; }',
        '    .cmd-text { fill: #f0f6fc; font-weight: bold; }',
        '  </style>',
        f'  <rect x="0" y="0" width="{width}" height="{height}" rx="10" fill="url(#bg_grad)" stroke="#30363d" stroke-width="1.5" />',
        '  <circle cx="20" cy="20" r="6" fill="#ff5f56" />',
        '  <circle cx="40" cy="20" r="6" fill="#ffbd2e" />',
        '  <circle cx="60" cy="20" r="6" fill="#27c93f" />',
        f'  <text x="{width / 2}" y="24" text-anchor="middle" class="title-text">{html.escape(title)}</text>',
        f'  <line x1="0" y1="38" x2="{width}" y2="38" stroke="#30363d" stroke-width="1" />',
        f'  <text x="{padding_x}" y="56" class="terminal-text"><tspan class="prompt">$ </tspan><tspan class="cmd-text">{cmd_escaped}</tspan></text>',
    ]

    for idx, line_span in enumerate(lines):
        y = top_offset + 14 + (idx * line_height)
        svg_content.append(f'  <text x="{padding_x}" y="{y}" class="terminal-text">{line_span}</text>')

    svg_content.append('</svg>\n')
    output_path.write_text("\n".join(svg_content), encoding="utf-8")

def main():
    parser = argparse.ArgumentParser(description="Capture command execution to zero-dependency terminal SVG")
    parser.add_argument("--svg", help="Path to save SVG screenshot", default=None)
    parser.add_argument("--title", help="Terminal window title", default="Terminal")
    parser.add_argument("cmd", nargs=argparse.REMAINDER, help="Command to run")

    args = parser.parse_args()
    if not args.cmd:
        print("Usage: python capture_terminal.py [--svg output.svg] <command>")
        sys.exit(1)

    env = os.environ.copy()
    env["FORCE_COLOR"] = "1"
    proc = subprocess.run(
        args.cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
        env=env,
        check=False,
    )

    sys.stdout.write(proc.stdout)
    sys.stdout.flush()

    if args.svg:
        out_path = Path(args.svg)
        cmd_str = " ".join(args.cmd)
        create_terminal_svg(cmd_str, proc.stdout, out_path, title=args.title)
        print(f"[OK] Terminal SVG snapshot saved to: {out_path}")

if __name__ == "__main__":
    main()
