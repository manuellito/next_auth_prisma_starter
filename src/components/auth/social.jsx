"use client";
/*import {
  FcGoogle,
  FcFacebook,
  FcTwitter,
} from 'react-icons/fc';*/

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

import { Button } from '@/components/ui/button';



const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5 "/>
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {}}
      >
        <FaFacebook className="h-5 w-5"/>
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {}}
      >
        <FaTwitter className="h-5 w-5 "/>
      </Button>            
    </div>
  )
}

export default Social;