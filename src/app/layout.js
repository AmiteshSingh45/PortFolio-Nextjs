import './globals.css'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500']
})

export const metadata = {
  title: 'Amitesh Kumar — Full Stack Developer & AI Engineer',
  description: 'Portfolio of Amitesh Kumar — a passionate full stack developer and AI/ML engineer building modern, scalable web applications and intelligent systems. SVNIT Surat, 2027.',
  keywords: ['Amitesh Kumar', 'Full Stack Developer', 'AI Engineer', 'Machine Learning', 'Next.js', 'React', 'Portfolio', 'SVNIT'],
  authors: [{ name: 'Amitesh Kumar' }],
  openGraph: {
    title: 'Amitesh Kumar — Full Stack Developer & AI Engineer',
    description: 'Building modern web apps and intelligent systems.',
    type: 'website',
    url: 'https://amitesh-lyart.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amitesh Kumar — Full Stack Developer & AI Engineer',
    description: 'Building modern web apps and intelligent systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050508] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
