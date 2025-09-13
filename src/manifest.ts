import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";

export default defineManifest({
  name: "github-pr-ci-skip-toggle-checkbox",
  version: packageJson.version,
  description: "Adds checkbox near to PR merge button for easy adds [ci skip] comment to merge title.",
  manifest_version: 3,
  content_scripts: [
    {
      matches: ["https://github.com/*"],
      run_at: "document_start",
      js: ["src/content.ts"],
    },
  ],
});
