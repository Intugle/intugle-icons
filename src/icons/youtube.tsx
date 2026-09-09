import type { SVGProps } from "react";

export default function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="4" fill="#ff0033" />
      <path d="m10 9 5 3-5 3V9Z" fill="white" />
    </svg>
  );
}
