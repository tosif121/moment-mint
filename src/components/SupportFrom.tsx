import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const SupportFrom = () => {
  const technologies = [
    { name: 'Passkeys.io', image: '/images/passkeys.svg' },
    { name: 'Solana', image: '/images/solana.svg' },
    { name: 'Next.js', image: '/images/next.png' },
    { name: 'Tailwind CSS', image: '/images/tailwind.png' },
    { name: 'Node.js', image: '/images/node.png' },
    { name: 'Lottie', image: '/images/lottie.png' },
  ];

  return (
    <div className="absolute -bottom-[87px] left-0 right-0 z-[2] w-full bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-purple-900/80 backdrop-blur-sm p-4">
      <div className="mx-auto">
        <Marquee gradient={false} speed={30} pauseOnHover={true}>
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center mx-8">
              <Image src={tech.image} alt={tech.name} width={160} height={160}  />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SupportFrom;