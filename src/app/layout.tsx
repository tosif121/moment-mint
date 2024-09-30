import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';
import { Manrope } from 'next/font/google';

const NavBar = dynamic(() => import('@/components/NavBar'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: 'MomentMint',
  description:
    'Share real-time moments, earn crypto instantly. Blockchain verifies authenticity. Turn special experiences into NFTs. Live, share, and profit from your authentic life',
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`antialiased bg-[#0d0d17] scroll-smooth ${poppins.className}`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
