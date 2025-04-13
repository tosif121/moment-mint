import type { Metadata } from 'next';
import './globals.css';
import { Manrope } from 'next/font/google';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/Layout'));

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
