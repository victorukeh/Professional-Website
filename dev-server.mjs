/**
 * Local static dev server for this multi-page site.
 * Maps extensionless paths (/work, /contact) to *.html so navigation matches production static hosts.
 * Does NOT implement SPA fallback (no "always serve index.html").
 */
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".htm": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function mimeFor(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream";
}

async function resolveFile(urlPathname) {
  let pathname = urlPathname.split("?")[0];
  if (pathname.includes("..")) return null;

  const rel = pathname.startsWith("/") ? pathname.slice(1) : pathname;

  if (rel === "" || rel === "index.html") {
    const idx = path.join(ROOT, "index.html");
    try {
      const st = await fs.stat(idx);
      if (st.isFile()) return idx;
    } catch {
      return null;
    }
    return null;
  }

  const base = path.join(ROOT, rel);
  if (!base.startsWith(ROOT)) return null;

  try {
    const st = await fs.stat(base);
    if (st.isFile()) return base;
    if (st.isDirectory()) {
      const idx = path.join(base, "index.html");
      const st2 = await fs.stat(idx);
      if (st2.isFile()) return idx;
    }
  } catch {
    /* try .html */
  }

  if (!path.extname(base)) {
    const html = base + ".html";
    try {
      const st = await fs.stat(html);
      if (st.isFile()) return html;
    } catch {
      return null;
    }
  }

  return null;
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", "http://localhost");
    const filePath = await resolveFile(url.pathname);

    if (!filePath) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const body = await fs.readFile(filePath);
    res.writeHead(200, {
      "Content-Type": mimeFor(filePath),
      "Cache-Control": "no-cache",
    });
    res.end(body);
  } catch (e) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(String(e && e.message ? e.message : e));
  }
});

server.listen(PORT, () => {
  console.log(`Dev server (multi-page, no SPA): http://localhost:${PORT}/`);
});
