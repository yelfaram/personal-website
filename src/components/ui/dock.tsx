"use client";

import { Home, Mail, Download, Linkedin, Github } from "lucide-react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  email: (props: IconProps) => <Mail {...props} />,
  linkedin: (props: IconProps) => <Linkedin {...props} />,
  github: (props: IconProps) => <Github {...props} />,
};

// Footer Section
export function DockDemo() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const DATA = {
    navbar: [
      {
        path: "/",
        icon: Home,
        label: "Home",
        onClick: () => {
          navigate("/");
          scrollToTop();
        },
      },
      {
        path: "#",
        icon: Download,
        label: "View Resume",
        onClick: () => {
          // Replace with your actual resume file path (here its downloading it make it a view)
          const link = document.createElement("a");
          link.href = "/resume.pdf";
          link.download = "resume.pdf";
          link.click();
        },
      },
    ],
    contact: {
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/yelfaram",
          icon: Icons.github,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/youssefelfaramawy",
          icon: Icons.linkedin,
        },
        email: {
          name: "Send Email",
          url: "mailto:yelfaram@gmail.com",
          icon: Icons.email,
        },
      },
    },
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={item.onClick}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-primary/20 hover:text-primary dark:hover:bg-primary/60 dark:hover:text-primary-foreground transition-all duration-200",
                      location.pathname === item.path
                        ? "bg-primary/30 text-primary dark:bg-primary/40"
                        : ""
                    )}
                  >
                    <item.icon className="size-4" />
                  </button>
                </TooltipTrigger>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-primary/20 hover:text-primary dark:hover:bg-primary/60 dark:hover:text-primary-foreground transition-all duration-200"
                    )}
                  >
                    <social.icon className="size-4" />
                  </a>
                </TooltipTrigger>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle className="rounded-full" />
              </TooltipTrigger>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
