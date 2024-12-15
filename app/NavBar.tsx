"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { GiVacuumCleaner } from "react-icons/gi";

export default function NavBar() {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/work", label: "Work" },
  ];

  return (
    <nav className="flex justify-between space-x-6 px-16 h-16 border-b items-center">
      <Link href="/">
        <GiVacuumCleaner size={28} />
      </Link>
      <ul className="flex space-x-6 ">
        {links.map((link) => (
          <li
            className={
              link.href === currentPath
                ? "text-zinc-900"
                : `text-zinc-500 hover:text-zinc-800 transition-colors`
            }
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <CgProfile size={28} />
      </Link>
    </nav>
  );
}
