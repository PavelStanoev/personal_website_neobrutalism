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
      description: "A revamped version of my portfolio styled neobrutalisticly",
      technologies: ["Next.js", "Tailwind CSS", "Neobrutalism"],
      githubUrl:
        "https://github.com/PavelStanoev/personal_website_neobrutalism",
      category: "Web page",
      disableLiveDemo: true,
      liveDemoTooltip: "You're already viewing this site!",
    },
    {
      title: "Linear regression model",
      description: "Linear regression model on work absenteeism.",
      technologies: ["Python", "Jupiter", "MySQL", "Tableau"],
      disableLiveDemo: true,
      liveDemoTooltip: "The project doesn't have preview",
      githubUrl: "https://github.com/PavelStanoev/Data-Science-Project-",
      category: "Data Science",
    },
    {
      title: "My Portfolio v1",
      description:
        "First version of my website, first steps in my frontend journey",
      technologies: ["React", "Vite", "Mantine"],
      disableLiveDemo: true,
      liveDemoTooltip: "I had to move the project to get my domain",
      githubUrl: "https://github.com/PavelStanoev/personal_website",
      category: "Web page",
    },
    {
      title: "Classification on Heart Failure",
      description: "Supervised models on heart failure.",
      technologies: ["Python"],
      disableLiveDemo: true,
      liveDemoTooltip: "The project doesn't have preview",
      githubUrl:
        "https://github.com/PavelStanoev/Heart-Failure-Classification---Regression-and-SVM",
      category: "Data Science",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1 pt-8 md:pt-10 pb-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
          <p className="text-foreground/70">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        {/* Projects Display */}

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
                  <div className="h-full px-1">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      category={project.category}
                      disableLiveDemo={project.disableLiveDemo}
                      disableCode={project.disableCode}
                      liveDemoTooltip={project.liveDemoTooltip}
                      codeTooltip={project.codeTooltip}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
