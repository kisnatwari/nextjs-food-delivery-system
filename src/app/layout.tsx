import Notification from '@/components/Notification'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import QueryProvider from '@/components/QueryProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white"}>
        <AuthProvider>
          <QueryProvider>
            <Notification />
            <Navbar />
            {children}
            <Footer />
            <ToastContainer position="top-left" autoClose={1500} newestOnTop={false} closeOnClick rtl={false} theme="dark" />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
