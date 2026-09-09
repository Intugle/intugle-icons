import { describe, expect, it } from "vitest";

import { bundleIcons, genericBundleIconKeys } from "../src/registry";

describe("bundle icon registry", () => {
  it("covers current Studio bundle keys", () => {
    expect(Object.keys(bundleIcons)).toHaveLength(87);
    expect(bundleIcons.youtube?.displayName).toBe("YouTube");
    expect(bundleIcons.openai?.displayName).toBe("OpenAI");
  });

  it("documents the only Langflow generic bundle icons", () => {
    expect(genericBundleIconKeys).toEqual(["altk", "codeagents", "cuga", "paddle", "pgvector", "toolguard", "yahoosearch"]);
  });

  it("never falls back to package.tsx for registered bundles", async () => {
    const packageIcon = (await import("../src/icons/package")).default;

    for (const [bundle, definition] of Object.entries(bundleIcons)) {
      const icon = (await definition.load()).default;
      expect(icon, `${bundle} must have an explicit icon loader`).toBeDefined();
      expect(icon, `${bundle} must not use package.tsx`).not.toBe(packageIcon);
    }
  });
});
