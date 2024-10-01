"use client";

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

import { Button } from '@/components/ui/button';



const Social = () => {
  const onClick = (provider) => {
    signIn(provider, { callbackUrl: '/' });
  }
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5 "/>
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("facebook")}
      >
        <FaFacebook className="h-5 w-5"/>
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("twitter")}
      >
        <FaTwitter className="h-5 w-5 "/>
      </Button>            
    </div>
  )
}

export default Social;