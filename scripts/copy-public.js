const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "..", "public");
const outputDir = path.join(__dirname, "..", "dist");

fs.mkdirSync(outputDir, { recursive: true });
fs.cpSync(sourceDir, outputDir, { recursive: true });

console.log("Copied public files to dist.");
