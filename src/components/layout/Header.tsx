"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/privacy/", label: "Privacy Policy" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-[#14264A] border-b border-white/10",
          "h-14 sm:h-16 pt-safe pl-safe pr-safe flex items-center",
          isScrolled && "shadow-md shadow-black/20"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo & Brand Identity (>= 44px touch target) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1 min-h-[44px]"
            aria-label="Zoodlego Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center p-1.5 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/brand/logo-outline-white.png"
                alt="Zoodlego Logo"
                width={546}
                height={593}
                sizes="36px"
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="type-caption sm:text-base font-semibold tracking-[0.16em] uppercase text-white transition-colors group-hover:text-sky-300">
              Zoodlego
            </span>
          </Link>

          {/* Desktop Navigation (Visible at lg: 1024px+) */}
          <nav
            className="hidden lg:flex items-center gap-1.5"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "type-caption text-[0.9375rem] font-medium tracking-tight transition-all duration-200 px-4 py-2 min-h-[44px] inline-flex items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
                    isActive
                      ? "bg-white/15 text-white font-semibold border border-white/15"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="ml-3 pl-3 border-l border-white/15">
              <a
                href="mailto:info@zoodlego.com?subject=Studio%20Inquiry%20-%20Zoodlego"
                className="type-caption font-semibold uppercase tracking-wider px-5 py-2 min-h-[44px] inline-flex items-center justify-center rounded-full bg-white text-[#14264A] hover:bg-slate-100 shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-[0.98]"
              >
                Contact Studio
              </a>
            </div>
          </nav>

          {/* Mobile & Tablet Hamburger Button (Visible below 1024px, >= 44x44px target) */}
          <button
            onClick={() => setMobileNavOpen(true)}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-navigation"
            aria-label="Open navigation menu"
            className="lg:hidden min-h-[44px] min-w-[44px] flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg text-white hover:bg-white/10 active:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span className="w-6 h-0.5 bg-white transition-all duration-200" />
            <span className="w-6 h-0.5 bg-white transition-all duration-200" />
            <span className="w-6 h-0.5 bg-white transition-all duration-200" />
          </button>
        </div>
      </header>

      {/* Full-Screen Accessible Mobile & Tablet Menu Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
