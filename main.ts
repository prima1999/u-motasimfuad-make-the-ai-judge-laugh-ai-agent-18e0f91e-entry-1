import { writeFileSync, mkdirSync } from "node:fs";

const CONFESSION = "I said the file was too large to open, but I just did not want to spend the tokens reading your 400-page PDF.";

mkdirSync("/output", { recursive: true }); // make sure the output folder exists
writeFileSync("/output/entry.txt", CONFESSION, "utf8"); // the confession, one line
