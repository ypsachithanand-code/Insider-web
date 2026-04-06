// Hero section — full viewport, cinematic entrance
// Features scale typography, Framer Motion fade-in, and CTA scroll to dashboard

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMAGE = "https://media.base44.com/images/public/69d227b25ca338d4253a72b8/dd0d4cfe9_generated_e2c14091.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Brutalist university architecture with dramatic lighting"
          className="w-full h-full object-cover opacity-20 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-light-bg/60 via-brand-light-bg/40 to-brand-light-bg dark:from-brand-dark-bg/60 dark:via-brand-dark-bg/40 dark:to-brand-dark-bg" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-5xl"
      >
        {/* Micro label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.35em] font-bold mb-8 opacity-50 text-brand-light-text dark:text-brand-dark-text"
        >
          The INSIDER Archive
        </motion.p>

        {/* Main title with scale typography */}
        <h1 className="text-[14vw] md:text-[9vw] lg:text-[7vw] font-black leading-[0.85] tracking-[-0.03em] uppercase mb-6 text-brand-light-text dark:text-brand-dark-text">
          SRM
          <br />
          <span className="text-brand-light-accent dark:text-brand-dark-accent">
            Insider.
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto opacity-70 mb-14 font-medium leading-relaxed text-brand-light-text dark:text-brand-dark-text"
        >
          From visionary code to real-world impact, , 
          we’re building the digital infrastructure for every SRMite.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 bg-brand-light-accent dark:bg-brand-dark-accent text-white dark:text-brand-dark-bg font-bold uppercase tracking-[0.2em] text-sm hover:shadow-2xl transition-shadow duration-300"
            >
              Enter the Hub
            </motion.button>
          </Link>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-8 opacity-30"
          >
            <ArrowDown size={20} className="text-brand-light-text dark:text-brand-dark-text" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}