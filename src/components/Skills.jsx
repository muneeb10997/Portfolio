import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "Cuda C"]
    },
    {
      title: "Backend",
      skills: ["Django REST Framework", "Flask", "FastAPI", "Node.js"]
    },
    {
      title: "Frontend",
      skills: ["Next.js", "React", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "AWS DynamoDB"]
    },
    {
      title: "AI/ML",
      skills: ["Google Gemini AI", "FAISS", "RAG"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, RDS, ECS, Lambda)", "GCP", "Docker", "Terraform", "GitHub Actions"]
    }
  ]

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
