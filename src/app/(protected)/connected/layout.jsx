import { auth } from '@/auth';
import PageForbidden from '@/components/error-forbidden';
import React from 'react'

const ProtectedLayout = async ( { children }) => {
  const session = await auth(); 

  return (
    <>
    {session? <>{children}</> : <PageForbidden />}
  </>    

  )
}

export default ProtectedLayout;