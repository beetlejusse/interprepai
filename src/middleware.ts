import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isprotectedRoute = createRouteMatcher([
    '/resume-builder',
    '/api',
    '/code-compiler',
    "/dashboard",
    "/roadmaps"
])
console.log(isprotectedRoute)

export default clerkMiddleware(async (auth, req) => {
    if (isprotectedRoute(req)) await auth.protect();
})

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
}