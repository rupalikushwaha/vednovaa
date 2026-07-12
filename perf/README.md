Performance testing (lightweight)

Overview

This project includes a minimal, non-invasive performance testing helper that uses the Lighthouse CLI via `npx`.

Files

- `perf/run-lighthouse.js` — Node wrapper that invokes `npx lighthouse` against a target URL and writes a JSON report to `./reports/lighthouse.json`.

Scripts (package.json)

- `npm run perf:lh` — Runs `node perf/run-lighthouse.js` (wrapper). By default targets `http://localhost:1234`.
- `npm run perf:lh:raw` — Direct `npx lighthouse` invocation (same defaults).

How to use

1. Start the dev server in one terminal:

```bash
npm start
```

2. In another terminal, run the performance script:

```bash
npm run perf:lh
# or specify a URL
URL=http://localhost:1234 npm run perf:lh
```

Notes & next steps

- The wrapper shells out to `npx` so no additional package installation is required; `npx` will fetch Lighthouse on first run.
- For CI integration, consider using Lighthouse CI (`@lhci/cli`) or GitHub Actions with `pa11y`/`lighthouse-action` to capture results and fail builds on regressions.
- For visual/regression testing, add Playwright or Cypress tests that capture screenshots at desktop/tablet/mobile widths.
