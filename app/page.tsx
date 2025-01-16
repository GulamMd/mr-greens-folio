import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'
import Blog from '@/components/blog'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import CV from '@/components/cv'
import FeaturedProjects from '@/components/featured-projects'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <CV />
      <Portfolio />
      <Blog />
      <Skills />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  )
}

