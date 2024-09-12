'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [toggleMenu]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        ease: 'anticipate',
        duration: 0.5,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { y: 50, opacity: 0, rotate: -5 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      rotate: 5,
    },
  };

  const socialIconVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const navAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const logoAnimation = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" className="sticky top-0 z-10" variants={navAnimation}>
      <div className="absolute -top-[200px] left-[50%] -z-10 h-[200px] w-[640px] translate-x-[-50%] opacity-50 mix-blend-plus-lighter">
        <motion.div
          className="h-[51.034px] w-[352px] flex-shrink-0 rounded-[352px] bg-violet-500 blur-[110px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="h-[126.207px] w-[239.059px] flex-shrink-0 bg-white blur-[222.5px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="h-[200px] w-[640px] flex-shrink-0 rounded-[640px] bg-gradient-to-b from-blue-500 to-violet-500 mix-blend-plus-lighter blur-[222.5px]"
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <nav className="relative p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div variants={logoAnimation}>
              <Image src="/images/logo.png" width={40} height={40} alt="SolEarn Logo" />
            </motion.div>
            <motion.span
              className="text-white text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              SolEarn
            </motion.span>
          </Link>
          <motion.button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="relative z-10"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="/images/menu.png" width={32} height={32} alt="menu" />
          </motion.button>
        </div>

        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              ref={menuRef}
              className="absolute top-0 right-0 bg-[#282454] w-full shadow-sm p-8 z-10"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="container mx-auto">
                <motion.div className="flex justify-between items-center mb-6" variants={linkVariants}>
                  <button onClick={() => setToggleMenu(!toggleMenu)} className="flex items-center space-x-3">
                    <Image src="/images/logo.png" width={40} height={40} alt="SolEarn Logo" />
                    <span className="text-white text-2xl font-bold">SolEarn</span>
                  </button>
                  <motion.button
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="w-10 flex items-center justify-center h-10 bg-[#131128]/40"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon width={25} height={25} icon={faTimes} className="text-white text-5xl" />
                  </motion.button>
                </motion.div>
                <div className="flex justify-between mb-6">
                  <motion.div className="flex flex-col justify-center space-y-4" variants={linkVariants}>
                    <motion.span
                      className="text-white text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      Reach out to us at: help@sol.earn
                    </motion.span>
                    <div className="flex space-x-4">
                      {[
                        { href: 'https://twitter.com/its_tossi', icon: faXTwitter, label: 'Twitter' },
                        { href: 'https://www.instagram.com/tosif._.raza', icon: faInstagram, label: 'Instagram' },
                        {
                          href: 'https://www.linkedin.com/in/tosif-raza-247471205/',
                          icon: faLinkedin,
                          label: 'LinkedIn',
                        },
                      ].map((social, index) => (
                        <motion.a
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex items-center justify-center w-10 h-10 hover:bg-[#1a1a1a] rounded-full transition-all"
                          variants={socialIconVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                          custom={index}
                        >
                          <FontAwesomeIcon width={20} height={20} icon={social.icon} className="text-white text-2xl" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                  <div className="flex flex-col items-end space-y-4">
                    {[
                      { href: '/', text: 'Home' },
                      { href: '/tasks', text: 'Tasks' },
                      { href: '/rewards', text: 'Rewards' },
                      { href: '/profile', text: 'Profile' },
                    ].map((link, index) => (
                      <motion.div key={link.href} variants={linkVariants} custom={index}>
                        <Link
                          href={link.href}
                          className={`text-5xl font-bold hover:text-white block ${
                            pathname === link.href ? 'text-white' : 'text-white/60'
                          }`}
                        >
                          <motion.span
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            whileHover={{
                              scale: 1.05,
                            }}
                          >
                            {link.text}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default NavBar;
