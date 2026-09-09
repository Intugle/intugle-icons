import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const directory = dirname(fileURLToPath(import.meta.url));
const langflow = resolve(directory, "../../langflow/src/frontend/src");
const styleUtils = readFileSync(resolve(langflow, "utils/styleUtils.ts"), "utf8");
const lazyIcons = readFileSync(resolve(langflow, "icons/lazyIconImports.ts"), "utf8");

const iconSources = new Map(
  [...lazyIcons.matchAll(/^\s*(\w+):\s*\(\)\s*=>\s*import\("@\/icons\/([^"]+)"\)[\s\S]*?default:\s*mod\.(\w+)/gm)].map(
    ([, icon, modulePath, exportName]) => [icon, { modulePath, exportName }],
  ),
);
const bundles = [...styleUtils.matchAll(/\{\s*display_name:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*icon:\s*"([^"]+)"\s*\}/g)].map(
  ([, displayName, bundle, icon]) => ({
    bundle,
    displayName,
    icon,
    source: iconSources.get(icon) ?? null,
  }),
);

mkdirSync(resolve(directory, "../src/generated"), { recursive: true });
writeFileSync(
  resolve(directory, "../src/generated/langflow-bundles.json"),
  `${JSON.stringify(bundles, null, 2)}\n`,
);
