import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  /*
   * Hosts allowed to request dev-only assets (`/_next/static/*`, `/_next/hmr`).
   *
   * Next blocks these cross-origin by default, so hitting the dev server from a
   * phone at http://<lan-ip>:3000 loads the HTML but gets every JS chunk
   * blocked — the page renders dead, with no client components and no HMR.
   *
   * These are private, non-routable ranges, and the setting only applies to
   * `next dev`; production builds ignore it entirely.
   */
  allowedDevOrigins: [
    "172.20.10.*", // phone hotspot range — the machine's current WiFi subnet
    "192.168.*.*", // typical home/office LAN
    "10.*.*.*", // other private LANs
  ],
  images: {
    // 75 is the default any <Image> without an explicit quality prop requests,
    // so it must stay listed or those images 400.
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tbstat.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "academy-public.coinmarketcap.com",
      },
    ],
  },
};

export default nextConfig;
