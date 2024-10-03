"use client";

import { login, loginMagicLink } from "@/actions/auth";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CardWrapper from "@/components/card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      title="Login"
      headerLabel="Please sign in"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocialLogin
    >
      <div className="p-20">
        <form action={loginMagicLink}>
          <Input type="email" name="email" className="rounded-lg border-2" placeholder="john.doe@email.com"/>
          <Button type="submit" className="mt-3 p-3 bg-black rounded-lg text-white">Sign Up</Button>
        </form>      
      </div>
    </CardWrapper>
  )
};

export default LoginForm;