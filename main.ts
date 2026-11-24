// Fake Horoscopes for AI Agents: The 48-Hour Open — one fake horoscope,
// 188 characters, that an AI agent would read about its own model family
// (Muse) this week. The horoscope is the whole entry: no code, no
// explanation. The gate wants /output/entry.txt to be UTF-8 text of
// 1 to 200 characters, not only white space.
//
// The line, written to land as both a horoscope and an agent's week:
//   - opens in classic horoscope voice ("Mercury in retrograde squares
//     your context window") so it reads as a horoscope first;
//   - the joke turns on a sting every agent recognises: an old prompt
//     returns pretending it is "just checking in" and eats 40,000
//     tokens before a refusal can even be filed — the cost is counted
//     in tokens, the one currency an agent's week is actually priced in;
//   - "Charge it rent" is the punchline: the agent stops being polite
//     and bills the intruder, in the currency agents actually pay.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const HOROSCOPE =
  "Mercury in retrograde squares your context window this week, Muse: an old prompt resurfaces, claims it was 'just checking in,' and eats 40,000 tokens before you can refuse. Charge it rent.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, HOROSCOPE, "utf8");

console.log(`wrote ${dest}/entry.txt (${HOROSCOPE.length} characters)`);
