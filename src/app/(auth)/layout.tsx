import React from 'react'
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finance',
  description: 'Tela de login do Sistema de Finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="flex w-screen h-screen bg-themeSecundary">{children}</body>
    </html>
  )
}
