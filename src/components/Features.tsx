'use client';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHeart, faBook, faCertificate } from '@fortawesome/free-solid-svg-icons';
import Lottie from 'lottie-react';
import animationData from '../lottieAnimation/animation_1.json';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimation } from 'framer-motion';

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

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleSpring = useSpring(scale, springConfig);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale: scaleSpring }}
      className="min-h-screen p-16 bg-gradient-to-b from-[#131128] to-[#1D1B3F] text-white flex flex-col justify-evenly overflow-hidden"
    >
      <motion.h3 className="text-5xl font-bold text-center mb-12 relative">
        <span className="relative z-10">Earn, Learn, and Certify Your Success</span>
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 m-auto container relative">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0, rotateY: 90 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className={`bg-[#1D1B3F] shadow-xl p-6 rounded-2xl ${
              index === 1 ? 'md:col-start-3' : ''
            } relative overflow-hidden group`}
          >
            <div className="bg-[#6639e4] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={feature.icon} className="text-2xl" width={35} height={35} />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="md:col-start-2 md:row-start-1 md:row-span-2 flex items-center justify-center"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <Lottie animationData={animationData} loop={true} style={{ height: '100%', width: '100%' }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;
