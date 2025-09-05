'use client'

import { useSession } from 'next-auth/react'
import Sidebar from './Sidebar'

export default function ShowSidebar() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return null // or a loading spinner
  }

  return (
    <>
      {session && <Sidebar />}
    </>
  )
}
