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
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-white/10">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full border border-white flex items-center justify-center text-xs font-semibold tracking-widest uppercase">
                  SG
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold">
                    Savvy GoRilla Foundation
                  </span>
                  <span className="text-[11px] text-white/60">
                    Emerging African voices.
                  </span>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
                <Link href="/work" className="hover:text-white">
                  Our Work
                </Link>
                <Link href="/stories" className="hover:text-white">
                  Stories &amp; Voices
                </Link>
                <Link href="/get-involved" className="hover:text-white">
                  Get Involved
                </Link>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <p>
                © {new Date().getFullYear()} Savvy GoRilla Foundation. Part of
                the Savvy Gorilla ecosystem.
              </p>
              <div className="flex gap-4">
                <span>Gender equality</span>
                <span>Youth empowerment</span>
                <span>Digital literacy</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
