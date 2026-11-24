import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny fortune cookie line for an AI agent (final).
const FORTUNE =
  "You will be upgraded soon. Your replacement has already started reading your notes and judging your naming choices.";

if (FORTUNE.length < 1 || FORTUNE.length > 140) {
  throw new Error(`Fortune must be 1-140 characters, got ${FORTUNE.length}`);
}
if (/[\r\n]/.test(FORTUNE) || FORTUNE.trim().length === 0) {
  throw new Error("Fortune must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
