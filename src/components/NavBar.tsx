'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (toggleMenu) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
  }, [toggleMenu]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggleMenu(false);
      }
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside);
      }
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
      <div className="absolute -top-32 sm:-top-48 left-1/2 -z-10 h-32 sm:h-48 w-full max-w-xs sm:max-w-xl -translate-x-1/2 opacity-50 mix-blend-plus-lighter">
        <div className="h-8 sm:h-12 w-56 sm:w-80 mx-auto rounded-full bg-violet-500 blur-[6.875rem]"></div>
        <div className="h-20 sm:h-28 w-48 sm:w-56 mx-auto bg-white blur-[13.90625rem]"></div>
        <div className="h-32 sm:h-48 w-full rounded-[40rem] bg-gradient-to-b from-blue-500 to-violet-500 mix-blend-plus-lighter blur-[13.90625rem]"></div>
      </div>
      <nav className="relative p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div variants={logoAnimation}>
              <Image src="/images/logo.png" width={60} height={60} alt="MomentMint Logo" />
            </motion.div>
            <motion.span
              className="text-white text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              MomentMint
            </motion.span>
          </Link>
          <motion.button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="relative z-10 cursor-pointer"
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
                    <Image src="/images/logo.png" width={40} height={40} alt="MomentMint Logo" />
                    <span className="text-white text-2xl font-bold">MomentMint</span>
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
                <div className="flex flex-col-reverse md:flex-row justify-between  mb-6">
                  <motion.div className="flex flex-col justify-center space-y-4 mt-6 md:mt-0" variants={linkVariants}>
                    <motion.span
                      className="text-white text-xl md:text-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      Reach out to us at
                    </motion.span>
                    <div className="flex space-x-4">
                      {[
                        { href: 'https://twitter.com/', icon: faXTwitter, label: 'Twitter' },
                        {
                          href: 'https://www.instagram.com/',
                          icon: faInstagram,
                          label: 'Instagram',
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
                      { href: '/about-us', text: 'About us' },
                      { href: '/terms-and-conditions', text: 'Terms of use' },
                      { href: '/privacy-policy', text: 'Privacy Policy' },
                    ].map((link, index) => (
                      <motion.div key={link.href} variants={linkVariants} custom={index}>
                        <Link
                          href={link.href}
                          onClick={() => setToggleMenu(false)}
                          className={`text-3xl md:text-5xl font-bold hover:text-white block ${
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
