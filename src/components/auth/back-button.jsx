"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const BackButton = ({ href, label }) => {
  return (
    <Button variant="link" size="sm" className="font-normal w-full" asChild>
      <Link href={href}>
        {label}
      </Link>
    </Button>
  )
}

export default BackButton;