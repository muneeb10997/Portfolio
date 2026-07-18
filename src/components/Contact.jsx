import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muneeburrehman10997@gmail.com",
      link: "mailto:muneeburrehman10997@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92-313-5563262",
      link: "tel:+923135563262"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      link: null
    }
  ]

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <motion.div 
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-text">
              <h3>Let's work together</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Whether you need a full-stack solution, DevOps 
                expertise, or AI integration, let's connect and build something amazing.
              </p>
            </div>

            <div className="contact-info-grid">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="contact-info-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <item.icon className="contact-icon" size={24} />
                  <div>
                    <p className="contact-label">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="contact-value">{item.value}</a>
                    ) : (
                      <p className="contact-value">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
