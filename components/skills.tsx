'use client'

import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Vue', level: 90 },
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Vuetify', level: 85 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'Git', level: 85 },
  { name: 'Responsive Design', level: 90 },
  { name: 'UI/UX', level: 80 }
]

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
              {hoveredSkill === skill.name && (
                <motion.div 
                  className="absolute top-full left-0 mt-2 p-2 bg-popover text-popover-foreground rounded shadow-lg text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
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
    'Vue': 'Proficient in building scalable and maintainable applications using Vue.js and its ecosystem.',
    'React': 'Experienced in developing dynamic user interfaces with React and related libraries.',
    'JavaScript': 'Expert in modern JavaScript, including ES6+ features and asynchronous programming.',
    'Tailwind CSS': 'Skilled in rapid UI development using Tailwind CSS utility-first approach.',
    'Vuetify': 'Proficient in creating material design interfaces with Vuetify component framework.',
    'HTML5': 'Strong knowledge of semantic HTML and modern web standards.',
    'CSS3': 'Advanced CSS skills, including flexbox, grid, and animations.',
    'Git': 'Experienced in version control and collaborative development using Git.',
    'Responsive Design': 'Expert in creating fluid, responsive layouts that work across all devices.',
    'UI/UX': 'Knowledgeable in user-centered design principles and creating intuitive interfaces.'
  }
  return descriptions[skillName] || 'Skill description not available.'
}

export default Skills

