import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es", "de"];
const defaultLocale = "en";

const getLocale = (request: NextRequest): string => {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().toLowerCase())
    .map((lang) => lang.split("-")[0]);

  for (const lang of preferred) {
    if (locales.includes(lang)) return lang;
  }

  return defaultLocale;
};

export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
};

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
