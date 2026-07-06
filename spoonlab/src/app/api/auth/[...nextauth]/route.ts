// ==========================================================================
// NextAuth.js API route — Google OAuth + Email (magic link)
// ==========================================================================
//
// To activate:
// 1. Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, NEXTAUTH_SECRET in .env
// 2. Uncomment the handler below
// 3. Configure your database adapter in src/lib/auth.ts
//
// import NextAuth from "next-auth";
// import { authOptions } from "@/lib/auth";
// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Auth endpoint ready. Configure NextAuth providers in src/lib/auth.ts.",
    setup: [
      "1. Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, NEXTAUTH_SECRET in .env",
      "2. Uncomment the NextAuth handler in this file",
      "3. Create src/lib/auth.ts with your provider configuration",
    ],
  });
}

export { GET as POST };
