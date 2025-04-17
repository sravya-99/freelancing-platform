import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold gradient-text">Srazuka</span>
            </Link>
            <p className="text-foreground/70 mb-4">
              The future of freelancing with real-time monitoring, data analytics, and secure payments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">© {new Date().getFullYear()} Srazuka. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select className="bg-background border border-border rounded-md px-3 py-1 text-sm text-foreground/70">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}
