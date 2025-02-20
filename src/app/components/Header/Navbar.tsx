'use client';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar hidratación incorrecta
  useEffect(() => setMounted(true), []);

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          onClick={handleScrollToTop}
          className="flex items-center gap-2 font-bold hover:opacity-90 transition-opacity cursor-pointer"
        >
          <Image
            src={mounted && theme === 'light' ? '/browserico.png' : '/logo.webp'}
            alt="Wuthering Waves Logo"
            width={40}
            height={40}
            className="h-8 w-8 md:h-10 md:w-10 object-contain"
          />
          <span className="text-xl md:text-2xl bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Wuthering Waves
          </span>
        </Link>

        <div className="flex gap-6 items-center">
          <Link
            href="#characters"
            className="text-lg font-semibold hover:text-purple-500 dark:hover:text-indigo-400 transition-colors"
          >
            Resonadores
          </Link>
          <Link
            href="#contact"
            className="text-lg font-semibold hover:text-purple-500 dark:hover:text-indigo-400 transition-colors"
          >
            Contacto
          </Link>

          {/* Botón de cambio de tema */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-transparent"
            aria-label="Cambiar tema"
          >
            {mounted && (
              theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:fill-slate-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:fill-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}