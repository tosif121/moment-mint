'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHeart, faBook, faCertificate } from '@fortawesome/free-solid-svg-icons';
import Lottie from 'lottie-react';
import animationData from '../lottieAnimation/animation_1.json';

const Features = () => {
  const features = [
    { icon: faDollarSign, title: 'First Income', description: 'Start earning money by working with real companies.' },
    {
      icon: faHeart,
      title: 'Passion',
      description: 'Turn your passion into a profession and do what you love every day.',
    },
    { icon: faBook, title: 'Learning', description: 'Experience hands-on learning by working on real projects.' },
    {
      icon: faCertificate,
      title: 'Certification',
      description: 'Enhance your profile with experience certificates and showcase your skills.',
    },
  ];

  return (
    <div className="min-h-screen p-16 bg-[#131128] text-white flex flex-col justify-evenly">
      <h3 className="text-5xl font-bold text-center mb-12">Earn, Learn, and Certify Your Success</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 m-auto container">
        {features.map((feature, index) => (
          <div key={index} className={`bg-[#1D1B3F] shadow-xl p-6 rounded-2xl ${index === 1 ? 'md:col-start-3' : ''}`}>
            <div className="bg-[#6639e4] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={feature.icon} className="text-2xl" width={35} height={35} />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
        <div className="md:col-start-2 md:row-start-1 md:row-span-2 flex items-center justify-center">
          <Lottie animationData={animationData} loop={true} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Features;
