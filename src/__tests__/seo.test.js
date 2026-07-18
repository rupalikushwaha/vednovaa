const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "../..");
const productionOrigin = "https://www.vednovaa.com";
const publicRoutes = [
  "/",
  "/services",
  "/products",
  "/casestudies",
  "/contactus",
  "/cb-bhandari",
  "/oxford-college",
  "/upcoming",
  "/privacy-policy",
  "/terms-and-conditions",
];

describe("production SEO assets", () => {
  it("robots allows public routes and references the preferred sitemap", () => {
    const robots = fs.readFileSync(path.join(projectRoot, "public/robots.txt"), "utf8");
    expect(robots).toContain("Allow: /");
    expect(robots).toContain(`Sitemap: ${productionOrigin}/sitemap.xml`);
    expect(robots.toLowerCase()).not.toContain("disallow: /");
  });

  it("normalizes production routes without trailing slashes", () => {
    const vercelConfig = JSON.parse(fs.readFileSync(path.join(projectRoot, "vercel.json"), "utf8"));
    expect(vercelConfig.trailingSlash).toBe(false);
    expect(vercelConfig.rewrites.map(({ source }) => source).sort()).toEqual(publicRoutes.slice(1).sort());
    expect(vercelConfig.rewrites.every(({ destination }) => destination === "/index.html")).toBe(true);
    expect(vercelConfig.rewrites.some(({ source }) => source.includes(".*"))).toBe(false);
  });

  it("sitemap contains each canonical production route exactly once", () => {
    const sitemap = fs.readFileSync(path.join(projectRoot, "public/sitemap.xml"), "utf8");
    const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    expect(locations).toEqual(publicRoutes.map((route) => `${productionOrigin}${route}`));
    expect(new Set(locations).size).toBe(locations.length);
    expect(locations.every((location) => !location.includes("?") && !location.includes("/api/"))).toBe(true);
  });

  it("all routed pages use preferred-domain canonical URLs and no noindex", () => {
    const pagesDirectory = path.join(projectRoot, "src/pages");
    const pageSources = fs.readdirSync(pagesDirectory)
      .filter((file) => file.endsWith(".jsx"))
      .map((file) => fs.readFileSync(path.join(pagesDirectory, file), "utf8"));

    pageSources.forEach((source) => {
      expect(source).not.toMatch(/https:\/\/vednovaa\.com/);
      expect(source.toLowerCase()).not.toContain("noindex");
    });
    expect(pageSources.filter((source) => source.includes("const canonical =")).every(
      (source) => source.includes(`const canonical = "${productionOrigin}`),
    )).toBe(true);
  });

  it("provides unique titles, descriptions, and one canonical declaration per route", () => {
    const pagesDirectory = path.join(projectRoot, "src/pages");
    const metadata = fs.readdirSync(pagesDirectory)
      .filter((file) => file.endsWith(".jsx"))
      .map((file) => {
        const source = fs.readFileSync(path.join(pagesDirectory, file), "utf8");
        return {
          title: source.match(/const title = "([^"]+)"/)?.[1],
          description: source.match(/const description = "([^"]+)"/)?.[1],
          canonicalTags: (source.match(/rel="canonical"/g) || []).length,
        };
      });

    expect(metadata.every(({ title, description, canonicalTags }) => title && description && canonicalTags === 1)).toBe(true);
    expect(new Set(metadata.map(({ title }) => title)).size).toBe(metadata.length);
    expect(new Set(metadata.map(({ description }) => description)).size).toBe(metadata.length);
  });

  it("keeps organization schema on the preferred domain without review claims", () => {
    const homeSource = fs.readFileSync(path.join(projectRoot, "src/pages/Home.jsx"), "utf8");
    expect(homeSource).toContain('"@type": "Organization"');
    expect(homeSource).toContain(`const canonical = "${productionOrigin}/"`);
    expect(homeSource).not.toMatch(/aggregateRating|reviewRating|ratingValue/);
  });

  it("contains no localhost or staging URLs in production source and public assets", () => {
    const productionFiles = [
      path.join(projectRoot, "index.html"),
      path.join(projectRoot, "public/robots.txt"),
      path.join(projectRoot, "public/sitemap.xml"),
      ...fs.readdirSync(path.join(projectRoot, "src/pages")).map((file) => path.join(projectRoot, "src/pages", file)),
    ];
    const combinedSource = productionFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n").toLowerCase();
    expect(combinedSource).not.toContain("localhost");
    expect(combinedSource).not.toContain("staging.");
  });
});
