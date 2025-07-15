import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { writeFile } from "fs/promises";

const hostname = "https://yelfaram.com";

const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/projects", changefreq: "daily", priority: 0.8 },
  { url: "/contact", changefreq: "daily", priority: 0.8 },
];

async function generateSitemap() {
  const lastmod = new Date().toISOString();

  const links = routes.map((route) => ({
    ...route,
    lastmod,
  }));

  const stream = new SitemapStream({
    hostname,
    xmlns: {
      news: false,
      video: false,
      xhtml: false,
      image: false,
    },
  });

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  await writeFile("./public/sitemap.xml", xml);
  console.log("Sitemap generated successfully");
}

generateSitemap().catch((err) => {
  console.error("Failed to generate sitemap:", err);
  process.exit(1);
});
