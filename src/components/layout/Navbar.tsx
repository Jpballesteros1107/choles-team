"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/shared/Container";
import { navigation } from "@/lib/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-all duration-300 ${
                pathname === item.href
                  ? "text-secondary"
                  : "text-white hover:text-secondary"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Button
          variant="secondary"
          className="hidden rounded-full px-6 lg:inline-flex"
        >
          Inscríbete
        </Button>
      </Container>
    </header>
  );
}