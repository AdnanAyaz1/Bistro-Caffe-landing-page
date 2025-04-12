import { Playfair_Display, Lato } from 'next/font/google'
import '../index.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
})

export const metadata = {
  title: 'Bistro Cafe',
  description: 'A modern restaurant landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-pattern overflow-hidden">
        {children}
      </body>
    </html>
  )
}