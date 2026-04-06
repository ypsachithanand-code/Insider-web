// Reusable auth card component for Login/Signup pages
// Features form validation, loading states, and accent-colored buttons

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AuthCard({ mode = 'login' }) {
  const isLogin = mode === 'login';
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const errs = {};
    if (!isLogin && !form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!validateEmail(form.email)) errs.email = 'Invalid email format';
    if (!form.password.trim()) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Minimum 6 characters';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    // Simulate auth request (frontend only)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass = (field) =>
    `w-full bg-transparent border-b-2 py-3 px-1 text-sm outline-none transition-colors duration-300 text-brand-light-text dark:text-brand-dark-text placeholder:text-brand-light-text/30 dark:placeholder:text-brand-dark-text/30 ${
      errors[field]
        ? 'border-red-400'
        : 'border-brand-light-accent/20 dark:border-brand-dark-accent/20 focus:border-brand-light-accent dark:focus:border-brand-dark-accent'
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-brand-light-accent/10 dark:bg-brand-dark-accent/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-brand-light-text dark:text-brand-dark-text">
          {isLogin ? 'Welcome Back' : 'Account Created'}
        </h3>
        <p className="text-sm opacity-50 mb-8 text-brand-light-text dark:text-brand-dark-text">
          {isLogin ? 'Redirecting to the Intelligence Hub...' : 'Your access credentials have been registered.'}
        </p>
        <Link
          to="/dashboard"
          className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-light-accent dark:text-brand-dark-accent hover:underline underline-offset-4"
        >
          Continue to Dashboard →
        </Link>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name field (signup only) */}
      {!isLogin && (
        <div>
          <label className="text-[10px] uppercase tracking-[0.15em] font-bold opacity-50 text-brand-light-text dark:text-brand-dark-text">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
            className={inputClass('name')}
          />
          {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
        </div>
      )}

      {/* Email */}
      <div>
        <label className="text-[10px] uppercase tracking-[0.15em] font-bold opacity-50 text-brand-light-text dark:text-brand-dark-text">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@university.edu"
          value={form.email}
          onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
          className={inputClass('email')}
        />
        {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="text-[10px] uppercase tracking-[0.15em] font-bold opacity-50 text-brand-light-text dark:text-brand-dark-text">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Minimum 6 characters"
            value={form.password}
            onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))}
            className={inputClass('password')}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-1 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-70 transition-opacity text-brand-light-text dark:text-brand-dark-text"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {errors.password && <p className="text-red-400 text-[10px] mt-1">{errors.password}</p>}
      </div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className="w-full py-4 bg-brand-light-accent dark:bg-brand-dark-accent text-white dark:text-brand-dark-bg font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {loading && <Loader2 size={16} className="animate-spin" />}
        {loading ? 'Authenticating...' : isLogin ? 'Sign In' : 'Create Account'}
      </motion.button>

      {/* Toggle link */}
      <p className="text-center text-xs opacity-40 text-brand-light-text dark:text-brand-dark-text">
        {isLogin ? "Don't have an account? " : 'Already registered? '}
        <Link
          to={isLogin ? '/register' : '/signin'}
          className="underline underline-offset-2 hover:opacity-100 transition-opacity font-bold"
        >
          {isLogin ? 'Sign up' : 'Sign In'}
        </Link>
      </p>
    </form>
  );
}