import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fajrin Widianto — UI/UX Designer & Frontend Developer',
  description:
    'Crafting digital experiences that blend aesthetic beauty with functional precision for top-tier digital products.',
  keywords: ['UI/UX Designer', 'Frontend Developer', 'Portfolio', 'Fajrin Widianto'],
  authors: [{ name: 'Fajrin Widianto' }],
  openGraph: {
    title: 'Fajrin Widianto — UI/UX Designer & Frontend Developer',
    description:
      'Crafting digital experiences that blend aesthetic beauty with functional precision.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
