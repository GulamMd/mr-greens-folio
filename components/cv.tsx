'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DownloadIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
}

type Education = {
  degree: string;
  institution: string;
  year: string;
}

const experiences: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    period: '2021 - Present',
    description: [
      'Lead a team of 5 developers in creating responsive web applications',
      'Implemented state management solutions resulting in a 30% performance boost',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'WebSolutions Co.',
    period: '2019 - 2021',
    description: [
      'Developed and maintained multiple client websites using Vue.js and React',
      'Collaborated with UX designers to implement pixel-perfect designs',
      'Optimized website performance, improving load times by 40%'
    ]
  }
]

const education: Education[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Tech University',
    year: '2019'
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'State University',
    year: '2017'
  }
]

const CV = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  return (
    <section id="cv" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My CV
        </motion.h2>
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button asChild>
            <a href="/path-to-your-cv.pdf" download>
              Download CV <DownloadIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="mb-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                    >
                      {expandedExperience === index ? (
                        <ChevronUpIcon className="h-4 w-4" />
                      ) : (
                        <ChevronDownIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {expandedExperience === index && (
                    <motion.ul 
                      className="mt-2 list-disc list-inside text-sm"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="mb-4"
                >
                  <h4 className="font-medium">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CV

