import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, Play, X } from "lucide-react";
import { useState, useEffect } from "react";

// Player Substitution System
import pssConceptual from "../assets/images/pss/pss-conceptual.png";
import pssGameScoreModelSim from "../assets/images/pss/pss-game-score-model.png";
import pssPlayerOneModelSim from "../assets/images/pss/pss-player-1-model.png";
import pssPlayerTwoModelSim from "../assets/images/pss/pss-player-2-model.png";
import pssSubstitutionLogicModelSim from "../assets/images/pss/pss-sub-logic-model.png";
// Football Player Interaction
import fpiConceptual from "../assets/images/fpi/fpi-conceptual.png";
import fpiNoObstaclesThumbnail from "../assets/images/fpi/fpi-no-obstacles-thumbnail.png";
import fpiWithObstaclesThumbnail from "../assets/images/fpi/fpi-obstacles-thumbnail.png";
import fpiWithObstaclesZonesThumbnail from "../assets/images/fpi/fpi-obstacles-zones-thumbnail.png";
import fpiWithObstaclesZonesRolesThumbnail from "../assets/images/fpi/fpi-obstacles-zones-roles-thumbnail.png";
import fpiNoObstacles from "../assets/videos/fpi/fpi-no-obstacles.webm";
import fpiWithObstacles from "../assets/videos/fpi/fpi-obstacles.webm";
import fpiWithObstaclesZones from "../assets/videos/fpi/fpi-obstacles-zones.webm";
import fpiWithObstaclesZonesRoles from "../assets/videos/fpi/fpi-obstacles-zones-roles.webm";
// Network Traffic Simulation
import networkConceptual from "../assets/images/network-simulation/network-simulation-conceptual.png";
import networkTransientDetectionOne from "../assets/images/network-simulation/network-simulation-transient-detection-1.png";
import networkTransientDetectionTwo from "../assets/images/network-simulation/network-simulation-transient-detection-2.png";
import networkTransientDetectionThree from "../assets/images/network-simulation/network-simulation-transient-detection-3.png";
import networkTerminalConfig from "../assets/images/network-simulation/network-simulation-config-terminal.png";
import networkInputAnalysis from "../assets/images/network-simulation/network-simulation-input-analysis.png";
import networkQQPlot from "../assets/images/network-simulation/network-simulation-qq-plot.png";
import networkThroughput from "../assets/images/network-simulation/network-simulation-throughput.png";
import networkResponseTime from "../assets/images/network-simulation/network-simulation-response-time.png";
// Angular Ecommerce
import ecommerceHome from "../assets/images/ecommerce/ecommerce-home.png";
import ecommerceProductsOne from "../assets/images/ecommerce/ecommerce-products-1.png";
import ecommerceProductsTwo from "../assets/images/ecommerce/ecommerce-products-2.png";
import ecommerceProductsThree from "../assets/images/ecommerce/ecommerce-products-3.png";
import ecommericeCart from "../assets/images/ecommerce/ecommerce-cart.png";
// Token Tracker
import tokentrackerChat from "../assets/images/token-tracker/token-tracker-chat.png";
import tokentrackerObservability from "../assets/images/token-tracker/token-tracker-observability.png";
import tokentrackerGrafana from "../assets/images/token-tracker/token-tracker-grafana.png";
// VanLife
import vanLifeHome from "../assets/images/van-life/van-life-home.png";
import vanLifeAbout from "../assets/images/van-life/van-life-about.png";
import vanLifeLogin from "../assets/images/van-life/van-life-login.png";
import vanLifeVans from "../assets/images/van-life/van-life-vans.png";
import vanLifeRentals from "../assets/images/van-life/van-life-my-rentals.jpg";
import vanLifeReviews from "../assets/images/van-life/van-life-my-rentals-reviews.png";
import vanLifeDashboard from "../assets/images/van-life/van-life-dashboard.png";
import vanLifeDashboardIncome from "../assets/images/van-life/van-life-dashboard-income.png";
import vanLifeDashboardVans from "../assets/images/van-life/van-life-listed-vans.jpg";
import vanLifeDashboardAddVans from "../assets/images/van-life/van-life-listed-vans-add.png";
import vanLifeDashboardReviews from "../assets/images/van-life/van-life-dashboard-reviews.png";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  videos: { src: string; poster: string }[];
  githubUrl: string;
  featured: boolean;
}

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Youssef Elfaramawy";
  }, []);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [selectedMedia, setSelectedMedia] = useState<string>("");

  const projects: Project[] = [
    {
      id: 1,
      title: "Cell-DEVS Football Player Interaction Model (FPI)",
      description:
        "Models football player interactions (passing, dribbling, off-ball movement) in a dynamic Cell-DEVS grid.",
      longDescription:
        "Developed a football player interaction model using Cell-DEVS and Cadmium. The simulation covers passing, dribbling, and off-ball movement within a modular grid. Features include dynamic player states like fatigue and mental sharpness, and added complexity with obstacles, zones, and role-specific behaviors. Successfully scaled from a 3x3 to a 10x10 grid to demonstrate increasing interaction complexity.",
      technologies: [
        "C++",
        "CMake",
        "Cadmium",
        "Cell-DEVS",
        "Cellular Automata",
      ],
      images: [fpiConceptual],
      videos: [
        { src: fpiNoObstacles, poster: fpiNoObstaclesThumbnail },
        { src: fpiWithObstacles, poster: fpiWithObstaclesThumbnail },
        { src: fpiWithObstaclesZones, poster: fpiWithObstaclesZonesThumbnail },
        {
          src: fpiWithObstaclesZonesRoles,
          poster: fpiWithObstaclesZonesRolesThumbnail,
        },
      ],
      githubUrl:
        "https://github.com/yelfaram/Cadmium-Cell-DEVS-Football-Player-Interaction",
      featured: true,
    },
    {
      id: 2,
      title: "DEVS Player Substitution System (PSS)",
      description:
        "Models player substitution logic based on player metrics and game score using DEVS.",
      longDescription:
        "Simulated a player substitution system where a coach makes decisions based on player fatigue, mental state, and time played. The system tracks real-time player metrics and game state to trigger substitutions. Future extensions could include more complex factors like hydration and confidence. Current scope focuses on two players for model clarity.",
      technologies: ["C++", "CMake", "Cadmium", "DEVS"],
      images: [
        pssConceptual,
        pssGameScoreModelSim,
        pssPlayerOneModelSim,
        pssPlayerTwoModelSim,
        pssSubstitutionLogicModelSim,
      ],
      videos: [],
      githubUrl:
        "https://github.com/yelfaram/Cadmium-Player-Substitution-System",
      featured: false,
    },
    {
      id: 3,
      title: "VanLife",
      description:
        "A full-stack van rental web app that connects van owners with renters planning road trips.",
      longDescription:
        "Built a full-stack van rental platform with user authentication, protected dashboards, van listings, rental bookings, and reviews. Created REST APIs using Node.js and Express.js with PostgreSQL for database management. Designed secure session handling for renters and hosts. Hosts can track income, view transaction logs, manage van listings, and read customer reviews. Used React.js on the frontend with hooks, routing, and context management to handle user flows and state.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
      ],
      images: [
        vanLifeHome,
        vanLifeAbout,
        vanLifeLogin,
        vanLifeVans,
        vanLifeRentals,
        vanLifeReviews,
        vanLifeDashboard,
        vanLifeDashboardIncome,
        vanLifeDashboardVans,
        vanLifeDashboardAddVans,
        vanLifeDashboardReviews,
      ],
      videos: [],
      githubUrl: "https://github.com/yelfaram/van-life",
      featured: true,
    },
    {
      id: 4,
      title: "Token Tracker",
      description:
        "Full-stack AI observability demo for LLM responses with real-time monitoring of token usage, latency, and toxicity.",
      longDescription:
        "Developed during a hackathon as part of a 4-person team. This full-stack observability application simulates LLM interactions and tracks key performance and safety metrics in real time. Core features include live monitoring of token usage, latency, toxicity scores, and HTTP request traces. I focused on backend development and set up Docker infrastructure for Prometheus, Tempo, and Grafana integration. The backend uses FastAPI, OpenTelemetry, Detoxify, and Docker, while the frontend features a React-based chat interface with an embedded Grafana dashboard for live data visualization.",
      technologies: [
        "Python",
        "React.js",
        "Vite",
        "FastAPI",
        "OpenTelemetry",
        "Detoxify",
        "Docker",
        "Prometheus",
        "Tempo",
        "Grafana",
        "Hackathon",
      ],
      images: [
        tokentrackerChat,
        tokentrackerObservability,
        tokentrackerGrafana,
      ],
      videos: [],
      githubUrl:
        "https://github.com/yelfaram/AIObservabilityMonitoring_TokenTracker",
      featured: true,
    },
    {
      id: 5,
      title: "Network Traffic Simulation",
      description:
        "Simulates network traffic through firewalls and servers to measure performance and packet loss.",
      longDescription:
        "Simulated packet flow from an external network through a firewall to internal servers. Each node behaves as a queuing system with variable arrival rates, queue capacities, and service rates. Evaluated system performance under different traffic loads, with detailed analysis on throughput, response times, server utilization, and packet loss using statistical methods and confidence intervals.",
      technologies: [
        "Python",
        "Numpy",
        "Pandas",
        "SciPy",
        "Matplotlib",
        "Statistical Analysis",
      ],
      images: [
        networkConceptual,
        networkTransientDetectionOne,
        networkTransientDetectionTwo,
        networkTransientDetectionThree,
        networkTerminalConfig,
        networkInputAnalysis,
        networkQQPlot,
        networkThroughput,
        networkResponseTime,
      ],
      videos: [],
      githubUrl: "N/A",
      featured: false,
    },
    {
      id: 6,
      title: "E-Commerce Dashboard",
      description:
        "Angular dashboard to display, filter, and manage products using observables and Angular services.",
      longDescription:
        "Built an Angular-based e-commerce dashboard connected to a fake store API. Focused on learning Angular fundamentals: services, subjects, observables, and component communication. Features include product listing, sidebar filtering, and cart management, developed across multiple sprints. Used Material-UI for component styling and layout.",
      technologies: [
        "TypeScript",
        "SCSS",
        "HTML",
        "Angular",
        "Material-UI",
        "RxJS",
      ],
      images: [
        ecommerceHome,
        ecommerceProductsOne,
        ecommerceProductsTwo,
        ecommerceProductsThree,
        ecommericeCart,
      ],
      videos: [],
      githubUrl: "https://github.com/yelfaram/ng-ecommerce-dashboard",
      featured: false,
    },
  ];

  const getTechColor = (tech: string) => {
    const languages = [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "CSS",
      "SCSS",
      "HTML",
    ];
    const frameworks = [
      "React.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Angular",
      "RxJS",
      "Vite",
      "Material-UI",
      "Numpy",
      "Pandas",
      "SciPy",
    ];
    const tools = [
      "PostgreSQL",
      "Cadmium",
      "Docker",
      "Prometheus",
      "Tempo",
      "Grafana",
      "OpenTelemetry",
      "Detoxify",
      "Matplotlib",
      "data.world",
      "Geopy",
      "CMake",
    ];
    const misc = ["DEVS", "Cell-DEVS", "Hackathon"];

    if (languages.includes(tech)) {
      return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800";
    } else if (frameworks.includes(tech)) {
      return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800";
    } else if (tools.includes(tech)) {
      return "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800";
    } else if (misc.includes(tech)) {
      return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800";
    }
    return "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-800";
  };

  useEffect(() => {
    setSelectedMedia("");
  }, [selectedProject]);

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card
      className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      <CardHeader>
        <div>
          <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-xl">
            {project.title}
          </CardTitle>
          <CardDescription className="mt-2">
            {project.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          {project.images.length > 0 ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-80 object-cover rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=";
              }}
            />
          ) : (
            <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">
              No Image Available
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className={`text-xs border ${getTechColor(tech)}`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              if (project.githubUrl !== "N/A") {
                window.open(project.githubUrl, "_blank");
              }
            }}
            disabled={project.githubUrl === "N/A"}
          >
            <Github size={14} />
            {project.githubUrl === "N/A" ? "Coming Soon" : "Code"}
          </Button>
          {project.featured && <Badge>Featured</Badge>}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and side projects. Each project
            represents a unique challenge and learning opportunity.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Projects ({projects.length})
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
            >
              Featured ({projects.filter((p) => p.featured).length})
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-background border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                    className="ml-4"
                  >
                    <X size={20} />
                  </Button>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold mb-4">
                      Media Gallery
                    </h3>
                    {selectedProject.images.length > 0 ||
                    selectedProject.videos.length > 0 ? (
                      <>
                        {/* Main Media Display */}
                        <div
                          className={`mb-4 rounded-lg ${
                            selectedMedia && selectedMedia.endsWith(".webm")
                              ? "aspect-[3/4] bg-white"
                              : ""
                          }`}
                        >
                          {selectedMedia ? (
                            selectedMedia.endsWith(".webm") ? (
                              <video
                                controls
                                className="w-full h-full rounded-lg bg-black"
                                src={selectedMedia}
                                muted
                              >
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <img
                                src={selectedMedia}
                                alt="Project media"
                                className="w-full h-full rounded-lg bg-slate-100 dark:bg-slate-800"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src =
                                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1lZGlhIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=";
                                }}
                              />
                            )
                          ) : // Default to first image or video if no media selected
                          selectedProject.images.length > 0 ? (
                            <img
                              src={selectedProject.images[0]}
                              alt="Project main image"
                              className="w-full h-full object-contain rounded-lg bg-slate-100 dark:bg-slate-800"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src =
                                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=";
                              }}
                            />
                          ) : selectedProject.videos.length > 0 ? (
                            <video
                              controls
                              className="w-full h-full rounded-lg bg-black"
                              src={selectedProject.videos[0].src}
                              muted
                            >
                              Your browser does not support the video tag.
                            </video>
                          ) : null}
                        </div>

                        {/* Thumbnail Gallery */}
                        {(selectedProject.images.length > 1 ||
                          selectedProject.videos.length > 0) && (
                          <div className="flex gap-2 overflow-x-auto pb-2">
                            {selectedProject.images.map((image, index) => (
                              <button
                                type="button"
                                key={`image-${index}`}
                                onClick={() => setSelectedMedia(image)}
                                className={`flex-shrink-0 w-20 h-16 rounded-lg border-2 overflow-hidden ${
                                  selectedMedia === image ||
                                  (!selectedMedia && index === 0)
                                    ? "border-blue-500 dark:border-blue-400"
                                    : "border-slate-300 dark:border-slate-600"
                                }`}
                              >
                                <img
                                  src={image}
                                  alt={`Thumbnail ${index + 1}`}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src =
                                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWc8L3RleHQ+PC9zdmc+";
                                  }}
                                />
                              </button>
                            ))}
                            {selectedProject.videos.map((video, index) => (
                              <button
                                type="button"
                                key={`video-${index}`}
                                onClick={() => setSelectedMedia(video.src)}
                                className={`relative flex-shrink-0 w-20 h-16 rounded-lg border-2 overflow-hidden ${
                                  selectedMedia === video.src
                                    ? "border-blue-500 dark:border-blue-400"
                                    : "border-slate-300 dark:border-slate-600"
                                }`}
                              >
                                <img
                                  src={video.poster}
                                  alt={`Video Thumbnail ${index + 1}`}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src =
                                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWc8L3RleHQ+PC9zdmc+";
                                  }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <Play
                                    size={30}
                                    className="text-white opacity-80"
                                  />
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-80 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">
                        No media available
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`border ${getTechColor(tech)}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-4">
                      Project Links
                    </h3>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => {
                          if (selectedProject.githubUrl !== "N/A") {
                            window.open(selectedProject.githubUrl, "_blank");
                          }
                        }}
                        disabled={selectedProject.githubUrl === "N/A"}
                      >
                        <Github size={16} className="mr-2" />
                        {selectedProject.githubUrl === "N/A"
                          ? "Source Code (Coming Soon)"
                          : "View Source Code"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
