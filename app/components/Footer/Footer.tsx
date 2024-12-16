// export const Footer = () => {
//   return (
//     <div>
//       <h1>Footer</h1>
//     </div>
//   )
// }

// components/Footer.tsx

import Link from 'next/link'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer
    data-aos="fade-up"
    className="bg-white dark:bg-gray-800 dark:text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Columna de información */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Books Store</h2>
          <p className="text-gray-600 dark:text-white">
            Contac negotiate with the worlds leading bookstores and buy books online.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Anzoategui, Venezuela</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+58 04129417603</span>
            </div>
          </div>
          {/* Redes sociales */}
          <div className="flex gap-4 pt-2">
            <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-white">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-white">
              <FaFacebook size={24} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-white">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>

        {/* Enlaces importantes - Columna 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/home" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Enlaces importantes - Columna 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/home" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Enlaces importantes - Columna 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/home" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600 dark:text-white">
        <p>Copyright © 2022. All rights reserved || Made with ❤️ by TCJ</p>
      </div>
    </footer>
  )
}
