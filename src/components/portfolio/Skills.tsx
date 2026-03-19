import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaJsSquare, 
  FaReact, 
  FaPython, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiFlask, 
  SiMongodb 
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { 
      name: 'JavaScript', 
      level: 'Advanced', 
      percentage: 90,
      description: 'ES6+, Modern JS frameworks',
      icon: FaJsSquare,
      color: '#F7DF1E'
    },
    { 
      name: 'React', 
      level: 'Advanced', 
      percentage: 85,
      description: 'Hooks, Context, Performance optimization',
      icon: FaReact,
      color: '#61DAFB'
    },
    { 
      name: 'TypeScript', 
      level: 'Intermediate', 
      percentage: 75,
      description: 'Type-safe development',
      icon: SiTypescript,
      color: '#3178C6'
    },
    { 
      name: 'Python', 
      level: 'Advanced', 
      percentage: 88,
      description: 'Backend development, Data analysis',
      icon: FaPython,
      color: '#3776AB'
    },
    { 
      name: 'Node.js', 
      level: 'Intermediate', 
      percentage: 70,
      description: 'RESTful APIs, Express.js',
      icon: FaNodeJs,
      color: '#339933'
    },
    { 
      name: 'HTML & CSS', 
      level: 'Advanced', 
      percentage: 92,
      description: 'Semantic markup, Responsive design',
      icon: FaHtml5,
      color: '#E34F26'
    },
    { 
      name: 'Tailwind CSS', 
      level: 'Advanced', 
      percentage: 80,
      description: 'Utility-first styling',
      icon: SiTailwindcss,
      color: '#06B6D4'
    },
    { 
      name: 'Git & GitHub', 
      level: 'Advanced', 
      percentage: 85,
      description: 'Version control, Collaboration',
      icon: FaGitAlt,
      color: '#F05032'
    },
    { 
      name: 'Data Structures', 
      level: 'Intermediate', 
      percentage: 65,
      description: 'Algorithms, Problem solving',
      icon: FaDatabase,
      color: '#4A90E2'
    },
    { 
      name: 'Flask', 
      level: 'Intermediate', 
      percentage: 70,
      description: 'Python web framework',
      icon: SiFlask,
      color: '#000000'
    },
    { 
      name: 'SQL', 
      level: 'Intermediate', 
      percentage: 75,
      description: 'Database design, Queries',
      icon: FaDatabase,
      color: '#336791'
    },
    { 
      name: 'MongoDB', 
      level: 'Beginner', 
      percentage: 45,
      description: 'NoSQL databases',
      icon: SiMongodb,
      color: '#47A248'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-accent text-accent-foreground';
      case 'Intermediate':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="card-skill group relative overflow-hidden"
              >
                {/* Balloon effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                />
                
                <div className="relative z-10 space-y-4">
                  {/* Icon with balloon pop effect */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.6, 
                      type: "spring",
                      bounce: 0.4 
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${skill.color}20` }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon 
                          className="w-6 h-6" 
                          style={{ color: skill.color }}
                        />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {skill.name}
                      </h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {skill.description}
                  </motion.p>

                  {/* Circular progress indicator */}
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="relative w-16 h-16"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    >
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="hsl(var(--border))"
                          strokeWidth="4"
                          fill="none"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke={skill.color}
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 28}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                          animate={isInView ? { 
                            strokeDashoffset: 2 * Math.PI * 28 * (1 - skill.percentage / 100) 
                          } : { strokeDashoffset: 2 * Math.PI * 28 }}
                          transition={{ delay: index * 0.1 + 0.7, duration: 1, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span 
                          className="text-xs font-bold"
                          style={{ color: skill.color }}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: index * 0.1 + 1 }}
                        >
                          {skill.percentage}%
                        </motion.span>
                      </div>
                    </motion.div>
                    
                    {/* Linear progress bar as backup */}
                    <div className="flex-1">
                      <div className="w-full bg-border rounded-full h-2">
                        <motion.div 
                          className="h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                          transition={{ delay: index * 0.1 + 0.8, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;