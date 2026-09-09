import * as react from 'react';
import { ComponentType, SVGProps } from 'react';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type BundleIconDefinition = {
    bundle: string;
    displayName: string;
    load: () => Promise<{
        default: IconComponent;
    }>;
};

declare function BundleIcon({ bundle, fallback: Fallback, size }: {
    bundle: string;
    fallback: IconComponent;
    size?: number;
}): react.JSX.Element;

declare const genericBundleIconKeys: readonly ["altk", "codeagents", "cuga", "paddle", "pgvector", "toolguard", "yahoosearch"];
declare const bundleIcons: Record<string, BundleIconDefinition>;
declare function getBundleIcon(bundle: string): BundleIconDefinition;

export { BundleIcon, type BundleIconDefinition, type IconComponent, bundleIcons, genericBundleIconKeys, getBundleIcon };
