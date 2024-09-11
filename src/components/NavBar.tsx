'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
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
    hidden: { y: '-100%' },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: '-100%',
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
    },
  };

  const socialIconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const navAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-10"
      variants={navAnimation}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute -top-[200px] left-[50%] -z-10 h-[200px] w-[640px] translate-x-[-50%] opacity-50 mix-blend-plus-lighter">
        <div className="h-[51.034px] w-[352px] flex-shrink-0 rounded-[352px] bg-violet-500 blur-[110px]"></div>
        <div className="h-[126.207px] w-[239.059px] flex-shrink-0 bg-white blur-[222.5px]"></div>
        <div className="h-[200px] w-[640px] flex-shrink-0 rounded-[640px] bg-gradient-to-b from-blue-500 to-violet-500 mix-blend-plus-lighter blur-[222.5px]"></div>
      </div>

      <nav className="relative p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/logo.png" width={40} height={40} alt="SolEarn Logo" />
            <span className="text-white text-2xl font-bold">SolEarn</span>
          </Link>
          <motion.button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="relative z-10"
            whileHover={{ scale: 1.1 }}
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
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon width={25} height={25} icon={faTimes} className="text-white text-5xl" />
                  </motion.button>
                </motion.div>
                <div className="flex justify-between mb-6">
                  <motion.div className="flex flex-col justify-center space-y-4" variants={linkVariants}>
                    <span className="text-white text-xl">Reach out to us at: help@sol.earn</span>
                    <div className="flex space-x-4">
                      {[
                        { href: 'https://twitter.com/its_tossi', icon: faXTwitter, label: 'Twitter' },
                        { href: 'https://www.instagram.com/tosif._.raza', icon: faInstagram, label: 'Instagram' },
                        {
                          href: 'https://www.linkedin.com/in/tosif-raza-247471205/',
                          icon: faLinkedin,
                          label: 'LinkedIn',
                        },
                      ].map((social) => (
                        <motion.a
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex items-center justify-center w-10 h-10 hover:bg-[#333] rounded-full transition-all"
                          variants={socialIconVariants}
                          whileHover="hover"
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
                    ].map((link) => (
                      <motion.div key={link.href} variants={linkVariants}>
                        <Link
                          href={link.href}
                          className={`text-5xl font-bold hover:text-white block ${
                            pathname === link.href ? 'text-white' : 'text-white/60'
                          }`}
                        >
                          {link.text}
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
