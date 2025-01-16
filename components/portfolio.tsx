'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce website with product filtering, cart functionality, and secure checkout.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['Vue', 'Vuex', 'Tailwind CSS', 'Node.js'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'Web App'
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'An interactive dashboard for managing tasks, projects, and team collaboration.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['React', 'Redux', 'Material-UI', 'Firebase'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'Web App'
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A mobile-friendly weather application with real-time updates and 5-day forecasts.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['JavaScript', 'React Native', 'OpenWeatherMap API'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'Mobile App'
  },
  // Add more projects as needed
]

const Portfolio = () => {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter) || project.category === filter)

  return (
    <section id="portfolio" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>
        <div className="flex justify-center space-x-2 mb-8">
          <Button 
            variant={filter === 'All' ? 'default' : 'outline'}
            onClick={() => setFilter('All')}
          >
            All
          </Button>
          <Button 
            variant={filter === 'Web App' ? 'default' : 'outline'}
            onClick={() => setFilter('Web App')}
          >
            Web Apps
          </Button>
          <Button 
            variant={filter === 'Mobile App' ? 'default' : 'outline'}
            onClick={() => setFilter('Mobile App')}
          >
            Mobile Apps
          </Button>
          <Button 
            variant={filter === 'Vue' ? 'default' : 'outline'}
            onClick={() => setFilter('Vue')}
          >
            Vue
          </Button>
          <Button 
            variant={filter === 'React' ? 'default' : 'outline'}
            onClick={() => setFilter('React')}
          >
            React
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLinkIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub <GithubIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

