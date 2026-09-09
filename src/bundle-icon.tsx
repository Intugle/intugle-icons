import { lazy, Suspense } from "react";

import { getBundleIcon } from "./registry";
import type { IconComponent } from "./types";

export function BundleIcon({ bundle, fallback: Fallback, size = 20 }: { bundle: string; fallback: IconComponent; size?: number }) {
  const definition = getBundleIcon(bundle);
  if (!definition) return <Fallback width={size} height={size} />;
  const Icon = lazy(definition.load);
  return <Suspense fallback={<Fallback width={size} height={size} />}><Icon width={size} height={size} /></Suspense>;
}
