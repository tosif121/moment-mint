'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHeart, faBook, faCertificate } from '@fortawesome/free-solid-svg-icons';
import Lottie from 'lottie-react';
import animationData from '../lottieAnimation/animation_1.json';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen p-8 md:p-16 bg-gradient-to-b from-[#131128] to-[#1D1B3F] text-white flex flex-col justify-evenly overflow-hidden">
      <h3 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-0">Earn, Learn, and Certify Your Success</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 m-auto max-w-screen-lg relative">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0, rotateY: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2, type: 'spring' }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className={`bg-[#1D1B3F] shadow-xl p-6 rounded-2xl relative overflow-hidden group ${
              index === 1 ? 'md:col-start-3' : ''
            }`}
          >
            <div className="bg-[#6639e4] w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={feature.icon} className="text-lg md:text-2xl" width={30} height={30} />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="md:col-start-2 md:row-start-1 md:row-span-2 flex items-center justify-center sm:block hidden"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <Lottie animationData={animationData} loop={true} style={{ height: '100%', width: '100%' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
