import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'
import Blog from '@/components/blog'
import Skills from '@/components/skills'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import CV from '@/components/cv'

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
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

