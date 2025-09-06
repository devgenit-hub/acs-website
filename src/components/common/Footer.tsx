'use client';

import { footerLogo } from '@/assets';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="text-center space-y-4 mb-8">
          <div className="flex justify-center">
            <Image
              src={footerLogo}
              alt="Footer Logos"
              width={100}
              height={200}
              className="mx-auto"
            />
          </div>
          <div className="space-y-1">
            <p className="text-foreground font-medium">ACS International Students Chapter</p>
            <p className="text-muted-foreground">Chapter for Life&reg;</p>
            <p className="text-muted-foreground">University of Dhaka</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-border/50 pt-6">
          <div className="relative overflow-hidden rounded-lg p-4 bg-card">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                All rights reserved by <span className="font-bold">ACS</span> © 2024 - 2025.
              </p>
              <p className="text-sm text-muted-foreground">
                Developed by{' '}
                <a
                  href="https://www.devgenit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary hover:text-ring transition-colors"
                >
                  DevGenit
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
