import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] py-16 text-others-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column - Logo and Contact */}
          <div className="lg:col-span-4">
            <Image
              src="/logo-datk.png"
              alt="Shin Shin Group"
              width={100}
              height={100}
              className="mb-8 size-16 md:size-20"
            />
            <address className="mb-4 not-italic text-others-white/70">
              House # 93, Road # 13, Sector # 10, Uttara
              <br />
              Model Town, Dhaka-1230, Bangladesh.
            </address>
            <p className="text-others-white/70">info@shinshingroup.com</p>
          </div>

          {/* Mission Statement */}
          <div className="lg:col-span-8">
            <p className="mb-12 text-lg leading-relaxed text-others-white/70">
              Crafting high-quality, eco-friendly apparel for global markets. Leading fashion
              innovation, Together We Grow.
            </p>

            {/* Navigation Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Menu Column 1 */}
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-others-white/70 transition-colors hover:text-others-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-others-white/70 transition-colors hover:text-others-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sustainability"
                      className="text-others-white/70 transition-colors hover:text-others-white"
                    >
                      Sustainability
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Menu Column 2 */}
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/facilities"
                      className="text-others-white/70 transition-colors hover:text-others-white"
                    >
                      Our Facilities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/career"
                      className="text-others-white/70 transition-colors hover:text-others-white"
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-others-white/70 transition-colors hover:text-others-white"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 font-medium">Follow</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-others-white/70 transition-colors hover:text-others-white"
                    >
                      <Facebook size={20} />
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-others-white/70 transition-colors hover:text-others-white"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-others-white/70 transition-colors hover:text-others-white"
                    >
                      <Youtube size={20} />
                      YouTube
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-gray-800 text-gray-400 mt-16 border-t pt-8 text-center">
          <p>© Shin Shin Group 2025</p>
        </div>
      </div>
    </footer>
  )
}
