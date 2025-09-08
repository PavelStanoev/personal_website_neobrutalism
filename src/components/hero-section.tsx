"use client";

import React, { memo } from "react";
import PolaroidCard from "./polaroid-card";
import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import Marquee from "./ui/marquee";
import Link from "next/link";
import {
  SiPython,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiHtml5,
  SiNodedotjs,
  SiSwagger,
  SiApachehadoop,
  SiApachespark,
  SiRedhatopenshift,
  SiGnubash,
  SiJira,
  SiCucumber,
  SiLatex,
  SiTableau,
} from "react-icons/si";
import { FaTheaterMasks } from "react-icons/fa";
import Star9 from "./stars/s9";

const HeroSection = memo(function HeroSection() {
  return (
    <div className="flex flex-col h-full relative">
      {/* Grid Background - positioned to start below header */}
      <div
        className={cn(
          "absolute inset-0 -left-4 -right-4 md:-left-12 md:-right-12 z-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#00000014_1px,transparent_1px),linear-gradient(to_bottom,#00000014_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]",
          "[background-position:right_top,right_top]"
        )}
      />

      {/* Radial gradient for faded look at edges */}
      <div className="pointer-events-none absolute inset-0 -left-4 -right-4 md:-left-12 md:-right-12 z-1 bg-background dark:bg-secondary-background [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>

      {/* Hero Content */}
      <section className="flex-1 py-6 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
          {/* Text Content - Centered on small/medium, left on large */}
          <div className="space-y-4 order-1 lg:order-1 text-center lg:text-left">
            <div className="space-y-3">
              <div
                className="text-xl sm:text-2xl font-bold capitalize min-h-6 sm:min-h-8 text-chart-1 dark:text-chart-3"
                suppressHydrationWarning
              >
                <Typewriter
                  options={{
                    strings: [
                      "hi",
                      "hola",
                      "bonjour",
                      "hallo",
                      "ciao",
                      "olá",
                      "привет",
                      "こんにちは",
                      "안녕하세요",
                      "你好",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 150,
                    deleteSpeed: 100,
                    wrapperClassName: "typewriter-wrapper",
                    cursorClassName: "typewriter-cursor",
                  }}
                />
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-foreground leading-tight">
                I'm{" "}
                <span className="relative px-2 sm:mr-2 mr-0 md:[&_svg]:size-[45px] sm:[&_svg]:size-7 rounded-base border-1 border-border/20 dark:border-border/70 bg-main/30">
                  Pavel Stanoev
                  <Star9
                    className="absolute sm:block hidden md:-bottom-5 md:-right-5 -bottom-2.5 -right-2.5 "
                    color="var(--main)"
                    strokeWidth={2}
                    stroke={"black"}
                  ></Star9>
                  <Star9
                    className="absolute sm:block hidden md:-top-5 md:-left-5 -top-2.5 -left-2.5"
                    color="var(--main)"
                    strokeWidth={2}
                    stroke={"black"}
                  ></Star9>
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-md mx-auto md:mx-0 md:max-w-none">
              Based in Bulgaria, I'm a Fullstack Developer with a focus on
              backend development and a strong interest in web technologies. I
              enjoy working with data, designing efficient systems, and building
              engaging digital experiences end to end.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-base border-2 border-transparent hover:border-main p-1 transition-transform"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.animation =
                    "shake 300ms";
                }}
                onAnimationEnd={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.animation = "";
                }}
              >
                <Github className="size-5 sm:size-6" />
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-base border-2 border-transparent hover:border-main p-1 transition-transform"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.animation =
                    "shake 300ms";
                }}
                onAnimationEnd={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.animation = "";
                }}
              >
                <Linkedin className="size-5 sm:size-6" />
              </Link>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-auto"
                variant="default"
              >
                <span>Get in touch</span>
              </Button>
            </div>
          </div>

          {/* Image - Below text for small/medium, right side for large */}
          <div className="flex justify-center order-2 lg:order-2">
            <div className="scale-80 sm:scale-90 lg:scale-100">
              <PolaroidCard imageUrl="/pavel.png" username="@pavelstanoev" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee at the end of hero section */}
      <div className="relative z-10 -mx-6 md:-mx-12 mb-6">
        <Marquee
          skills={[
            { text: "Python", Icon: SiPython },
            {
              text: "JavaScript",
              Icon: SiJavascript,
            },
            {
              text: "Tailwind CSS",
              Icon: SiTailwindcss,
            },
            { text: "TypeScript", Icon: SiTypescript },
            { text: "Git", Icon: SiGit },
            {
              text: "Next.js",
              Icon: SiNextdotjs,
            },
            { text: "React", Icon: SiReact },
            { text: "PostgreSQL", Icon: SiPostgresql },
            { text: "HTML", Icon: SiHtml5 },
            { text: "Node.js", Icon: SiNodedotjs },
            { text: "Swagger", Icon: SiSwagger },
            { text: "Hadoop", Icon: SiApachehadoop },
            { text: "Spark", Icon: SiApachespark },
            {
              text: "OpenShift",
              Icon: SiRedhatopenshift,
            },
            { text: "Bash", Icon: SiGnubash },
            { text: "Jira", Icon: SiJira },
            {
              text: "Playwright",
              Icon: FaTheaterMasks,
            },
            { text: "Cucumber", Icon: SiCucumber },
            { text: "LaTeX", Icon: SiLatex },
            { text: "Tableau", Icon: SiTableau },
          ]}
        />
      </div>
    </div>
  );
});

export default HeroSection;
