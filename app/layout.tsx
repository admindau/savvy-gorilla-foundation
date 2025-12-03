// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Savvy GoRilla Foundation',
  description:
    'Savvy GoRilla Foundation – supporting gender equality, youth empowerment, health awareness, and digital literacy in Africa.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          {/* HEADER */}
          <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              <Link
                href="/"
                className="flex items-center gap-3 no-underline"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-[11px] font-semibold tracking-[0.16em] uppercase">
                  SG
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">
                    Savvy GoRilla Foundation
                  </div>
                  <div className="text-[11px] text-white/60">
                    Emerging African voices.
                  </div>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 text-xs font-medium text-white/70 md:flex">
                <Link href="/about" className="no-underline hover:text-white">
                  About
                </Link>
                <Link href="/work" className="no-underline hover:text-white">
                  Our Work
                </Link>
                <Link
                  href="/stories"
                  className="no-underline hover:text-white"
                >
                  Stories &amp; Voices
                </Link>
                <Link
                  href="/get-involved"
                  className="no-underline hover:text-white"
                >
                  Get Involved
                </Link>
                <Link href="/contact" className="no-underline hover:text-white">
                  Contact
                </Link>
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
                <span>Gender equality</span>
                <span>Youth empowerment</span>
                <span>Health awareness</span>
                <span>Digital literacy</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
