import NextAuth from "next-auth";

import authConfig from "@/auth.config";



import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {

  const { nextUrl } = req;
  const isLoggedin = req.auth;

  // Allow API routes to be accessed without authentication
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if(isAuthRoute){
    if(isLoggedin){
      return Response.redirect(new URL("/", nextUrl));
    }
    return null;
  }

  if(isApiAuthRoute){
    return null;
  }

  // Si l'utilisateur essaye d'accéder à une autre page
  //  Si il est connecté, alors rien
  //  Sinon, on le redirige vers la page de connexion
  // A noter: si il arrive ici c'est qu'il n'est pas sur une partie publique, ni api. L'utilisateur doit donc être connecté
  // TODO: Rajouter avant la partie administration, car il doit être connecté et administrateur
  if(!isLoggedin && !isPublicRoute){
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null;

})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};