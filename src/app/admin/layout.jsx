"use client";

import { UserRole } from "@prisma/client";

import { useCurrentRole } from "@/hooks/auth/use-current-role";
import  PageForbidden  from "@/components/error-forbidden";


const AdminLayout = ( { children } ) => {
  const role = useCurrentRole();
  return (
    <>
      {role === UserRole.ADMIN ? <>{children}</> : <PageForbidden />}
    </>
  )
};

export default AdminLayout;