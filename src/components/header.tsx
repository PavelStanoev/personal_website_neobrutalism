"use client";
import React from "react";
import { Button } from "./ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="sticky top-1 z-50 w-full">
        <div
          className="mx-auto mt-4 flex h-[80px] w-full max-w-full
            items-right justify-end px-4 md:px-12 bg-main/80
            border-4 border-border shadow-shadow"
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-base lg:text-lg space-x-6">
            <NavLinks />
            <div className="flex items-center gap-4">
              <Button variant={"secondary"}>Get in Touch!</Button>

              <Button
                variant="secondary"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun /> : <Moon />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="secondary">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <MobileNavItems />
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer flex justify-center">
                  Get in Touch!
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer flex justify-center"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      Dark Mode
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
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
          className="px-3 py-1 font-semibold  rounded-base 
          border-2 border-transparent hover:border-border dark:hover:border-white
          transition-all duration-200 ease-out"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

function MobileNavItems() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <>
      {links.map((link) => (
        <DropdownMenuItem
          key={link.href}
          className="flex justify-center"
          asChild
        >
          <Link href={link.href} className="w-full cursor-pointer">
            {link.label}
          </Link>
        </DropdownMenuItem>
      ))}
    </>
  );
}

export default Header;
