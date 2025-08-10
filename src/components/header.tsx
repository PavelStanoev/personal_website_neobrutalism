"use client";
import React, { useEffect, useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import { Moon } from "lucide-react";

const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className="sticky top-4 z-50 w-full px-4">
        <div
          className={twMerge(
            `mx-auto mt-4 flex h-[80px] w-full max-w-full
            items-center justify-between px-6 transition-transform
            duration-300 ease-in-out transform bg-secondary-background
            border-4 border-border shadow-shadow`,
            showNav ? "translate-y-0" : "-translate-y-[calc(100%+40px)]"
          )}
        >
          {/* Logo */}
          <h1
            className="text-3xl font-heading tracking-tight text-foreground
            transform -rotate-2 hover:rotate-0 transition-transform
            duration-300 min-w-[80px] xs:min-w-[100px] lg:text-5xl"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrolltoHash("home");
              }}
            >
              PS
            </a>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-base lg:text-lg space-x-6">
            <NavLinks />
            <div className="flex items-center gap-4">
              <Button variant={"neutral"}>Get in Touch!</Button>

              <Button variant="neutral" size="icon">
                <Moon></Moon>{" "}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transform hover:-rotate-3 transition-transform
              bg-main border-2 border-border shadow-[4px_4px_0px_0px_var(--border)]"
            >
              <div className="w-6 h-0.5 bg-foreground mb-1"></div>
              <div className="w-6 h-0.5 bg-foreground mb-1"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[120px] z-50 w-full px-4" ref={menuRef}>
          <div
            className="w-full p-4 transform bg-secondary-background
            border-4 border-border shadow-shadow"
          >
            <MobileNavLinks setIsOpen={setIsOpen} />
            <div className="mt-4 p-2">
              <Button className="w-full text-center text-lg transform hover:rotate-2 transition-transform">
                Get in Touch!
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function NavLinks() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="px-3 py-1 font-bold text-foreground rounded-base 
          border-2 border-transparent hover:border-border
          transition-all duration-200 ease-out"
          onClick={(e) => {
            if (link.href.startsWith("#")) {
              e.preventDefault();
              scrolltoHash(link.href.substring(1));
            }
          }}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}

function MobileNavLinks({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
  ];

  return (
    <div className="flex flex-col space-y-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="p-3 text-center text-lg font-bold 
          bg-main text-main-foreground border-2 border-border 
          shadow-[4px_4px_0px_0px_var(--border)]
          hover:shadow-[6px_6px_0px_0px_var(--border)] hover:-translate-x-1 hover:-translate-y-1
          transform transition-all duration-200 ease-out"
          onClick={(e) => {
            if (link.href.startsWith("#")) {
              e.preventDefault();
              scrolltoHash(link.href.substring(1));
            }
            setIsOpen(false);
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default Header;
