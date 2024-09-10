import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { faDollarSign, faHeart, faBook, faCertificate } from '@fortawesome/free-solid-svg-icons';

const SupportFrom: React.FC = () => {
  const technologies = [
    { name: 'passkeys.io', image: '/images/passkeys.svg' },
    { name: 'Solana', image: '/images/solana.svg' },
    { name: 'Next.js', image: '/images/next.png' },
    { name: 'Tailwind CSS', image: '/images/tailwind.png' },
    { name: 'Node.js', image: '/images/node.png' },
  ];

  return (
    <div className="min-h-screen p-4 flex flex-col justify-center items-center bg-[#131128]">
      <h2 className="text-5xl text-white mb-10">Our Web App Utilizes</h2>
      <div className="flex space-x-5 flex-wrap justify-center mb-10">
      {technologies.map((tech) => (
        <div key={tech.name} className="flex justify-center">
          <div className="bg-[#1b1b25] text-white p-4 rounded-lg flex items-center shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
            <Image src={tech.image} alt={tech.name} width={150} height={150} />
          </div>
        </div>
      ))}
    </div>

      <h3 className="text-5xl text-white mb-10">Earn, Learn, and Certify Your Success</h3>
      <div className="flex flex-wrap space-x-6 justify-center gap-6">
        <div className="flex items-center space-x-4 bg-[#282454] text-white p-4 rounded-lg">
          <div className="bg-[#6639e4] p-2 rounded-lg">
            <FontAwesomeIcon icon={faDollarSign} width={25} height={25} className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">First Income</h4>
            <p className="text-gray-300">Start earning money by working with real companies.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-[#282454] text-white p-4 rounded-lg">
          <div className="bg-[#6639e4] p-2 rounded-lg">
            <FontAwesomeIcon icon={faHeart} width={25} height={25} className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">Passion</h4>
            <p className="text-gray-300">Turn your passion into a profession and do what you love every day.</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-[#282454] text-white p-4 rounded-lg">
          <div className="bg-[#6639e4] p-2 rounded-lg">
            <FontAwesomeIcon icon={faBook} width={25} height={25} className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">Learning</h4>
            <p className="text-gray-300">Experience hands-on learning by working on real projects.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-[#282454] text-white p-4 rounded-lg">
          <div className="bg-[#6639e4] p-2 rounded-lg">
            <FontAwesomeIcon icon={faCertificate} width={25} height={25} className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">Certification</h4>
            <p className="text-gray-300">Enhance your profile with experience certificates and showcase your skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportFrom;
