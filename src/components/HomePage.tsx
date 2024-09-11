'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const SupportFrom = dynamic(() => import('./SupportFrom'));
const Modal = dynamic(() => import('./Modal'));

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cryptoImageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <>
      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />}

      <Image src="/images/bg_home.svg" layout="fill" objectFit="cover" className="z-[-1]" alt="Background" />

      <div className="min-h-[91vh] flex flex-col justify-evenly items-center">
        <div className="relative w-full max-w-4xl text-center">
          <motion.div variants={cryptoImageVariants} initial="hidden" animate="visible">
            <Image
              src="/images/cryptocurrency_1.svg"
              width={60}
              height={60}
              alt="cryptocurrency_1"
              className="absolute top-0 left-0 sm:-top-12 sm:-left-12 md:-top-24 md:-left-24 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            />
          </motion.div>
          <motion.div variants={cryptoImageVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            <Image
              src="/images/cryptocurrency_2.svg"
              width={60}
              height={60}
              alt="cryptocurrency_2"
              className="absolute top-0 right-0 sm:-top-12 sm:-right-12 md:-top-24 md:-right-24 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            />
          </motion.div>
          <motion.div variants={cryptoImageVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
            <Image
              src="/images/cryptocurrency_3.svg"
              width={60}
              height={60}
              alt="cryptocurrency_3"
              className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-16 md:-left-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            />
          </motion.div>
          <motion.div variants={cryptoImageVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
            <Image
              src="/images/cryptocurrency_4.svg"
              width={60}
              height={60}
              alt="cryptocurrency_4"
              className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-16 md:-right-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            />
          </motion.div>

          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
          >
            Unlock the Power of Solana
          </motion.h1>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
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
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/tasks"
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-lg sm:text-xl rounded-md shadow hover:from-violet-600 hover:to-blue-600 inline-block transition duration-500"
              role="button"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.6 }}
          >
            <button
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-lg sm:text-xl rounded-md shadow hover:from-violet-600 hover:to-blue-600 inline-block transition duration-500"
              onClick={() => setIsOpen(true)}
            >
              Login
            </button>
          </motion.div>
        </div>
        {/* <SupportFrom /> */}
      </div>
    </>
  );
};

export default HomePage;
