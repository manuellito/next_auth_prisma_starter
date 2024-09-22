"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push('/login');
  }

  return (
    <div className="flex h-full bg-red-400 flex-col items-center justify-center">
      <p className="mb-4">Just replace this page</p>
      <Button variant="secondary" size="lg" className="text-lg" onClick={clickHandler}>
        Login
      </Button>
    </div>
  )
}

export default Home;