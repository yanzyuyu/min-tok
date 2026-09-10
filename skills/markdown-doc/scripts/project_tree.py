import argparse
import os
import sys

if sys.stdout.encoding and sys.stdout.encoding.lower() not in ("utf-8", "utf8"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

IGNORE_DIRS = {
    ".git",
    ".agents",
    ".agent",
    "__pycache__",
    ".pytest_cache",
    ".venv",
    "venv",
    "node_modules",
    ".idea",
    ".vscode",
}

IGNORE_EXTS = {
    ".pyc",
    ".pyo",
    ".pyd",
    ".db",
    ".sqlite",
    ".sqlite3",
}


def detect_workspace_root(start_path: str = ".") -> str:
    curr = os.path.abspath(start_path)
    while curr:
        if os.path.exists(os.path.join(curr, ".git")) or os.path.exists(os.path.join(curr, "AGENTS.md")):
            return curr
        parent = os.path.dirname(curr)
        if parent == curr:
            break
        curr = parent
    return os.path.abspath(start_path)


def generate_tree(root_dir: str, max_depth: int = 4, ascii_only: bool = False) -> str:
    resolved_root = os.path.abspath(root_dir)
    lines = [f"{os.path.basename(resolved_root)}/"]

    c_branch = "|-- " if ascii_only else "├── "
    c_last = "\\-- " if ascii_only else "└── "
    c_pipe = "|   "

    def _walk(directory: str, prefix: str = "", depth: int = 1):
        if depth > max_depth:
            return

        try:
            entries = sorted(os.listdir(directory))
        except OSError:
            return

        filtered = []
        for e in entries:
            full = os.path.join(directory, e)
            if os.path.isdir(full) and e in IGNORE_DIRS:
                continue
            if os.path.isfile(full) and any(e.endswith(ext) for ext in IGNORE_EXTS):
                continue
            filtered.append(e)

        for idx, entry in enumerate(filtered):
            is_last = idx == len(filtered) - 1
            connector = c_last if is_last else c_branch
            child_prefix = "    " if is_last else c_pipe
            full_path = os.path.join(directory, entry)

            if os.path.isdir(full_path):
                lines.append(f"{prefix}{connector}{entry}/")
                _walk(full_path, prefix + child_prefix, depth + 1)
            else:
                lines.append(f"{prefix}{connector}{entry}")

    _walk(resolved_root)
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description="Generate clean project tree for markdown")
    parser.add_argument("path", nargs="?", default=None, help="Root directory (auto-detects workspace if omitted)")
    parser.add_argument("--depth", type=int, default=4, help="Maximum tree depth")
    parser.add_argument("--ascii", action="store_true", help="Force ASCII characters only")

    args = parser.parse_args()

    target_path = os.path.abspath(args.path) if args.path else detect_workspace_root(".")

    ascii_mode = args.ascii or (sys.stdout.encoding and "cp1252" in sys.stdout.encoding.lower())

    tree = generate_tree(target_path, max_depth=args.depth, ascii_only=ascii_mode)
    print(tree)


if __name__ == "__main__":
    main()
