import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const jwt = request.cookies.get("ABCD")?.value;
 
  const path = request.nextUrl.pathname;
  const isPublicRoute = ['/'].includes(path);

  if (!jwt && !isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (jwt && isPublicRoute ) {
    return NextResponse.redirect(new URL("/customers", request.url));
  }


  return NextResponse.next();
}
export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|icon.ico|sitemap.xml|robots.txt).*)",
};
