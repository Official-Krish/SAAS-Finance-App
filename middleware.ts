import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  '/',
]);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default clerkMiddleware((auth,request) => {
  if(isProtectedRoute(request)){
    auth().protect();
  }
  return NextResponse.next();
});