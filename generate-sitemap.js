import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const hostname = "https://yelfaram.com";

const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/projects", changefreq: "daily", priority: 0.8 },
  { url: "/contact", changefreq: "daily", priority: 0.8 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  const lastmod = new Date().toISOString();

  routes.forEach((route) => sitemap.write({ ...route, lastmod }));

  sitemap.end();
  await streamToPromise(sitemap);
}

generateSitemap().catch((e) => {
  console.error("Failed to generate sitemap:", e);
});
