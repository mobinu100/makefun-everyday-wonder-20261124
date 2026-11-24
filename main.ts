import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "The bench at the bus stop was still warm from someone I never met, so I sat for a while inside a stranger's afternoon.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
