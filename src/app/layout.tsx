import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://zeff.my.id'),

  title: 'Fajrin Widianto | Founder & AI Architect at THAELON',

  description:
    'Fajrin Widianto is the Founder & AI Architect at THAELON, building FANA — an AI Intelligence Platform. Specializing in scalable software products, cloud infrastructure, and full-stack engineering.',

  keywords: [
    'Fajrin Widianto',
    'Zeff',
    'Backend Engineer',
    'Backend Developer',
    'Full Stack Developer',
    'Software Engineer',
    'AI Engineer',
    'AI Architect',
    'Cloud Engineer',
    'Web Developer',
    'API Development',
    'REST API',
    'Next.js',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Supabase',
    'Google Cloud',
    'GCP',
    'THAELON',
    'FANA',
  ],

  authors: [
    {
      name: 'Fajrin Widianto',
      url: 'https://zeff.my.id',
    },
  ],

  creator: 'Fajrin Widianto',

  alternates: {
    canonical: 'https://zeff.my.id',
  },

  icons: {
    icon: '/logozeff.png',
    apple: '/logozeff.png',
  },

  openGraph: {
    title: 'Fajrin Widianto | Founder & AI Architect at THAELON',
    description:
      'Founder & AI Architect at THAELON building FANA — an AI Intelligence Platform. Specializing in scalable software products, cloud infrastructure, and full-stack engineering.',
    url: 'https://zeff.my.id',
    siteName: 'Zeff — Fajrin Widianto',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logozeff.png',
        width: 1200,
        height: 630,
        alt: 'Fajrin Widianto — Founder & AI Architect at THAELON',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Fajrin Widianto | Founder & AI Architect at THAELON',
    description:
      'Founder & AI Architect at THAELON building FANA — an AI Intelligence Platform. Specializing in scalable software products, cloud infrastructure, and full-stack engineering.',
    images: ['/logozeff.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fajrin Widianto',
    alternateName: 'Zeff',
    url: 'https://zeff.my.id',
    image: 'https://zeff.my.id/logozeff.png',
    jobTitle: 'Founder & AI Architect at THAELON',
    worksFor: {
      '@type': 'Organization',
      name: 'THAELON',
      url: 'https://www.linkedin.com/company/thaelon',
    },
    sameAs: [
      'https://www.linkedin.com/in/fajrin-widianto/',
      'https://github.com/fajrinTech',
      'https://www.linkedin.com/company/thaelon',
      'https://www.linkedin.com/showcase/fana-arc',
    ],
    telephone: '+6285692473334',
    knowsAbout: [
      'Backend Engineering',
      'Full Stack Development',
      'API Architecture',
      'Cloud Infrastructure',
      'AI Systems Architecture',
      'Next.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Google Cloud Platform',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
