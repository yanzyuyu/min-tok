import argparse
import subprocess
import sys
from rich.console import Console


def run_and_capture(cmd: list[str], output_svg: str = None, title: str = "Terminal Output") -> str:
    console = Console(record=True, width=90)
    cmd_str = " ".join(cmd)
    console.print(f"[bold cyan]$ {cmd_str}[/bold cyan]\n")

    proc = subprocess.run(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
    )

    console.print(proc.stdout)

    if output_svg:
        console.save_svg(output_svg, title=title)
        print(f"[OK] Terminal SVG snapshot saved to: {output_svg}")

    return proc.stdout


def main():
    parser = argparse.ArgumentParser(description="Capture command execution to terminal SVG or markdown")
    parser.add_argument("--svg", help="Path to save SVG screenshot", default=None)
    parser.add_argument("--title", help="Terminal window title", default="Terminal")
    parser.add_argument("cmd", nargs=argparse.REMAINDER, help="Command to run")

    args = parser.parse_args()
    if not args.cmd:
        print("Usage: python capture_terminal.py [--svg output.svg] <command>")
        sys.exit(1)

    run_and_capture(args.cmd, output_svg=args.svg, title=args.title)


if __name__ == "__main__":
    main()
