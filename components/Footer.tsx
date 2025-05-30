"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

const BackgroundGradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative group">
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <div className="relative bg-black rounded-lg">{children}</div>
    </div>
  );
};

const Footer = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const socialLinks = [
    { name: "Github", icon: <Github className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
  ];

  const footerLinks = [
    { name: "Services", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-black text-cleanlight py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <BackgroundGradient>
              <div className="px-4 py-2">
                <h2 className="text-2xl font-bold">cleanbyte</h2>
              </div>
            </BackgroundGradient>
            <p className="text-gray-400 max-w-xs">
              Upload and scan files instantly for viruses and threats — fast,
              secure, and right in your browser.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cleanlight transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 p-2 fill-cleanlight rounded-full hover:bg-gray-700 transition-colors duration-300"
                  onMouseEnter={() => setHovered(social.name)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ y: -5 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} cleanbyte. All rights reserved.
          </p>
          <motion.p
            className="text-gray-400 text-sm mt-2 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Made with ❤️ by icarodredd.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
