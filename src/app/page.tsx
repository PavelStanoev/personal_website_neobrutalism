import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import {
  Github,
  Linkedin,
  Database,
  Triangle,
  Map,
  Container,
  GitBranch,
  FileCode2,
  Code,
  FileText,
  Layers,
  Compass,
  Boxes,
} from "lucide-react";

export default function Home() {
  // Skills array for marquee
  const skills = [
    { text: "ArcGIS", Icon: Map },
    { text: "QGIS", Icon: Compass },
    { text: "OpenLayers", Icon: Layers },
    { text: "Leaflet", Icon: Map },
    { text: "Python", Icon: Code },
    { text: "JavaScript", Icon: FileCode2 },
    { text: "HTML", Icon: FileText },
    { text: "TypeScript", Icon: Code },
    { text: "Angular", Icon: Triangle },
    { text: "PostGIS", Icon: Database },
    { text: "Version Control", Icon: GitBranch },
    { text: "Docker", Icon: Container },
    { text: "Git", Icon: GitBranch },
  ];

  return (
    <div className="flex flex-col h-full">
      <Header />

      {/* Main content area */}
      <div className="flex-1">
        <HeroSection />
      </div>

      {/* Marquee positioned near bottom */}
      <div className="border-t-2 border-border py-3 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {skills.concat(skills).map((skill, id) => (
            <div className="flex items-center mx-6 flex-shrink-0" key={id}>
              <skill.Icon className="text-2xl mr-2" />
              <span className="text-lg font-heading">{skill.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border line */}
      <div className="border-b-2 border-border"></div>
    </div>
  );
}
