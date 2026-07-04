import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteUrl } from "../data/content";

function setMeta(attr, key, content) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function setJsonLdBlocks(idPrefix, blocks) {
  document
    .querySelectorAll(`script[data-jsonld-group="${idPrefix}"]`)
    .forEach((tag) => tag.remove());

  blocks.forEach((data, index) => {
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.dataset.jsonldGroup = idPrefix;
    tag.id = `${idPrefix}-${index}`;
    tag.textContent = JSON.stringify(data);
    document.head.appendChild(tag);
  });
}

/**
 * Sets per-route document title, meta description, canonical URL, Open
 * Graph / Twitter tags, and an optional JSON-LD block. Needed because this
 * is a client-rendered SPA with a single static index.html — without this,
 * every route would share one title/description in search results and link
 * previews.
 */
export default function Seo({ title, description, jsonLd }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonical = `${siteUrl}${pathname === "/" ? "" : pathname}`;

    if (title) document.title = title;
    setMeta("name", "description", description);
    setLink("canonical", canonical);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "InsureAuto Agency");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);

    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    setJsonLdBlocks("page-jsonld", blocks);

    return () => setJsonLdBlocks("page-jsonld", []);
  }, [pathname, title, description, jsonLd]);

  return null;
}
