import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Trump's Artificial Intelligence",
  description:"45th & 47th President of the United States. Builder of walls, maker of deals, and winner of elections. Making America Great Again.",
  icons: {
    icon: "/trump-ai.png" // Update this path to where your trumpy.png is located
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">   <head>
      <link rel="icon" href="/trumpy.png" type="image/png" />
    </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
