'use client';

import {
  Home,
  User,
  Briefcase,
  Folder,
  Mail,
} from 'lucide-react';

const links = [
  { icon: <Home size={20} />, label: 'Home', href: '#home' },
  { icon: <Briefcase size={20} />, label: 'Experience', href: '#experience' },
  { icon: <Folder size={20} />, label: 'Projects', href: '#projects' },
  { icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-4 h-[100px] w-[200px] bg-white/10 backdrop-blur-sm rounded-xl flex justify-evenly items-center p-2 z-50">
      {links.map(({ icon, href, label }, i) => (
        <a
          key={i}
          href={href}
          title={label}
          className="text-white hover:text-cyan-300 transition-all"
        >
          {icon}
        </a>
      ))}
    </nav>
  );
}
