// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savvy GoRilla Foundation",
  description:
    "Savvy GoRilla Foundation – supporting gender equality, youth empowerment, health awareness, and digital literacy in Africa.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="flex min-h-screen flex-col">
          {/* HEADER */}
          <header className="sticky top-0 z-30 bg-black/90 backdrop-blur">
            {/* Thin Rasta strip */}
            <div className="h-0.5 bg-gradient-to-r from-rasta-red via-rasta-gold to-rasta-green" />

            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              <Link
                href="/"
                className="flex items-center gap-3 no-underline hover:no-underline"
              >
                {/* Logo */}
                <div className="relative h-9 w-9">
                  <Image
                    src="/logos/logo-white.png"
                    alt="Savvy GoRilla logo"
                    fill
                    sizes="36px"
                    className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
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
                {[
                  { href: "/about", label: "About" },
                  { href: "/work", label: "Our Work" },
                  { href: "/stories", label: "Stories & Voices" },
                  { href: "/get-involved", label: "Get Involved" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative no-underline transition-colors duration-200 hover:text-rasta-gold"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-rasta-red via-rasta-gold to-rasta-green opacity-80 transition-transform duration-200 group-hover:scale-x-100 md:block" />
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <footer className="border-t border-white/10">
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
