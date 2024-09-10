import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HankoAuth from './hanko/HankoAuth';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [text, setText] = useState('');
  const phrases = ['Task Rewards', 'Earn Crypto', 'Earn Credits'];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < phrases[index].length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + phrases[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const delayTimer = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(delayTimer);
    }
  }, [charIndex, index]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60"
      onClick={handleOverlayClick}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-4xl rounded-lg overflow-hidden bg-[url('/images/bg_login.svg')] bg-cover bg-top relative justify-between p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col justify-center text-white w-2/4 p-6">
          <div className="font-mono">
            <h2 className="text-5xl font-bold">Explore,</h2>
            <h2 className="text-5xl font-bold">Evaluate,</h2>
            <h2 className="text-5xl font-bold">Engage.</h2>
          </div>

          <p className="text-3xl mt-auto">{text}</p>
        </div>

        <div className="p-6">
          <HankoAuth />
        </div>

        <button
          onClick={onClose}
          className="text-white hover:text-white/60 absolute top-[3px] text-lg right-4"
          type="button"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} width={20} height={20} />
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
