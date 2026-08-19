import type { SVGProps } from "react";

/**
 * Right-pointing arrow whose tail lifts from below and flattens into the head,
 * rather than running as a straight shaft.
 *
 * The curve's final control point sits level with the tip, so it arrives dead
 * horizontal — that's what lets the chevron sit flush on the shaft instead of
 * looking bolted on at an angle.
 */
export default function ArrowSwoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 15C9.5 15 14 12 20 12" />
      <path d="M16.5 8.5L20 12L16.5 15.5" />
    </svg>
  );
}
