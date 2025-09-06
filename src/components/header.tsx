"use client";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

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
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-1 z-50 w-full px-4">
        <div
          className="mx-auto mt-4 flex h-[80px] w-full max-w-full
            items-right justify-end px-6 bg-main/80
            border-4 border-border shadow-shadow"
        >
          {/* Logo */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-base lg:text-lg space-x-6">
            <NavLinks />
            <div className="flex items-center gap-4">
              <Button variant={"neutral"} className="bg-secondary/80">
                Get in Touch!
              </Button>

              <Button variant="neutral" size="icon" className="bg-secondary/80" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun /> : <Moon />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-[var(--nb-peach)] border-2 border-border shadow-[4px_4px_0px_0px_var(--border)]"
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
              <Button className="w-full text-center text-lg bg-[var(--nb-peach)]">
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
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-3 py-1 font-bold text-foreground rounded-base 
          border-2 border-transparent hover:border-border
          transition-all duration-200 ease-out"
        >
          {link.label}
        </Link>
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
        <Link
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
        </Link>
      ))}
    </div>
  );
}

export default Header;
