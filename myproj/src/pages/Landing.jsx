// Landing page — the premium entry point
// Features hero section with cinematic entrance and a stats/feature preview below

import { motion } from 'framer-motion';
import HeroSection from '../components/srm/HeroSection';
import { Briefcase, GraduationCap, Globe, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: Briefcase, label: 'CLUB MEMBERS', value: '500+' },
  { icon: GraduationCap, label: 'SUCCESS RATE', value: '94%' },
  { icon: Globe, label: 'CONNECTIONS', value: '90+' },
  { icon: TrendingUp, label: 'INTAKE LAST YEAR', value: '17%' },
];

export default function Landing() {
  return (
    <div>
      <HeroSection />

      {/* Stats section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.3em] font-bold mb-12 opacity-40 text-center text-brand-light-text dark:text-brand-dark-text"
          >
            By the Numbers
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-brand-light-accent/15 dark:border-brand-dark-accent/15">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 md:p-12 text-center border border-brand-light-accent/15 dark:border-brand-dark-accent/15 bg-white/[0.03] dark:bg-white/[0.01]"
                >
                  <Icon
                    size={22}
                    className="mx-auto mb-4 opacity-40 text-brand-light-accent dark:text-brand-dark-accent"
                  />
                  <div className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-brand-light-text dark:text-brand-dark-text">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 text-brand-light-text dark:text-brand-dark-text">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}