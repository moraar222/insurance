import Link from "next/link"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-100 text-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-8 md:py-12">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {siteConfig.name}
              </h1>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Empowering your digital experience. Stay connected with us.
            </p>
          </div>
          <ul className="flex flex-wrap items-center text-sm space-x-6">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.path} className="hover:text-gray-900 transition-all">
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-all">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-all">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-all">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-all">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm text-gray-600">
            © {new Date().getFullYear()}{" "}
            <a
              target="_blank"
              href="https://redpangilinan.live/"
              className="hover:underline text-gray-900"
            >
              CLV Monitoring
            </a>
            . All Rights Reserved.
          </span>
          <div className="text-sm space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-gray-900 transition-all">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-900 transition-all">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
