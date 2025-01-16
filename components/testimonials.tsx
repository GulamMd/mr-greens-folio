'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'Gulam is an exceptional frontend developer. His attention to detail and ability to translate designs into functional, responsive websites is impressive.',
    avatar: '/placeholder.svg?height=100&width=100'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Project Manager, WebSolutions',
    content: 'Working with Gulam was a pleasure. He consistently delivered high-quality code and was always willing to go the extra mile to ensure project success.',
    avatar: '/placeholder.svg?height=100&width=100'
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'Lead Designer, CreativeCo',
    content: 'Gulam\'s ability to bring designs to life is remarkable. His technical skills combined with an eye for design make him a valuable asset to any project.',
    avatar: '/placeholder.svg?height=100&width=100'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
        <div className="relative">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <p className="text-lg mb-4">{testimonials[currentIndex].content}</p>
                <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </CardContent>
          </Card>
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

