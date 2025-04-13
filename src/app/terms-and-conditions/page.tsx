import dynamic from 'next/dynamic';
const Terms = dynamic(() => import('@/components/Terms'));

export default function Page() {
  return (
    <>
      <Terms />
    </>
  );
}
