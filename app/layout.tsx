import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import ScrollEffects from "./ScrollEffects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savvy GoRilla Foundation",
  description:
    "Savvy GoRilla Foundation – supporting gender equality, health awareness, youth empowerment, and digital literacy in Africa.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Global scroll + header effects */}
        <ScrollEffects />

        <div className="flex min-h-screen flex-col">
          {/* HEADER */}
          <header
            data-header
            className="header-glow sticky top-0 z-30 bg-black/90 backdrop-blur"
          >
            {/* Thin Rasta strip */}
            <div className="h-0.5 bg-gradient-to-r from-rasta-red via-rasta-gold to-rasta-green" />

            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-3 no-underline">
                {/* Logo */}
                <div className="relative h-9 w-9">
                  <Image
                    src="/logos/logo-white.png"
                    alt="Savvy GoRilla logo"
                    fill
                    sizes="36px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Name + tagline */}
                <div className="leading-tight">
                  <div className="text-sm font-semibold">
                    Savvy GoRilla Foundation
                  </div>
                  <div className="text-[11px] text-white/70">
                    Emerging African voices.
                  </div>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 text-xs font-medium text-white/70 md:flex">
                <Link
                  href="/about"
                  className="no-underline transition-colors duration-150 hover:text-rasta-gold"
                >
                  About
                </Link>
                <Link
                  href="/work"
                  className="no-underline transition-colors duration-150 hover:text-rasta-gold"
                >
                  Our Work
                </Link>
                <Link
                  href="/stories"
                  className="no-underline transition-colors duration-150 hover:text-rasta-gold"
                >
                  Stories &amp; Voices
                </Link>
                <Link
                  href="/get-involved"
                  className="no-underline transition-colors duration-150 hover:text-rasta-gold"
                >
                  Get Involved
                </Link>
                <Link
                  href="/contact"
                  className="no-underline transition-colors duration-150 hover:text-rasta-gold"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <footer className="footer-glow border-t border-white/10 bg-black">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <p>
                © {year} Savvy GoRilla Foundation. Part of the Savvy Gorilla
                ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-rasta-red">Gender equality</span>
                <span className="text-rasta-gold">Youth empowerment</span>
                <span className="text-rasta-green">Health awareness</span>
                <span>Digital literacy</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
