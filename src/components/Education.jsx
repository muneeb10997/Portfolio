import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award } from 'lucide-react'
import './Education.css'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="education section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>

          <motion.div
            className="education-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="education-icon">
              <GraduationCap size={40} />
            </div>

            <div className="education-content">
              <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
              <p className="education-institution">Muslim Youth University, Islamabad, Pakistan</p>
              
              <div className="education-details">
                <div className="education-detail">
                  <Award size={18} className="detail-icon" />
                  <span>CGPA: 3.56 / 4.0</span>
                </div>
                <div className="education-detail">
                  <span className="detail-period">Oct 2020 - Jul 2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
