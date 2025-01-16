'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Vue', level: 90, color: '#41B883' },
  { name: 'React', level: 85, color: '#61DAFB' },
  { name: 'JavaScript', level: 95, color: '#F7DF1E' },
  { name: 'Tailwind CSS', level: 90, color: '#06B6D4' },
  { name: 'Vuetify', level: 85, color: '#1867C0' },
  { name: 'HTML5', level: 95, color: '#E34F26' },
  { name: 'CSS3', level: 90, color: '#1572B6' },
  { name: 'Git', level: 85, color: '#F05032' },
  { name: 'Responsive Design', level: 90, color: '#7952B3' },
  { name: 'UI/UX', level: 80, color: '#FF4088' }
]

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div 
                className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center mb-4"
                style={{ backgroundColor: skill.color }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-xl">{skill.level}%</span>
              </motion.div>
              <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
              {hoveredSkill === skill.name && (
                <motion.div 
                  className="mt-2 text-sm text-center text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {getSkillDescription(skill.name)}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getSkillDescription(skillName: string): string {
  const descriptions: Record<string, string> = {
    'Vue': 'Building scalable apps with Vue.js ecosystem',
    'React': 'Creating dynamic UIs with React and related libraries',
    'JavaScript': 'Expert in modern JS, including ES6+ features',
    'Tailwind CSS': 'Rapid UI development with utility-first approach',
    'Vuetify': 'Material design interfaces with Vuetify',
    'HTML5': 'Semantic HTML and modern web standards',
    'CSS3': 'Advanced CSS including flexbox, grid, and animations',
    'Git': 'Version control and collaborative development',
    'Responsive Design': 'Fluid layouts that work across all devices',
    'UI/UX': 'User-centered design principles and intuitive interfaces'
  }
  return descriptions[skillName] || 'Skill description not available.'
}

export default Skills

