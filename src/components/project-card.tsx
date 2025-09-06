import React from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  category = "Side Project",
}) => {
  return (
    <div className="bg-white border-4 border-border shadow-[8px_8px_0px_0px_#000] rounded-none p-6 hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:z-10 transition-all duration-200 ease-out flex flex-col h-full relative z-10">
      {/* Category Badge */}
      <div className="text-sm text-gray-600 mb-2 font-medium">{category}</div>

      {/* Project Image */}
      {image && (
        <div className="mb-4 border-2 border-border bg-gray-100 h-48 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Project Title */}
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>

      {/* Project Description */}
      <p className="text-foreground text-sm mb-4 leading-relaxed flex-grow">
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
      <div className="flex gap-3 mt-auto">
        {liveUrl && (
          <Button
            variant="neutral"
            size="sm"
            className="flex-1 flex items-center justify-center gap-2 bg-secondary/80"
            asChild
          >
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Live Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button
            variant="neutral"
            size="sm"
            className="flex-1 flex items-center justify-center gap-2 bg-secondary/80"
            asChild
          >
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              Code
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
