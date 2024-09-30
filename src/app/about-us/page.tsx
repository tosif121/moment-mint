import dynamic from 'next/dynamic';
const AboutUs = dynamic(() => import('@/components/AboutUs'));

export default async function Page({  }) {
  return (
    <>
      <AboutUs />
    </>
  );
}
