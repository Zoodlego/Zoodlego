"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { easing } from "@/lib/motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/privacy/", label: "Privacy Policy" },
];

export function MobileNav({ isOpen, onClose, pathname }: MobileNavProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      
      // Focus close button on open
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
          return;
        }
        if (e.key === "Tab" && dialogRef.current) {
          const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              last.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === last) {
              first.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dialogRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: easing.entrance }}
          className={cn(
            "fixed inset-0 z-50 bg-[#14264A] text-white flex flex-col justify-between lg:hidden",
            "p-5 sm:p-8 pt-[calc(1rem+env(safe-area-inset-top,0px))]",
            "pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]",
            "pl-[calc(1.25rem+env(safe-area-inset-left,0px))]",
            "pr-[calc(1.25rem+env(safe-area-inset-right,0px))]"
          )}
        >
          {/* Top Bar with Logo & 44x44px Close Button */}
          <div className="flex items-center justify-between min-h-[44px]">
            <Link href="/" onClick={onClose} className="flex items-center gap-3 p-1 min-h-[44px]">
              <Image
                src="/brand/logo-outline-white.png"
                alt="Zoodlego Logo"
                width={546}
                height={593}
                sizes="32px"
                className="h-8 w-auto aspect-[546/593] object-contain"
                priority
              />
              <span className="type-caption font-semibold tracking-[0.16em] uppercase text-white">
                Zoodlego
              </span>
            </Link>

            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close navigation menu"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links (Rows >= 56px with active state) */}
          <nav className="flex flex-col gap-2 my-auto py-6" aria-label="Mobile Navigation Links">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 + index * 0.05,
                    duration: 0.3,
                    ease: easing.entrance,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "min-h-[56px] flex items-center type-h2 font-semibold tracking-tight transition-all px-4 rounded-2xl",
                      isActive
                        ? "text-white bg-white/15 shadow-sm"
                        : "text-white/70 hover:text-white hover:bg-white/[0.06] active:bg-white/10"
                    )}
                  >
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom Contact info (>= 44px targets) */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 type-caption text-slate-300">
            <a
              href="https://www.instagram.com/zoodlegofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center text-white/80 hover:text-white active:text-white py-2"
            >
              <span>Instagram: @zoodlegofficial</span>
              <span className="sr-only">(opens in a new tab)</span>
              <span aria-hidden="true" className="ml-1 text-xs">↗</span>
            </a>
            <a
              href="mailto:info@zoodlego.com?subject=Studio%20Inquiry%20-%20Zoodlego"
              className="min-h-[44px] inline-flex items-center text-white font-medium hover:underline py-2"
            >
              info@zoodlego.com
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
