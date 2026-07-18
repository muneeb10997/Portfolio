import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Zap } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      role: "Full Stack Developer & DevOps Engineer",
      company: "Repairitpro",
      location: "Islamabad, Pakistan",
      period: "Apr 2025 - Present",
      duration: "Current",
      type: "Full-Time",
      highlights: [
        "Developing Edoc21, a full-stack accounting application with React UI and Django REST Framework backend, containerized with Docker Compose",
        "Implemented CI/CD pipelines to automate build, test, and deployment workflows",
        "Integrated bank APIs for real-time transaction history and built WhatsApp chatbot using Meta App platform for automated client conversations"
      ],
      technologies: ["React", "Django", "Docker", "CI/CD", "Bank APIs", "WhatsApp API"],
      color: "primary"
    },
    {
      role: "Full Stack Developer",
      company: "Aimnovo",
      location: "Islamabad, Pakistan",
      period: "Dec 2024 - Apr 2025",
      duration: "5 months",
      type: "Full-Time",
      highlights: [
        "Led development of AimnexusHR, an AI-powered HR platform using Django REST Framework and Next.js with secure multi-company RBAC",
        "Developed AI skills assessment system with quiz generation, CV evaluation, and automated scoring using Google Gemini AI",
        "Implemented AI video interview feature with real-time interaction and automated feedback generation"
      ],
      technologies: ["Next.js", "Django", "Google Gemini AI", "PostgreSQL", "RBAC"],
      color: "secondary"
    },
    {
      role: "DevOps Engineer",
      company: "Systems Limited",
      location: "Islamabad, Pakistan",
      period: "Sep 2024 - Dec 2024",
      duration: "4 months",
      type: "Full-Time",
      highlights: [
        "Deployed scalable three-tier applications on AWS using VPC with secure network architecture and auto-scaling",
        "Built CI/CD pipelines using GitHub Actions for automated Docker deployments to DockerHub and Amazon ECR",
        "Implemented Infrastructure as Code using Terraform for consistent, reproducible deployments"
      ],
      technologies: ["AWS", "Terraform", "Docker", "GitHub Actions", "ECS"],
      color: "tertiary"
    },
    {
      role: "Network Engineer",
      company: "xFlow Research (Pvt.) Ltd",
      location: "Islamabad, Pakistan",
      period: "Jul 2023 - Dec 2023",
      duration: "6 months",
      type: "Internship",
      highlights: [
        "Gained knowledge of SONIC architecture and implemented LAN/VLAN configurations using GNS3",
        "Studied blockchain technology, DApps, and smart contract development"
      ],
      technologies: ["SONIC", "GNS3", "Blockchain", "Smart Contracts"],
      color: "quaternary"
    }
  ]

  const stats = [
    { icon: Briefcase, label: "Positions", value: "4", color: "primary" },
    { icon: TrendingUp, label: "Years Experience", value: "2+", color: "secondary" },
    { icon: Award, label: "Projects Delivered", value: "10+", color: "tertiary" },
    { icon: Zap, label: "Technologies", value: "20+", color: "quaternary" }
  ]

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Building innovative solutions across diverse industries
          </p>

          {/* Stats Grid */}
          <motion.div 
            className="experience-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`stat-card stat-${stat.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="stat-icon">
                  <stat.icon size={28} />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="timeline">
            <div className="timeline-line"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`timeline-item timeline-${exp.color}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                <div className="timeline-marker">
                  <div className="marker-outer">
                    <div className="marker-inner">
                      <Briefcase size={18} />
                    </div>
                  </div>
                  <div className="marker-pulse"></div>
                </div>
                
                <motion.div 
                  className="timeline-content"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="timeline-badge">{exp.type}</div>
                  
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <p className="timeline-company">
                        <span className="company-name">{exp.company}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-meta">
                    <span className="meta-item">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                    <span className="meta-item">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                    <span className="timeline-duration">{exp.duration}</span>
                  </div>
                  
                  <ul className="timeline-highlights">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + i * 0.1 }}
                      >
                        <span className="highlight-bullet"></span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="timeline-tech">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
