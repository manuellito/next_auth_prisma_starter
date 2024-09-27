import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[#e5e5e5]">
      {children}
    </div>
  )
}

export default AuthLayout;