import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
                <p className="text-muted-foreground">
                  With over 3 years of experience in frontend development, I've had the opportunity to work on diverse projects, honing my skills in creating intuitive and responsive user interfaces. My journey has been marked by continuous learning and adapting to the ever-evolving landscape of web technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Vue</Badge>
                  <Badge>React</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Vuetify</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>Git</Badge>
                  <Badge>Responsive Design</Badge>
                  <Badge>UI/UX</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Hobbies & Interests</h3>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, or diving into a good book on technology and innovation. I'm also passionate about contributing to open-source projects and mentoring aspiring developers.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Personal Philosophy</h3>
                <p className="text-muted-foreground">
                  I believe in the power of technology to solve real-world problems and enhance user experiences. My approach to development is centered on creating clean, efficient, and maintainable code that not only meets but exceeds client expectations. I'm always excited to take on new challenges and push the boundaries of what's possible in web development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

