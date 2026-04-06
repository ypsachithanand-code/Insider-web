// Sign in page — minimalist centered card with form validation

import { motion } from 'framer-motion';
import AuthCard from '../components/srm/AuthCard';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="border border-brand-light-accent/15 dark:border-brand-dark-accent/15 p-10 md:p-12 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm">
          <div className="mb-10">
            <h2 className="text-3xl font-black uppercase tracking-[-0.02em] mb-2 text-brand-light-text dark:text-brand-dark-text">
              Sign In
            </h2>
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-40 text-brand-light-text dark:text-brand-dark-text">
              Access the SRM Insider Archive
            </p>
          </div>
          <AuthCard mode="login" />
        </div>
      </motion.div>
    </div>
  );
}