import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import yuvi from '../../assets/yuvi.png';
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image with Water Droplet Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Main circular image */}
                <motion.div 
                  className="w-80 h-80 rounded-full overflow-hidden shadow-card relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={yuvi}
                    alt="Professional headshot"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Ccircle cx='160' cy='160' r='160' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='16' fill='%23ffffff'%3EYour Photo Here%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  
                  {/* Water droplet animation overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/30 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + (i % 2) * 20}%`,
                        }}
                        animate={{
                          y: [0, 200, 400],
                          opacity: [0, 0.7, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                    
                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-primary/20 rounded-full"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Decorative gradient border */}
                <div className="absolute -inset-1 bg-gradient-primary rounded-full -z-10 opacity-30"></div>
                
                {/* Floating water droplets around image */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`droplet-${i}`}
                    className="absolute w-3 h-3 bg-accent/40 rounded-full"
                    style={{
                      left: `${Math.cos((i * Math.PI) / 4) * 180 + 160}px`,
                      top: `${Math.sin((i * Math.PI) / 4) * 180 + 160}px`,
                    }}
                    animate={{
                      scale: [0.5, 1.2, 0.5],
                      opacity: [0.3, 0.8, 0.3],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
              </div>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a passionate developer with a strong foundation in modern web technologies 
                  and a keen eye for creating intuitive, user-centered digital experiences. My 
                  journey in technology is driven by curiosity and a commitment to continuous learning.
                </p>
                
                <p>
                  With expertise spanning front-end development, backend systems, and data structures, 
                  I enjoy tackling complex problems and turning innovative ideas into reality. I believe 
                  in writing clean, maintainable code and building applications that make a real difference.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I'm always 
                  excited to collaborate on projects that challenge the status quo and create meaningful impact.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-4"
              >
                <div className="flex flex-wrap gap-3">
                  {['Problem Solving', 'Creative Thinking', 'Team Collaboration', 'Continuous Learning'].map((trait, index) => (
                    <span
                      key={trait}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;