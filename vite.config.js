import { execSync } from "node:child_process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Resolve the commit this build was produced from. On Vercel the SHA is
// injected as VERCEL_GIT_COMMIT_SHA; locally we fall back to git, then to
// "unknown" so the build never fails when git isn't available.
function resolveCommitSha() {
  if (process.env.VERCEL_GIT_COMMIT_SHA) return process.env.VERCEL_GIT_COMMIT_SHA;
  try {
    return execSync("git rev-parse HEAD").toString().trim();
  } catch {
    return "unknown";
  }
}

// Stamps the resolved SHA into <head> as <meta name="commit-sha"> so the
// deployed commit can be verified from the live page source, not just the
// Vercel dashboard.
function commitStampPlugin(sha) {
  return {
    name: "commit-stamp",
    transformIndexHtml() {
      return [
        { tag: "meta", attrs: { name: "commit-sha", content: sha }, injectTo: "head" },
      ];
    },
  };
}

export default defineConfig(() => {
  const commitSha = resolveCommitSha();
  return {
    plugins: [react(), commitStampPlugin(commitSha)],
  };
});
