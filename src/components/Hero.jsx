import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Code2, Server, Sparkles } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  }

  const floatingIcons = [
    { Icon: Code2, delay: 0, position: { top: '20%', left: '10%' } },
    { Icon: Server, delay: 2, position: { top: '60%', right: '15%' } },
    { Icon: Sparkles, delay: 4, position: { bottom: '25%', left: '15%' } }
  ]

  return (
    <section id="hero" className="hero section">
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        
        {/* Floating Tech Icons */}
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ 
              delay: delay,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
          >
            <Icon size={60} />
          </motion.div>
        ))}
        
        {/* Animated Grid */}
        <div className="grid-background"></div>
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-tag" variants={itemVariants}>
            <span className="tag-dot"></span>
            <span>Available for Full-Time Opportunities</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="gradient-text">Muneeb Ur Rehman</span>
          </motion.h1>

          <motion.div className="hero-typing" variants={itemVariants}>
            <h2 className="hero-subtitle">
              <span className="typing-text">Full Stack Developer & DevOps Engineer</span>
              <span className="cursor">|</span>
            </h2>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Architecting scalable cloud solutions and crafting intelligent web applications 
            with cutting-edge technologies. Transforming complex problems into elegant, 
            production-ready systems.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              <span>Let's Connect</span>
              <div className="btn-glow"></div>
            </a>
            <a href="#projects" className="btn btn-secondary">
              <span>View My Work</span>
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a 
              href="https://github.com/muneeb10997" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="social-link"
            >
              <Github size={22} />
              <span className="social-tooltip">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/muneb-ur-rehman" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="social-link"
            >
              <Linkedin size={22} />
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a 
              href="mailto:muneeburrehman10997@gmail.com" 
              aria-label="Email"
              className="social-link"
            >
              <Mail size={22} />
              <span className="social-tooltip">Email</span>
            </a>
          </motion.div>

          <motion.a 
            href="#about" 
            className="scroll-indicator"
            variants={itemVariants}
            animate={{ 
              y: [0, 15, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <ArrowDown size={28} />
            <span className="scroll-text">Scroll to explore</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
