import React from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
  disableLiveDemo?: boolean;
  disableCode?: boolean;
  liveDemoTooltip?: string;
  codeTooltip?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  category = "Side Project",
  disableLiveDemo = false,
  disableCode = false,
  liveDemoTooltip,
  codeTooltip,
}) => {
  return (
    <div className="bg-main/80 border-4 border-border shadow-[8px_8px_0px_0px_#000] rounded-none p-6 hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:z-10 transition-all duration-200 ease-out flex flex-col h-full relative z-10">
      {/* Category Badge */}
      <div className="text-sm text-gray-800 mb-2 font-medium">{category}</div>

      {/* Project Title */}
      <h3 className="text-xl font-bold text-black mb-3">{title}</h3>

      {/* Project Description */}
      <p className="text-black text-sm mb-4 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-black text-white text-xs font-medium border-2 border-border rounded-none"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons - Always at bottom */}
      <TooltipProvider>
        <div className="flex gap-3 mt-auto">
          {/* Live Demo */}
          {(liveUrl || disableLiveDemo) && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex-1">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full flex items-center justify-center gap-2"
                    disabled={disableLiveDemo || !liveUrl}
                    asChild={!!liveUrl && !disableLiveDemo}
                  >
                    {liveUrl && !disableLiveDemo ? (
                      <Link
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Link>
                    ) : (
                      <>
                        <ExternalLink size={16} />
                        Live Demo
                      </>
                    )}
                  </Button>
                </div>
              </TooltipTrigger>
              {disableLiveDemo && liveDemoTooltip && (
                <TooltipContent>
                  <p>{liveDemoTooltip}</p>
                </TooltipContent>
              )}
            </Tooltip>
          )}

          {/* Code Button */}
          {(githubUrl || disableCode) && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex-1">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full flex items-center justify-center gap-2"
                    disabled={disableCode || !githubUrl}
                    asChild={!!githubUrl && !disableCode}
                  >
                    {githubUrl && !disableCode ? (
                      <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Code
                      </Link>
                    ) : (
                      <>
                        <Github size={16} />
                        Code
                      </>
                    )}
                  </Button>
                </div>
              </TooltipTrigger>
              {disableCode && codeTooltip && (
                <TooltipContent>
                  <p>{codeTooltip}</p>
                </TooltipContent>
              )}
            </Tooltip>
          )}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default ProjectCard;
