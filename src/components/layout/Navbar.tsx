"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/shared/Container";
import { navigation } from "@/lib/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const anchorItems = navigation.filter((item) =>
        item.href.includes("#")
      );

      const visibleSection = [...anchorItems]
        .reverse()
        .find((item) => {
          const section = document.getElementById(item.href.split("#")[1]);

          return section && section.getBoundingClientRect().top <= 140;
        });

      if (visibleSection) {
        setActiveSection(visibleSection.href);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solidHeader = scrolled || mobileOpen || pathname !== "/";

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && !activeSection;
    }

    if (href.includes("#")) {
      return activeSection === href;
    }

    return pathname === href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solidHeader
          ? "border-b border-white/10 bg-[#071A3D]/95 shadow-lg backdrop-blur-md"
          : "bg-gradient-to-b from-[#04132F]/75 to-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                isActive(item.href)
                  ? "text-[#D71920]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.title}

              <span
                className={`absolute -bottom-2 left-0 h-0.5 bg-[#D71920] transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <Link
          href="/inscripcion"
          className="hidden rounded-full bg-[#D71920] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B9141A] lg:inline-flex"
        >
          Inscríbete
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 text-white lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#071A3D] lg:hidden">
          <Container className="flex flex-col py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`border-b border-white/10 py-4 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-[#D71920]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/inscripcion"
              onClick={() => setMobileOpen(false)}
              className="mt-6 rounded-full bg-[#D71920] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#B9141A]"
            >
              Inscríbete
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}