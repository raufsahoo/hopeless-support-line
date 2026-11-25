// Have You Tried Turning It Off?: one line from a cheerfully hopeless tech support agent.
// Node 22, standard library only. Writes the line to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR stands in for /output when run locally).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "Great news! I've escalated your ticket to my supervisor. That's me, but standing up.";

// The gate takes 1 to 199 characters of UTF-8 text: fail loudly rather than enter an invalid line.
if ([...line].length > 199 || line.trim() === '') throw new Error(`line is ${[...line].length} characters`);

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), line);
