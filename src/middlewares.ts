import { NextResponse, NextRequest } from "next/server";
import { jwtVerify, createRemoteJWKSet } from "jose";

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

export async function middleware(req: NextRequest) {
  const hanko = req.cookies.get("hanko")?.value;

  const JWKS = createRemoteJWKSet(
    new URL(`${hankoApiUrl}/.well-known/jwks.json`)
  );

  try {
    const { payload } = await jwtVerify(hanko ?? "", JWKS);
    
    // Add user information to the request
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user-id", payload.sub as string);
    requestHeaders.set("x-user-email", payload.email as string);

    // Return the response with modified headers
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};