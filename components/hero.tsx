"use client";
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDownIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/50">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi, I'm Gulam Mohammad
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            A frontend developer passionate about crafting interactive user experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild>
              <a href="#portfolio">
                View My Work <ArrowDownIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/images/MyProfile.jpg"
              alt="Gulam Mohammad"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

