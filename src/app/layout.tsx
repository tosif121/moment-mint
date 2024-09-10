import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import dynamic from 'next/dynamic';
import { Manrope } from 'next/font/google';

const NavBar = dynamic(() => import('@/components/NavBar'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: 'SolEarn',
  description: 'Earn crypto by completing simple tasks on the Solana blockchain.',
};

const poppins = Manrope({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#0d0d17] scroll-smooth ${poppins.className}`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
