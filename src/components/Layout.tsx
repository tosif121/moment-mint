import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('@/components/NavBar'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
