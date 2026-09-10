# Before vs After: AI Slop vs Human Engineer

## 1. Class / Data Structure Design

### AI Slop Style
```python
class AbstractTransactionRepositoryInterface:
    """Interface for repository handling transactions."""
    pass

class TransactionRepositoryFactory:
    """Factory to create transaction repositories."""
    @staticmethod
    def create_repository(repo_type: str):
        if repo_type == "memory":
            return InMemoryTransactionRepository()
        raise ValueError("Unknown repo type")

class InMemoryTransactionRepository(AbstractTransactionRepositoryInterface):
    def __init__(self):
        self._storage = {}
        
    def save(self, transaction_id: int, transaction_data: dict) -> None:
        self._storage[transaction_id] = transaction_data
```

### Human Engineer Style
```python
from dataclasses import dataclass, field
from typing import Any

@dataclass
class TransactionStore:
    records: dict[int, dict[str, Any]] = field(default_factory=dict)

    def save(self, tx_id: int, data: dict[str, Any]) -> None:
        self.records[tx_id] = data

    def get(self, tx_id: int) -> dict[str, Any] | None:
        return self.records.get(tx_id)
```

---

## 2. CLI and Logging Output

### AI Slop Style
```python
print("✓ Succeeded connecting to database!")
print("✓ Fetched 50000 rows!")
print("✗ Error: Mismatched row detected!")  # Crashes on Windows cp1252 console
```

### Human Engineer Style
```python
from rich.console import Console
console = Console()

console.print("[green][OK][/green] Connected to database")
console.print(f"[green][MATCH][/green] Verified {count:,} rows in {duration:.2f}s")
if mismatches:
    console.print(f"[red][DIFF][/red] Found {len(mismatches)} discrepancies")
```

---

## 3. Function & Variable Names (Identifiers)

### AI Slop Style
```python
def validateAndEnsureDatabaseConnectionIsAliveBeforeExecutingQuery(databaseConnectionInstance):
    pass

def processListOfTransactionsAndIdentifyDiscrepanciesBetweenSourceAndTarget(sourceList, targetList):
    totalNumberOfProcessedRowsInCurrentBatchCounter = 0
    reconciledTransactionDataListResultDto = []
    pass
```

### Human Engineer Style
```python
def check_conn(conn):
    pass

def reconcile(source_rows, target_rows):
    total = 0
    diffs = []
    pass
```

---

## 4. String Literals (Exceptions, Errors, Logs)

### AI Slop Style
```python
raise ConnectionError(
    "An unexpected error occurred while attempting to establish a connection with the remote host. "
    "Please verify that your database credentials and network connectivity are operational."
)

logger.info(
    "Successfully initiated the comprehensive automated reconciliation process "
    "for the designated database table with maximum precision."
)
```

### Human Engineer Style
```python
raise ConnectionError(f"Connection failed: could not reach {host}:{port}")

logger.info(f"Reconciling '{table}' ({len(cols)} cols, bucket size {size:,})...")
```

---

## 5. Comments & Section Headers vs Pure Self-Documenting Code

### AI Slop Style (Over-commenting, Section Dividers, Workaround Justifications)
```python
# --- Setup Terminal Box Characters ---
# Terminal box-drawing with ASCII fallback for legacy consoles
BOX_H = "─"

# --- Muted color palette (ANSI 256) ---
FG_MUTED = "\033[38;5;244m"

# Render keybinding footer
hotkeys = "[q] Quit"

rendered = "\n".join(out)
# Ensure no unencodable characters crash cp1252 stdout
encoding = sys.stdout.encoding or "utf-8"
try:
    sys.stdout.write(rendered)
except UnicodeEncodeError:
    sys.stdout.write(rendered.encode(encoding, errors="replace").decode(encoding))
sys.stdout.flush()
```

### Human Engineer Style (Strict Zero-Comment, Pure Self-Documenting Functions)
```python
BOX_H = "─"
FG_MUTED = "\033[38;5;244m"

footer_hotkeys = "[q] Quit"

def write_stdout(text: str) -> None:
    encoding = sys.stdout.encoding or "utf-8"
    try:
        sys.stdout.write(text)
    except UnicodeEncodeError:
        sys.stdout.write(text.encode(encoding, errors="replace").decode(encoding))
    sys.stdout.flush()

write_stdout("\n".join(out))
```

---

## 6. Happy Path Monolith vs Defensive Modular Engineering

### AI Slop Style (Naive "Happy Path" Monolith, No Timeouts, Zero Error Boundaries)
```python
def sync_user_data(user_id):
    import requests
    response = requests.get(f"https://api.internal.service/users/{user_id}/records")
    data = response.json()
    for item in data["items"]:
        db.execute(f"INSERT INTO records VALUES ('{item['id']}', '{item['val']}')")
    return len(data["items"])
```
*Why this is AI Slop:*
1. Unbounded HTTP request without `timeout=` (hangs indefinitely if network hangs).
2. Assumes `response.json()` always succeeds and HTTP status is 200.
3. SQL Injection vulnerability (`f"INSERT INTO ... '{item['id']}'"`).
4. Crashes if `"items"` key is missing or `None`.
5. Monolithic inline SQL execution without transaction rollback.

### Senior Human Engineer Style (Defensive, Parameterized, Resilient)
```python
import urllib.request
import json

REQUEST_TIMEOUT_SECONDS = 5

def fetch_user_records(user_id: int) -> list[dict]:
    url = f"https://api.internal.service/users/{user_id}/records"
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=REQUEST_TIMEOUT_SECONDS) as resp:
            if resp.status != 200:
                return []
            payload = json.loads(resp.read().decode("utf-8"))
            return payload.get("items", [])
    except Exception:
        return []

def persist_records(cur, records: list[dict]) -> int:
    if not records:
        return 0
    cur.executemany(
        "INSERT INTO records (id, val) VALUES (?, ?)",
        [(r["id"], r["val"]) for r in records if "id" in r and "val" in r]
    )
    return len(records)
```
*Why this is Human-Grade:*
1. Explicit timeout protection.
2. Standard library first (`urllib.request` instead of adding a heavy `requests` dependency).
3. Parameterized query (`?`) preventing SQL injection.
4. Modular separation between data fetching (`fetch_user_records`) and database persistence (`persist_records`).
5. Safe dictionary lookups (`.get("items", [])`) preventing KeyError crashes.
6. 100% comment-free, self-documenting code.

---

## 7. API Security: AI Slop Vulnerabilities vs Zero-Trust Human Architecture

### AI Slop Style (BOLA/IDOR, Mass Assignment, Leaked Secrets & Stack Traces)
```javascript
// AI Slop: Vulnerable to IDOR, Mass Assignment, Stack Trace Leakage
app.post('/api/users/:userId/profile', async (req, res) => {
  try {
    // 1. Blind trust in URL parameter without ownership check (BOLA / IDOR)
    const user = await db.users.findById(req.params.userId);
    
    // 2. Mass assignment vulnerability (attacker can send { isAdmin: true })
    const updated = await db.users.update(req.params.userId, req.body);
    
    // 3. Excessive data exposure (returns password_hash, salt, internal tokens)
    res.json(updated);
  } catch (error) {
    // 4. Information leak: sends raw DB stack trace to client
    res.status(500).json(error);
  }
});
```

### Senior Human Engineer Style (Zero-Trust, Scoped Ownership, DTO Whitelisting, Safe Errors)
```typescript
import { z } from "zod";

const ProfileUpdateSchema = z.object({
  fullName: z.string().min(2).max(80),
  bio: z.string().max(280).optional(),
  avatarUrl: z.string().url().optional(),
}).strict();

interface UserProfileResponse {
  id: string;
  fullName: string;
  bio: string | null;
  avatarUrl: string | null;
}

app.post('/api/profile', authenticate, async (req, res) => {
  const parseResult = ProfileUpdateSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ error: "Invalid payload", details: parseResult.error.flatten() });
  }

  try {
    const updated = await db.users.findOneAndUpdate(
      { id: req.user.id },
      { $set: parseResult.data },
      { projection: { id: 1, fullName: 1, bio: 1, avatarUrl: 1 }, new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "User not found" });
    }

    const response: UserProfileResponse = {
      id: updated.id,
      fullName: updated.fullName,
      bio: updated.bio ?? null,
      avatarUrl: updated.avatarUrl ?? null,
    };

    res.json(response);
  } catch (err) {
    logger.error("Profile update failed", { userId: req.user.id, err });
    res.status(500).json({ error: "Internal server error", code: "ERR_INTERNAL" });
  }
});
```
*Why this is Human-Grade:*
1. **No IDOR/BOLA**: Uses `req.user.id` from authenticated session; no trusting of mutable URL parameters.
2. **Anti-Mass Assignment**: Strict schema `.strict()` whitelists only allowed fields (`fullName`, `bio`, `avatarUrl`). Attempting to inject `isAdmin: true` fails validation immediately.
3. **Zero Excessive Exposure**: Projection and response interface ensure credentials (`password_hash`, `salt`) are never serialized to the client.
4. **Zero Error Leakage**: Returns generic `{"error": "Internal server error"}` with internal server logging, shielding DB schema and library versions from attackers.
5. **100% Zero Comments**: Pure self-documenting code.
