import { useSession } from 'next-auth/react';
import { use } from 'react';

// For client components
export const useCurrentRole = () => {
  const session = useSession();
  return session.data?.user?.role;
}
