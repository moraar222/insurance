"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"
import { settings } from "@/config/settings"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const handleClick = async () => {
    setNavbar(false)
  }

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [navbar])

  return (
    <header className="select-none">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl border:underline">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="/" onClick={handleClick}>
              <h1 className="text-2xl font-bold duration-200 lg:hover:scale-[1.10]">
                {siteConfig.name}
              </h1>
            </Link>
            <div className="flex gap-1 md:hidden">
              <button
                className="rounded-md p-2 text-primary outline-none focus:border focus:border-primary"
                aria-label="Hamburger Menu"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              <ModeToggle />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 z-10 bg-background p-4 transition-transform duration-500 ease-in-out ${
              navbar ? "transform translate-y-0" : "transform -translate-y-full"
            } md:static md:transform-none md:mt-0 md:block md:border-none md:p-0`}
          >
            <ul className="flex flex-col items-center space-y-4 text-primary opacity-60 md:flex-row md:space-x-6 md:space-y-0">
              {navLinks.map((link) => (
                <li key={link.route}>
                  <Link
                    className="hover:underline"
                    href={link.path}
                    onClick={handleClick}
                  >
                    {link.route}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/register">
            <button className="px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-primary-dark 
               text-black border border-gray-300 dark:bg-black dark:text-white dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-primary-dark 
              bg-black text-white border border-gray-700 dark: dark:text-black dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-100">
              Login
            </button>
          </Link>
        </div>
        {settings.themeToggleEnabled && (
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        )}
      </nav>
    </header>
  )
}
