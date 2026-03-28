"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site-data";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen w-full px-6 pb-10 pt-4 sm:px-8 sm:pb-12 sm:pt-5">
      <div className="mx-auto flex w-full max-w-xl flex-col">
        <header className="mb-6 sm:mb-8">
          <div className="flex justify-end md:hidden">
            <button
              type="button"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors duration-150 hover:bg-neutral-200"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="site-nav-overlay"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
          <nav
            id="site-nav"
            aria-label="Primary navigation"
            className="hidden gap-x-6 gap-y-2 text-base leading-normal text-ink md:flex md:flex-row md:flex-wrap"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="link-hit-inline">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1">{children}</main>
      </div>

      {menuOpen ? (
        <div
          id="site-nav-overlay"
          className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex justify-end px-6 pt-4 sm:px-8 sm:pt-5">
            <button
              type="button"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors duration-150 hover:bg-neutral-200"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <nav
            aria-label="Mobile menu"
            className="flex flex-1 flex-col items-stretch justify-center px-0 pb-16 text-lg leading-normal text-ink"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="link-hit-menu-row">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
