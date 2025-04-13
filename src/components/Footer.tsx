import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
      href: 'https://twitter.com/',
      icon: faXTwitter,
      label: 'Twitter',
      className: 'bg-[#333]',
    },
    {
      href: 'https://www.instagram.com/',
      icon: faInstagram,
      label: 'Instagram',
      className: 'bg-[radial-gradient(circle_at_30%_107%,#fdf497_0,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285aeb_90%)]',
    },
  ];

  return (
    <footer className="text-white p-4 w-full">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0">&copy; {currentYear} MomentMint. All rights reserved.</p>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`flex items-center justify-center w-12 h-12 ${link.className} rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl`}
            >
              <FontAwesomeIcon width={24} height={24} icon={link.icon} className="text-white text-2xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
