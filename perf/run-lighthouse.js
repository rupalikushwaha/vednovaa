const { execSync } = require('child_process');
const fs = require('fs');

// Configurable via env or CLI
const url = process.env.URL || process.argv[2] || 'http://localhost:1234';
const outDir = process.env.OUTDIR || './reports';
const outPath = `${outDir}/lighthouse.json`;

try {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  console.log(`Running Lighthouse against: ${url}`);
  const cmd = `npx -y lighthouse ${url} --output=json --output-path=${outPath} --chrome-flags=\"--headless\" --only-categories=performance,accessibility,seo,best-practices`;
  console.log(cmd);
  execSync(cmd, { stdio: 'inherit' });

  console.log(`Lighthouse report saved to ${outPath}`);
  process.exit(0);
} catch (err) {
  console.error('Lighthouse run failed:', err.message || err);
  process.exit(2);
}
