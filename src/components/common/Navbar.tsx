'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { mainLogo } from '@/assets';
import Image from 'next/image';

interface Links {
  text: string;
  link: string;
}

const links: Links[] = [
  { text: 'Home Page', link: '/' },
  { text: 'Call For Papers', link: '/call-for-paper' },
  { text: 'Important Dates', link: '/important-dates' },
  { text: 'Registration', link: '/registration' },
  { text: 'Paper Submission', link: '/paper-submission' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActiveRoute = (linkPath: string) => {
    if (!pathname) return false;

    if (linkPath === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(linkPath);
  };

  return (
    <nav className="w-full bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={mainLogo} width={50} height={50} alt="Main Logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.link}
              className={`transition-all hover:opacity-80 px-3 py-1 rounded font-medium ${
                isActiveRoute(link.link) ? 'text-accent font-semibold' : 'text-primary-foreground'
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex items-center p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-secondary text-secondary-foreground shadow-inner">
          <div className="flex flex-col items-center py-2">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.link}
                className={`py-3 w-full text-center hover:text-primary transition-colors font-medium ${
                  isActiveRoute(link.link)
                    ? 'text-accent font-semibold'
                    : 'text-secondary-foreground'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
