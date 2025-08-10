"use client";

import React, { memo } from "react";
import PolaroidCard from "./polaroid-card";
import { Github, Linkedin } from "lucide-react";



const HeroSection = memo(function HeroSection() {
  return (
    <div className="flex flex-col h-full">
      {/* Hero Content */}
      <section className="flex-1 py-16 px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            <p className="text-xl font-bold text-blue-600">hi</p>

            <h1 className="text-3xl lg:text-4xl font-heading text-foreground">
              I'm Ronit Jadhav. 👋
            </h1>

            <p className="text-base text-foreground leading-relaxed">
              Based in Germany, I'm a Geospatial Developer and a Software
              Engineer. I love to work with maps, data, and code. I'm passionate
              about open-source, web technologies, and building cool stuff.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ronitjadhav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-border rounded-[5px] hover:bg-main hover:shadow-shadow transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ronitjadhav/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-border rounded-[5px] hover:bg-main hover:shadow-shadow transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Polaroid Card */}
          <div className="flex justify-center lg:justify-end">z
            <PolaroidCard imageUrl="/pavel.png" username="@ronitjadhav" />
          </div>
        </div>
      </section>

      {/* Skills Marquee - using your existing animation */}
      
    </div>
  );
});

export default HeroSection;
