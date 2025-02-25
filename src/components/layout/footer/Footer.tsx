'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="ForkU Logo"
                width={150}
                height={50}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              From the leaders in forklift safety training and OSHA compliance.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-mono mb-6 text-[#FFFF00]">NAVIGATE</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-[#39FF14] transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#39FF14] transition-colors">
                  HOW IT WORKS
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-[#39FF14] transition-colors">
                  TRAINING
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#39FF14] transition-colors">
                  BLOG
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-mono mb-6 text-[#FFFF00]">SUPPORT</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/support" className="hover:text-[#39FF14] transition-colors">
                  CUSTOMER SUPPORT
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-[#39FF14] transition-colors">
                  YOUR ORDERS
                </Link>
              </li>
              <li>
                <Link href="/releases" className="hover:text-[#39FF14] transition-colors">
                  RELEASE NOTES
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-sm font-mono mb-6 text-[#FFFF00]">CONNECT</h3>
            <ul className="space-y-4">
              <li>
                <Link href="https://facebook.com" className="hover:text-[#39FF14] transition-colors">
                  FACEBOOK
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="hover:text-[#39FF14] transition-colors">
                  INSTAGRAM
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="hover:text-[#39FF14] transition-colors">
                  X
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com" className="hover:text-[#39FF14] transition-colors">
                  YOUTUBE
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="hover:text-[#39FF14] transition-colors">
                  LINKEDIN
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Download App Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="bg-white text-[#1C1C1E] px-6 py-3 rounded-lg font-mono hover:bg-gray-200 transition-colors">
              DOWNLOAD FORKU APP
            </button>
            <Image
              src="/qr-code.svg"
              alt="QR Code"
              width={100}
              height={100}
              className="bg-white p-2 rounded-lg"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
