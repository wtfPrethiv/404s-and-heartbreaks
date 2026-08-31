import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Fallback list of domains if NOT_FOUND_DOMAINS environment variable is not defined
const DEFAULT_NOT_FOUND_HOSTS = [
  "blogs.pr3thivv.lol",
  "labs.pr3thivv.lol",
];

function getNotFoundHosts(): Set<string> {
  const envHosts = process.env.NOT_FOUND_DOMAINS;
  if (!envHosts) {
    return new Set(DEFAULT_NOT_FOUND_HOSTS.map((h) => h.toLowerCase().trim()));
  }

  const parsed = envHosts
    .split(",")
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean);

  return new Set(parsed);
}

export function proxy(request: NextRequest) {
  // Extract and normalize hostname (lowercase, remove port if present)
  const rawHost =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "";
  const hostname = rawHost.split(":")[0].toLowerCase().trim();

  const notFoundHosts = getNotFoundHosts();

  // If the request matches one of the configured subdomains, serve the 404 page
  if (notFoundHosts.has(hostname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/_not-found";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
