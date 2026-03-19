import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import bookStore from '../../assets/book.png';
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
  title: 'Chat Application – Real-Time Messaging Platform',
  description: 'A full-stack real-time chat application that allows users to send and receive messages instantly using WebSockets. Features include authentication, one-to-one and group chats, typing indicators, and online/offline status.',
  technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
  image: 'https://w7.pngwing.com/pngs/397/206/png-transparent-chatting-app-people-thumbnail.png',
  liveUrl: 'https://realtime-chat-app-a8yf.onrender.com',
  githubUrl: 'https://github.com/Yuvi264/Realtime-chat-app',
  featured: true,
},
{
  title: 'Bookstore Application',
  description: 'A full-stack bookstore web application where users can browse, search, and manage books. Includes features like authentication, cart, wishlist, order simulation, and an admin panel for managing inventory.',
  technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS'],
  image: bookStore,
  liveUrl: 'https://jolly-cobbler-922bba.netlify.app/',
  githubUrl: 'https://github.com/Yuvi264/New_book_store_application',
  featured: true,
},
    {
      title: 'Task Management Dashboard',
      description: 'A productivity application with drag-and-drop functionality, real-time collaboration, team management, and detailed analytics.',
      technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Supabase'],
      image: '/project3.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
    },
    {
      title: 'Weather Analytics App',
      description: 'A data visualization application that provides detailed weather insights and predictions using machine learning algorithms.',
      technologies: ['Python', 'FastAPI', 'React', 'Chart.js', 'OpenWeather API'],
      image: '/project4.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`relative h-80 ${project.featured ? 'lg:col-span-1' : ''}`}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front of card */}
                <div 
                  className="absolute inset-0 card-project backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative overflow-hidden rounded-lg h-48 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='16' fill='%23ffffff'%3E${project.title}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                    {project.featured && (
                      <span className="absolute top-4 right-4 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute inset-0 card-project bg-primary/5 border-primary/20"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="h-full flex flex-col justify-between p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm py-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </motion.a>
                      
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center gap-2 text-sm py-2 px-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;