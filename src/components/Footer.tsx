'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { motion, useAnimation } from 'framer-motion';

interface SocialLink {
  href: string;
  icon: IconDefinition;
  label: string;
  className: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      href: "https://twitter.com/its_tossi",
      icon: faXTwitter,
      label: "Twitter",
      className: "bg-[#333]"
    },
    {
      href: "https://www.instagram.com/tosif._.raza",
      icon: faInstagram,
      label: "Instagram",
      className: "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285aeb_90%)]"
    },
    {
      href: "https://www.linkedin.com/in/tosif-raza-247471205/",
      icon: faLinkedin,
      label: "LinkedIn",
      className: "bg-[linear-gradient(138deg,_#2489be_33.45%,_#0575b3_66.59%)]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.3 } }
  };

  return (
    <motion.footer 
      className="text-white p-4 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <motion.p 
          variants={itemVariants}
          className="mb-4 sm:mb-0"
        >
          &copy; {currentYear} SolEarn. All rights reserved.
        </motion.p>
        <motion.div 
          className="flex space-x-4"
          variants={itemVariants}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`flex items-center justify-center w-12 h-12 ${link.className} rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl`}
              whileHover="hover"
              variants={iconVariants}
            >
              <FontAwesomeIcon width={24} height={24} icon={link.icon} className="text-white text-2xl" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;