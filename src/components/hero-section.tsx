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
          "[background-position:right_top,right_top]"
        )}
      />

      {/* Radial gradient for faded look at edges */}
      <div className="pointer-events-none absolute inset-0 -left-4 -right-4 md:-left-12 md:-right-12 z-1 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

      {/* Hero Content */}
      <section className="flex-1 py-16 px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div
                className="text-2xl font-bold capitalize min-h-8 text-blue-600"
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

              <h1 className="text-3xl lg:text-4xl font-heading text-foreground">
                I'm{" "}
                <span className="relative px-2 sm:mr-2 mr-0 md:[&_svg]:size-[45px] sm:[&_svg]:size-7 rounded-base border-1 border-border/20 dark:border-border/70 bg-secondary/30">
                  Pavel Stanoev
                  <Star9
                    className="absolute sm:block hidden md:-bottom-5 md:-right-5 -bottom-2.5 -right-2.5 "
                    color="var(--secondary)"
                    strokeWidth={2}
                    stroke={"black"}
                  ></Star9>
                  <Star9
                    className="absolute sm:block hidden md:-top-5 md:-left-5 -top-2.5 -left-2.5"
                    color="var(--secondary)"
                    strokeWidth={2}
                    stroke={"black"}
                  ></Star9>
                </span>
              </h1>
            </div>

            <p className="text-base text-foreground leading-relaxed">
              Based in Bulgaria, I'm a Fullstack Developer with a focus on
              backend development and a strong interest in web technologies. I
              enjoy working with data, designing efficient systems, and building
              engaging digital experiences end to end.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-base border-2 border-transparent hover:border-border p-1 transition-transform"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.animation =
                    "shake 300ms";
                }}
                onAnimationEnd={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.animation = "";
                }}
              >
                <Github className="size-6" />
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-base border-2 border-transparent hover:border-border p-1 transition-transform"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.animation =
                    "shake 300ms";
                }}
                onAnimationEnd={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.animation = "";
                }}
              >
                <Linkedin className="size-6" />
              </Link>
            </div>
            <Button
              size="lg"
              className="w-full lg:w-auto bg-secondary/80"
              variant="neutral"
            >
              <span className="text-foreground">Get in touch</span>
            </Button>
          </div>

          {/* Right Side - Polaroid Card */}
          <div className="flex justify-center">
            <PolaroidCard imageUrl="/pavel.png" username="@pavelstanoev" />
          </div>
        </div>
      </section>

      {/* Skills Marquee at the end of hero section */}
      <div className="relative z-10 -mx-6 md:-mx-12 mb-6">
        <Marquee
          skills={[
            { text: "Python", Icon: SiPython, color: "text-blue-500" },
            {
              text: "JavaScript",
              Icon: SiJavascript,
              color: "text-yellow-500",
            },
            {
              text: "Tailwind CSS",
              Icon: SiTailwindcss,
              color: "text-cyan-500",
            },
            { text: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
            { text: "Git", Icon: SiGit, color: "text-orange-600" },
            {
              text: "Next.js",
              Icon: SiNextdotjs,
              color: "text-black dark:text-white",
            },
            { text: "React", Icon: SiReact, color: "text-cyan-400" },
            { text: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-700" },
            { text: "HTML", Icon: SiHtml5, color: "text-orange-500" },
            { text: "Node.js", Icon: SiNodedotjs, color: "text-green-600" },
            { text: "Swagger", Icon: SiSwagger, color: "text-green-500" },
            { text: "Hadoop", Icon: SiApachehadoop, color: "text-yellow-600" },
            { text: "Spark", Icon: SiApachespark, color: "text-orange-400" },
            {
              text: "OpenShift",
              Icon: SiRedhatopenshift,
              color: "text-red-600",
            },
            { text: "Bash", Icon: SiGnubash, color: "text-gray-700" },
            { text: "Jira", Icon: SiJira, color: "text-blue-500" },
            {
              text: "Playwright",
              Icon: FaTheaterMasks,
              color: "text-green-600",
            },
            { text: "Cucumber", Icon: SiCucumber, color: "text-green-500" },
            { text: "LaTeX", Icon: SiLatex, color: "text-blue-800" },
            { text: "Tableau", Icon: SiTableau, color: "text-blue-400" },
          ]}
        />
      </div>
    </div>
  );
});

export default HeroSection;
