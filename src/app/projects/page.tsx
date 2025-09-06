import Header from "@/components/header";
import ProjectCard from "@/components/project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Projects() {
  const demoProjects = [
    {
      title: "My Portfolio v2",
      description:
        "A revamped version of my portfolio to showcase my skills and projects.",
      technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Side Project",
    },
    {
      title: "E-commerce Platform",
      description:
        "A combination of a CMS and Frontend web application for a product digital storefront.",
      technologies: ["Next.js", "Payload CMS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Learning Project",
    },
    {
      title: "Task Management App",
      description:
        "Built with Next.js, TypeScript and Tailwind CSS to track and display real-time task progress and stats.",
      technologies: ["Next.js", "GraphQL", "Daisy UI", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Side Project",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides real-time weather data and forecasts for multiple locations.",
      technologies: ["React", "TypeScript", "OpenWeather API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Learning Project",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with user authentication and message history.",
      technologies: ["Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Side Project",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1 pt-8 md:pt-10 pb-10">
        <div className="mb-2 max-w-[880px]">
          <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
          <p className="text-foreground/70">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        {/* Projects Display */}
        {demoProjects.length <= 3 ? (
          // Grid layout for 3 or fewer projects
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                category={project.category}
              />
            ))}
          </div>
        ) : (
          // Carousel for more than 3 projects - shows 2 cards per view
          <div className="w-full flex justify-center mb-12">
            <Carousel
              className="w-full max-w-full"
              opts={{
                align: "start",
                slidesToScroll: 2,
                containScroll: "trimSnaps",
              }}
            >
              <CarouselContent className="pt-2 pb-10">
                {demoProjects.map((project, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2">
                    <div className="h-full p-2">
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        liveUrl={project.liveUrl}
                        githubUrl={project.githubUrl}
                        category={project.category}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
