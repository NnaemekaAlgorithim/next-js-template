"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-300 h-24 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-sm text-gray-700">
          © {new Date().getFullYear()} My Company. All rights reserved.
        </div>

        <nav className="flex gap-6 text-sm text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/contact-us">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/gallery">Gallery</Link>
        </nav>
      </div>
    </footer>
  );
}
