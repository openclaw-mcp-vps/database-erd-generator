import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ERD Generator — Auto-generate Database Diagrams',
  description: 'Connect to any database and instantly generate clean, interactive ERD diagrams. Export as PNG, PDF, or SVG.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5905e712-9c77-440c-b11d-c38e0cea6ced"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
