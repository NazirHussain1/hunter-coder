"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
        </li>
        <li>
          <Link href="/blog" className={pathname.startsWith("/blog") ? "active" : ""}>Blog</Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
