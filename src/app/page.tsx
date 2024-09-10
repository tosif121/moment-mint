import dynamic from 'next/dynamic';
const HomePage = dynamic(() => import('@/components/HomePage'));
const SupportFrom = dynamic(() => import('@/components/SupportFrom'));

export default function Home() {
  return (
    <>
      <HomePage />
      <SupportFrom />
    </>
  );
}
