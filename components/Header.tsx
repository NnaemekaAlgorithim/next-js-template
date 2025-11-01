"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200 h-12 flex items-center shadow-sm">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="font-bold text-gray-900 text-lg">
          Logo
        </Link>

        <div className="flex gap-6 text-sm text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/contact-us">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
      </nav>
    </header>
  );
}
