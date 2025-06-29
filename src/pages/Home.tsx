import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'HTML/CSS',
    'Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Express.js'
  ]

  const achievements = [
    '50+ Projects Completed',
    '3+ Years Experience', 
    '20+ Happy Clients',
    '100% Satisfaction Rate'
  ]

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero content */}
            <div className="text-left">
              <div className="mb-8">
                <div className="w-32 h-40 mb-6 rounded-xl bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-4xl font-bold text-slate-600 dark:text-slate-300">
                  Photo
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
                Full Stack Developer passionate about building exceptional digital experiences
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200">
                    View My Work
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Placeholder for component */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">
                <p className="text-lg">Component Placeholder</p>
              </div>
            </div>
          </div>
          
          {/* Centered scroll arrow */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={scrollToAbout}
              className="animate-bounce text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I'm a passionate developer with experience in modern web technologies. 
              I love creating solutions that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
                <CardDescription>
                  Technologies I work with regularly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Achievements</CardTitle>
                <CardDescription>
                  Professional milestones and highlights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="flex items-center gap-2 mx-auto transform hover:scale-105 transition-all duration-200 hover:shadow-md">
              <Download size={16} />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex justify-center space-x-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com"
                 className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
              © 2024 Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home