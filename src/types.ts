import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type BundleIconDefinition = {
  bundle: string;
  displayName: string;
  load: () => Promise<{ default: IconComponent }>;
};
