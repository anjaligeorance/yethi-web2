import './globals.css'
import { Red_Rose } from 'next/font/google'
 
const redRose = Red_Rose({ subsets: ['latin'] })
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={redRose.className}>{children}</body>
    </html>
  )
}