"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const AuthLayout = ({ children }) => {
  const router = useRouter();
  const session = useSession();

  // Redirect to home if user is already logged in
  // Not with useRouter, because of an error server side "location is not defined"
  // This solution from here: https://www.reddit.com/r/nextjs/comments/11fuwys/nextjs_13_referenceerror_location_is_not_defined/
  useEffect(() => {
    if (session.data) {
      router.push("/");
    }
  }, []);
  return (

    <>
      {
        !session.data ? (
          <div className="h-full flex items-center justify-center bg-[#e5e5e5]">{children}</div>
        ) 
        : (
          <>nothing</>
          )
        }
    </>
  )
}

export default AuthLayout;