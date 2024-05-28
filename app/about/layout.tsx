import React from 'react'
import NavBar from '@/components/navbar';

export default function about({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    {children}
  </section>
}
  