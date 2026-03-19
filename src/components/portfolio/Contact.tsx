import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Send Email Function
  const sendEmail = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);

  //   emailjs
  //     .send(
  //       "service_v1m4apf",  // Replace with EmailJS Service ID
  //       "template_w04uhsh", // Replace with EmailJS Template ID
  //       {
  //         name: formData.name,
  //         email: formData.email,
  //         message: formData.message
  //       },
  //       "M3UHWmBAltrHyAJXs"   // Replace with EmailJS Public Key
  //     )
  //     .then(
  //       () => {
  //         alert("Message sent successfully!");
  //         setFormData({ name: '', email: '', message: '' });
  //         setLoading(false);
  //       },
  //       (error) => {
  //         console.error(error.text);
  //         alert("Failed to send message. Please try again.");
  //         setLoading(false);
  //       }
  //     );
  // };
  emailjs
  .send(
    "service_o4ivl9h",  // Replace with EmailJS Service ID
    "template_w04uhsh", // Replace with EmailJS Template ID
    {
      name: formData.name,
      email: formData.email,
      message: formData.message
    },
    "M3UHWmBAltrHyAJXs"   // Replace with EmailJS Public Key
  )
  .then(
    () => {
      Swal.fire({
        title: '✅ Message Sent!',
        text: 'Thanks for contacting me. I will reply soon.',
        icon: 'success',
        confirmButtonText: 'Awesome 🎉',
        confirmButtonColor: '#4CAF50',
        background: '#f0fff4'
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    },
    (error) => {
      console.error(error.text);
      Swal.fire({
        title: '❌ Failed to Send',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay',
        confirmButtonColor: '#f44336',
        background: '#fff5f5'
      });
      setLoading(false);
    }
  );
}
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'www.linkedin.com/in/imyuvarajs',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Yuvi264',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card-portfolio">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                
                <div className="space-y-4">
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                      placeholder="Enter your full name"
                      aria-label="Your name"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                      placeholder="your.email@example.com"
                      aria-label="Your email address"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
                      placeholder="Tell me about your project or just say hello!"
                      aria-label="Your message"
                    />
                  </motion.div>

                  <motion.button
                    type="button"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onClick={sendEmail}
                    disabled={loading}
                  >
                    <Send className="w-5 h-5" />
                    {loading ? "Sending..." : "Send Message"}
                  </motion.button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Or reach out directly via email
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Email Button */}
              <motion.a
                href="mailto:your.email@gmail.com"
                className="card-portfolio block text-center group hover:border-primary/30 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-primary transition-all duration-300">
                    <Mail className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email Me</h3>
                <p className="text-muted-foreground mb-4">
                  Prefer email? Click here to open your email client
                </p>
                <span className="btn-accent inline-block">
                  your.email@gmail.com
                </span>
              </motion.a>

              {/* Social Links */}
              <div className="card-portfolio">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  Connect on Social Media
                </h3>
                
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      aria-label={`Connect on ${social.name}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="card-portfolio text-center"
              >
                <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-3 animate-pulse"></div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Available for Projects
                </h3>
                <p className="text-muted-foreground text-sm">
                  Currently accepting new opportunities and collaborations
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
