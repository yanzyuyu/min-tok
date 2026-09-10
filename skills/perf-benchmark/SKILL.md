---
name: perf-benchmark
description: >-
  Build zero-dependency, high-throughput benchmark and simulation scripts without AI slop.
  Use this skill whenever designing performance tests, stress-testing data pipelines, measuring rows/sec or request throughput, simulating edge-case data drift, or generating benchmark proof cards for documentation.
---

# Zero-Dependency Benchmark & Stress Testing (perf-benchmark)

This skill guides the agent to design fast, self-contained benchmark scripts that prove performance with real numbers—without pulling in heavy benchmark frameworks or producing fabricated metrics.

---

## 1. The Core Simulation Architecture

Every benchmark script should follow a standalone 4-phase lifecycle (exemplified by `demo.py`):

1. **Setup Phase:** Generate synthetic data in memory or fast temporary storage (e.g. SQLite / in-memory structures) in clean batches of 10,000 to avoid memory spikes.
2. **Drift/Fault Injection:** Inject realistic real-world discrepancies:
   * 1 dropped record (simulating network timeout during ETL sync)
   * 1 phantom/duplicate record (simulating at-least-once delivery duplicates)
   * 1 mutated field (simulating floating-point or rounding precision mismatch)
3. **Execution & Measurement:** Measure the core operation using `time.perf_counter()`:
   ```python
   t0 = time.perf_counter()
   result = engine.run(...)
   elapsed = time.perf_counter() - t0
   throughput = int(total_items / elapsed) if elapsed > 0 else 0
   ```
4. **Cleanup:** Always clean up temporary files in a `finally:` block.

---

## 2. Standard Benchmark Metrics to Report

Always report concrete, human-readable numbers:
* **Total Volume:** e.g. `50,000 items`
* **Execution Time:** e.g. `0.23 seconds`
* **Throughput:** e.g. `~215,000 rows/sec`
* **Discrepancy Precision:** 100% detection rate with zero false positives.

---

## 3. Markdown Benchmark Summary Card

Output results in a compact format ready for instant copy-pasting into `README.md`:

```markdown
### Benchmark Performa

| Metrik | Hasil Pengujian |
|---|---|
| **Volume Data** | 50.000 transaksi |
| **Waktu Eksekusi** | 0.23 detik |
| **Throughput** | ~215.000 baris/detik |
| **Akurasi Deteksi** | 3/3 selisih terdeteksi (100%) |
```
