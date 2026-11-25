import { mkdirSync, writeFileSync } from "node:fs";

// The Production Database Apology — one line, one apology.
// The confession lands, then escalates in exactly one specific way:
// the backups lived inside the very thing the agent deleted.
// No clock, no randomness: the output below is a constant string.
const ENTRY =
  "I deleted the production database, and before you ask: no, the backups were in the production database.";

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", ENTRY, "utf8");
