'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react'

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce website with product filtering, cart functionality, and secure checkout.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue", "Vuex", "Tailwind CSS", "Node.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "An interactive dashboard for managing tasks, projects, and team collaboration.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Redux", "Material-UI", "Firebase"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A mobile-friendly weather application with real-time updates and 5-day forecasts.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["JavaScript", "React Native", "OpenWeatherMap API"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  }
];

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={projects[currentIndex].image || "/placeholder.svg"}
                      alt={projects[currentIndex].title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{projects[currentIndex].title}</h3>
                      <p className="text-muted-foreground mb-4">{projects[currentIndex].description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {projects[currentIndex].technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button asChild variant="outline" size="sm">
                        <a href={projects[currentIndex].liveLink} target="_blank" rel="noopener noreferrer">
                          Live Demo <ExternalLinkIcon className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href={projects[currentIndex].githubLink} target="_blank" rel="noopener noreferrer">
                          GitHub <GithubIcon className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2"
            onClick={prevProject}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2"
            onClick={nextProject}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects

