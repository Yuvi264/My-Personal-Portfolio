import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 bg-secondary hover:bg-primary rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-secondary-foreground hover:text-primary-foreground transition-colors duration-300" />
          </motion.button>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 text-sm"
          >
            {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
            ))}
          </motion.nav>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-px bg-gradient-primary mx-auto"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-2"
          >
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © 2025 [Your Name]. Built with
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              and lots of coffee.
            </p>
            
            <p className="text-muted-foreground text-xs">
              Designed & Developed with React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>

          {/* Social Links Footer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            {[
              { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
              { name: 'GitHub', url: 'https://github.com/yourusername' },
              { name: 'Twitter', url: 'https://twitter.com/yourusername' }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary text-xs transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
              >
                {social.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;