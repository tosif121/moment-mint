import dynamic from 'next/dynamic';
const HomePage = dynamic(() => import('@/components/HomePage'));
const DownloadApp = dynamic(() => import('@/components/DownloadApp'));
const Features = dynamic(() => import('@/components/Features'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));

export default function Home() {
  return (
    <>
      <HomePage />
      <Features />
      <HowItWorks />
      <DownloadApp />
    </>
  );
}
