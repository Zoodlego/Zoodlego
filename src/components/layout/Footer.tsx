import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1325] text-white border-t border-white/10 pt-16 pb-12 pb-safe">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Semantic 3-Column Layout: Caption size, secondary color, clear columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          {/* Col 1: Brand & Studio Identity (5 cols on lg, full on sm) */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl p-1 transition-transform duration-200 min-h-[44px]"
              aria-label="Zoodlego Home"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center p-1.5 shadow-sm">
                <Image
                  src="/brand/logo-outline-white.png"
                  alt="Zoodlego Game Studio"
                  width={546}
                  height={593}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="type-caption font-semibold tracking-[0.18em] uppercase text-white">
                ZOODLEGO
              </span>
            </Link>

            <p className="type-caption text-slate-400 max-w-sm font-normal leading-relaxed">
              Independent game development studio based in Gujarat, India. Crafting tactile, mechanics-first mobile titles.
            </p>
          </div>

          {/* Col 2: Studio Navigation (3 cols on lg, 1 col on sm) */}
          <div className="sm:col-span-1 lg:col-span-3 flex flex-col">
            <span className="type-eyebrow text-slate-300 font-semibold mb-2 block">
              Navigation
            </span>
            <nav className="flex flex-col space-y-1 type-caption" aria-label="Footer Navigation">
              <Link
                href="/"
                className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded w-fit min-h-[44px] min-w-[44px] inline-flex items-center"
              >
                Home
              </Link>
              <Link
                href="/about/"
                className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded w-fit min-h-[44px] min-w-[44px] inline-flex items-center"
              >
                About Us
              </Link>
              <Link
                href="/privacy/"
                className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded w-fit min-h-[44px] min-w-[44px] inline-flex items-center"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Col 3: Direct Connect & Inquiries (4 cols on lg, 1 col on sm) */}
          <div className="sm:col-span-1 lg:col-span-4 flex flex-col">
            <span className="type-eyebrow text-slate-300 font-semibold mb-2 block">
              Connect
            </span>
            <div className="flex flex-col space-y-1 type-caption text-slate-400 font-mono">
              <a
                href="mailto:info@zoodlego.com?subject=Studio%20Inquiry%20-%20Zoodlego"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded w-fit min-h-[44px] inline-flex items-center"
              >
                Email: info@zoodlego.com
              </a>
              <a
                href="https://www.instagram.com/zoodlegofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded w-fit min-h-[44px] inline-flex items-center gap-1"
              >
                <span>Instagram: @zoodlegofficial</span>
                <span className="sr-only">(opens in a new tab)</span>
                <span aria-hidden="true" className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Founding Milestone with Tabular-Nums */}
        <div className="pt-8 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between type-caption text-slate-400 gap-4">
          <p>© <span className="tabular-nums font-medium">{currentYear}</span> Zoodlego Studios [LEGAL_ENTITY_NAME]. All rights reserved.</p>
          <p className="text-slate-400">
            Founded <span className="tabular-nums font-medium">Nov 4, 2026</span> • Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
