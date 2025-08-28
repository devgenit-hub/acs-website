'use client';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

interface Links {
  text: string;
  link: string;
}

const links: Links[] = [
  {
    text: 'Home Page',
    link: '/',
  },
  {
    text: 'Call For Papers',
    link: '/call-for-paper',
  },
  {
    text: 'Important Dates',
    link: '/important-dates',
  },
  {
    text: 'Registration',
    link: '/registration',
  },
  {
    text: 'Paper Submission',
    link: '/paper-submission',
  },
  {
    text: 'Committee',
    link: '/committee',
  },
  {
    text: 'Keynote Speakers',
    link: '/keynote-speakers',
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full py-5 bg-background border border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:gap-15">
        <div className="text-xl font-bold">Logo</div>

        {/* For mobile view */}
        <div className="md:hidden inline-block">TextLogo</div>
        {/* Desktop Links */}
        <div className="hidden md:flex justify-end flex-wrap gap-4 space-x-4">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.link}
              className="transition-colors hover:text-primary px-2 py-1 rounded"
            >
              {link.text}
            </Link>
          ))}
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center p-2 focus:outline-none hover:text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {!open && <GiHamburgerMenu />}
          {open && <RxCross2 />}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col items-center py-2">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.link}
                className="py-2 w-full text-center hover:text-primary transition-colors rounded"
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
