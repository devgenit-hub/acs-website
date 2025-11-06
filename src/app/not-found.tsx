'use client';
import Link from 'next/link';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FiHome className="w-5 h-5" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-card hover:bg-secondary text-foreground border border-border px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <FiArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">Popular Pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="/important-dates"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Important Dates
              </Link>
              <Link
                href="/registration"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Registration
              </Link>
              <Link
                href="/call-for-abstract"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Call for Abstract
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
