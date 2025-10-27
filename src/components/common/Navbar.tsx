'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { FiChevronDown } from 'react-icons/fi';
import { mainLogo } from '@/assets';
import Image from 'next/image';

interface Links {
  text: string;
  link: string;
  sublink?: { text: string; link: string }[];
}

const links: Links[] = [
  { text: 'Home Page', link: '/' },
  {
    text: 'Call For Abstract',
    link: '/call-for-abstract',
  },
  { text: 'Important Dates', link: '/important-dates' },
  { text: 'Registration', link: '/registration' },
  { text: 'Abstract Submission', link: '/abstract-submission' },
  { text: 'About Us', link: '/about-us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // adjust trigger point as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveRoute = (linkPath: string) => {
    if (!pathname) return false;
    if (linkPath === '/') return pathname === '/';
    return pathname.startsWith(linkPath);
  };

  // Navbar content (so we can reuse for static + fixed)
  const NavbarContent = () => (
    <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src={mainLogo} width={50} height={50} alt="Main Logo" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-6 items-center">
        {links.map((link, idx) => (
          <div key={idx} className="relative group">
            <Link
              href={link.link}
              className={`flex items-center gap-1 transition-all hover:opacity-80 px-3 py-1 rounded font-medium ${
                isActiveRoute(link.link) ? 'text-accent font-semibold' : 'text-primary-foreground'
              }`}
            >
              {link.text}
              {link.sublink && <FiChevronDown className="mt-0.5 text-sm" />}
            </Link>
          </div>
        ))}
      </div>

      {/* Hamburger Icon */}
      <button
        className="lg:hidden flex items-center p-2 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <RxCross2 size={26} /> : <GiHamburgerMenu size={26} />}
      </button>
    </div>
  );

  return (
    <>
      {/* Default Navbar (static at top) */}
      {!scrolled && (
        <nav className="w-full bg-primary text-primary-foreground shadow-md relative z-40">
          <NavbarContent />
        </nav>
      )}

      {/* Fixed Navbar (appears when scrolled) */}
      {scrolled && (
        <nav className="fixed top-0 left-0 w-full z-50 bg-primary text-primary-foreground shadow-md transition-transform duration-500 translate-y-0 animate-slideDown">
          <NavbarContent />
        </nav>
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-secondary text-secondary-foreground shadow-inner fixed top-[64px] left-0 w-full z-40">
          <div className="flex flex-col divide-y divide-border">
            {links.map((link, idx) => (
              <div key={idx} className="w-full">
                {link.sublink ? (
                  <>
                    {/* Parent Button for dropdown */}
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === link.text ? null : link.text)}
                      className={`flex justify-between items-center w-full px-6 py-3 text-left transition-colors font-medium ${
                        isActiveRoute(link.link)
                          ? 'text-accent font-semibold'
                          : 'text-secondary-foreground'
                      }`}
                    >
                      {link.text}
                      <FiChevronDown
                        className={`transition-transform duration-300 ${
                          dropdownOpen === link.text ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    {dropdownOpen === link.text && (
                      <div className="flex flex-col bg-secondary/90">
                        {link.sublink.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.link}
                            onClick={() => setOpen(false)}
                            className="py-2 px-10 text-sm hover:bg-secondary/70 transition-colors"
                          >
                            {sub.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Direct Link for items without sublinks
                  <Link
                    href={link.link}
                    onClick={() => setOpen(false)}
                    className={`flex justify-between items-center w-full px-6 py-3 text-left transition-colors font-medium ${
                      isActiveRoute(link.link)
                        ? 'text-accent font-semibold'
                        : 'text-secondary-foreground'
                    }`}
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease forwards;
        }
      `}</style>
    </>
  );
}
