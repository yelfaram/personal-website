import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { GlobeDemo } from "@/components/ui/globe";
import { GridPatternDemo } from "@/components/ui/grid-pattern";
import { IconCloudDemo } from "@/components/ui/icon-cloud";
import { ExperienceTreeDemo } from "@/components/ui/experience-tree";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Youssef Elfaramawy";
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 flex items-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative">
        <GridPatternDemo />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            {/* Left side - Hero content */}
            <div className="text-left">
              {/* <div className="mb-8">
                <div className="w-32 h-40 mb-6 rounded-xl bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-4xl font-bold text-slate-600 dark:text-slate-300">
                  Photo
                </div>
              </div> */}

              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Youssef Elfaramawy
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
                Full Stack Developer passionate about building exceptional
                digital experiences
              </p>

              <div className="flex flex-col items-center w-full lg:w-fit">
                {/* Button Row */}
                <div className="flex gap-4">
                  <Link to="/projects">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200"
                    >
                      View My Work
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                </div>
                {/* Centered scroll arrow */}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={scrollToAbout}
                    className="animate-bounce text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50 transition-colors p-4"
                  >
                    <ChevronDown size={48} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Globe component */}
            <div className="flex items-start justify-center pb-5">
              <GlobeDemo />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 pb-32 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I'm a passionate developer with experience in modern web
              technologies. I love creating solutions that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="h-96 max-w-full overflow-hidden">
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
                <CardDescription>
                  Technologies I work with regularly
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-64 max-w-full">
                <div className="max-w-full overflow-hidden">
                  <IconCloudDemo />
                </div>
              </CardContent>
            </Card>

            <Card className="h-96 max-w-full overflow-hidden">
              <CardHeader>
                <CardTitle>Education & Experience</CardTitle>
                <CardDescription>
                  Academic background and professional experience
                </CardDescription>
              </CardHeader>
              <CardContent className="h-64 overflow-y-auto max-w-full">
                <ExperienceTreeDemo />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
