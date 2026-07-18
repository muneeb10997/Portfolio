import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Server, Cloud, Sparkles } from 'lucide-react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    { icon: Code2, text: "Full Stack Development" },
    { icon: Server, text: "DevOps & CI/CD" },
    { icon: Cloud, text: "Cloud Architecture" },
    { icon: Sparkles, text: "AI Integration" }
  ]

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I'm a results-driven Full Stack Developer & DevOps Engineer with a passion for building 
                scalable, production-grade web applications. My expertise spans the entire development 
                lifecycle—from architecting robust backend systems with Django REST Framework to crafting 
                responsive frontend experiences with React and Next.js.
              </p>
              <p>
                With hands-on experience in cloud infrastructure (AWS, GCP), containerization (Docker), 
                and CI/CD automation, I bridge the gap between development and operations. I've successfully 
                integrated complex third-party services including banking APIs, Xero accounting, and WhatsApp 
                Business, delivering seamless end-to-end solutions.
              </p>
              <p>
                Currently, I'm developing cutting-edge applications that leverage AI technologies like Google 
                Gemini and RAG architectures, while maintaining a strong focus on security, scalability, and 
                user experience. I thrive in fast-paced environments where innovation meets practical problem-solving.
              </p>
            </motion.div>

            <motion.div 
              className="about-highlights"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <item.icon className="highlight-icon" size={32} />
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
