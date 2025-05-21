import { NextResponse, type NextRequest } from "next/server";

import {
  getLocale,
  DEFAULT_LOCALE,
  SupportedLocales,
  supportedLocales,
} from "@/dictionaries";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale = pathname.split("/")[1] as SupportedLocales | undefined;

  // Check if the locale is supported
  if (!locale || !supportedLocales.includes(locale)) {
    // If not, redirect to the default locale
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LOCALE}${pathname}`, request.nextUrl)
    );
  }

  // Set the locale in the request headers
  request.headers.set("x-locale", await getLocale(locale));

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and Registration (r) paths
    "/((?!_next|favicon.ico|sitemap.xml|manifest.json|r|registry).*)",
  ],
};
