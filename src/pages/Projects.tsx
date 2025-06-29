import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { ExternalLink, Github, Play } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  images: string[]
  videos?: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart functionality, and secure payment processing through Stripe integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      images: ['/assets/images/ecommerce-1.jpg', '/assets/images/ecommerce-2.jpg'],
      videos: ['/assets/videos/ecommerce-demo.mp4'],
      githubUrl: 'https://github.com/username/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      longDescription: 'A collaborative task management application that allows teams to organize projects, assign tasks, track progress, and communicate in real-time. Built with modern web technologies and socket.io for live updates.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Redis'],
      images: ['/assets/images/taskapp-1.jpg', '/assets/images/taskapp-2.jpg'],
      githubUrl: 'https://github.com/username/taskapp',
      liveUrl: 'https://taskapp-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with data visualization',
      longDescription: 'An interactive weather dashboard that provides real-time weather information, forecasts, and beautiful data visualizations. Features location-based weather, historical data, and customizable widgets.',
      technologies: ['React', 'D3.js', 'Weather API', 'Chart.js'],
      images: ['/assets/images/weather-1.jpg'],
      githubUrl: 'https://github.com/username/weather',
      liveUrl: 'https://weather-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media performance tracking',
      longDescription: 'A comprehensive analytics platform for tracking social media performance across multiple platforms. Includes engagement metrics, audience insights, and automated reporting features.',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Chart.js'],
      images: ['/assets/images/analytics-1.jpg', '/assets/images/analytics-2.jpg'],
      githubUrl: 'https://github.com/username/analytics',
      featured: false
    }
  ]

  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" 
          onClick={() => setSelectedProject(project)}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription className="mt-2">
              {project.description}
            </CardDescription>
          </div>
          {project.featured && (
            <Badge className="ml-2">Featured</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">
            Project Image
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" className="flex items-center gap-1"
                    onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank') }}>
              <Github size={14} />
              Code
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="outline" size="sm" className="flex items-center gap-1"
                    onClick={(e) => { e.stopPropagation(); window.open(project.liveUrl, '_blank') }}>
              <ExternalLink size={14} />
              Live
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and side projects. Each project represents 
            a unique challenge and learning opportunity.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All Projects ({projects.length})
            </Button>
            <Button 
              variant={filter === 'featured' ? 'default' : 'outline'}
              onClick={() => setFilter('featured')}
            >
              Featured ({projects.filter(p => p.featured).length})
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
               onClick={() => setSelectedProject(null)}>
            <div className="bg-white dark:bg-slate-950 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                 onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => setSelectedProject(null)}>
                    ×
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Media</h3>
                    <div className="space-y-4">
                      {selectedProject.images.map((_, index) => (
                        <div key={index} className="w-full h-48 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                          Project Image {index + 1}
                        </div>
                      ))}
                      {selectedProject.videos?.map((_, index) => (
                        <div key={index} className="w-full h-48 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                          <Play size={32} className="text-slate-500 dark:text-slate-400" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-3">Links</h3>
                    <div className="space-y-2">
                      {selectedProject.githubUrl && (
                        <Button variant="outline" className="w-full justify-start"
                                onClick={() => window.open(selectedProject.githubUrl, '_blank')}>
                          <Github size={16} className="mr-2" />
                          View Source Code
                        </Button>
                      )}
                      {selectedProject.liveUrl && (
                        <Button variant="outline" className="w-full justify-start"
                                onClick={() => window.open(selectedProject.liveUrl, '_blank')}>
                          <ExternalLink size={16} className="mr-2" />
                          View Live Project
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects