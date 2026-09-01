import React from 'react'
import { Navbar } from '@/components/layout/Navbar';

export default function CommonLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Navbar/>
      {children}
    </div>
  )
}
