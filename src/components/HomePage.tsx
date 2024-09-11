'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useAnimation, useMotionValue } from 'framer-motion';
import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('./Modal'));
import { useUserData } from '@/hooks/useUserData';
import WalletConnect from './WalletConnect';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { id } = useUserData();
  const [hasId, setHasId] = useState(false);

  useEffect(() => {
    if (id) {
      setHasId(true);
    } else {
      setHasId(false);
    }
  }, [id]);


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const titleControls = useAnimation();
  const titleY = useMotionValue(0);

  useEffect(() => {
    const titleAnimation = async () => {
      await titleControls.start({ y: [-50, 0], opacity: [0, 1], transition: { duration: 0.7 } });
      titleControls.start({ y: [0, -10, 0], transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' } });
    };
    titleAnimation();
  }, [titleControls]);

  const cryptoImageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: i * 0.2,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.7,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div ref={containerRef} style={{ opacity, scale }} className="min-h-screen">
      <Image src="/images/bg_home.svg" layout="fill" objectFit="cover" className="z-[-1]" alt="Background" />

      <div className="min-h-[91vh] flex flex-col justify-evenly items-center">
        <div className="relative w-full max-w-4xl text-center">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cryptoImageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`absolute ${
                i === 1
                  ? 'top-0 left-0 sm:-top-12 sm:-left-12 md:-top-24 md:-left-24'
                  : i === 2
                  ? 'top-0 right-0 sm:-top-12 sm:-right-12 md:-top-24 md:-right-24'
                  : i === 3
                  ? 'top-1/2 -translate-y-1/2 left-0 sm:-left-16 md:-left-32'
                  : 'top-1/2 -translate-y-1/2 right-0 sm:-right-16 md:-right-32'
              }`}
            >
              <Image
                src={`/images/cryptocurrency_${i}.svg`}
                width={60}
                height={60}
                alt={`cryptocurrency_${i}`}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
              />
            </motion.div>
          ))}

          <motion.h1
            animate={titleControls}
            style={{ y: titleY }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
          >
            Unlock the Power of Solana
          </motion.h1>

          <motion.h2
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl md:text-3xl text-white mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-center"
          >
            <Image
              src="/images/solana-icon.png"
              width={48}
              height={48}
              alt="solana icon"
              className="mb-2 sm:mb-0 sm:mr-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            Earn Sol Crypto by Completing Simple Tasks
          </motion.h2>
        </div>

        <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
            <Link
              href="/tasks"
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-lg sm:text-xl rounded-md shadow inline-block transition duration-500"
              role="button"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
            {(hasId && <WalletConnect />) || (
              <button
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-lg sm:text-xl rounded-md shadow inline-block transition duration-500"
                onClick={() => setIsOpen(true)}
              >
                Login
              </button>
            )}
          </motion.div>
        </div>
      </div>

      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </motion.div>
  );
};

export default HomePage;
