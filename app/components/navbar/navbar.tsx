"use client";
import React, { useState, useEffect } from "react";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { IconBrandGithub, IconMenu2, IconX } from '@tabler/icons-react';
import { ThemeToggle } from '../ui/theme-toggle';

export const Navbar = () => {
  const navItems = [
    {
      label: "Hackathon",
      href: "https://modelence.com/hackathon",
    },
    {
      label: "Cloud",
      href: "https://modelence.com/cloud",
    },
    {
      label: "Docs",
      href: "https://docs.modelence.com/",
    },
    {
      label: "Contact Us",
      href: "https://modelence.com/contact",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["90%", "80%"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["0px", "9999px"]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);

  const filter = useMotionTemplate`blur(${useTransform(scrollY, [0, 100], [0, 10])}px)`;

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (latestValue > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <Container className="mt-10">
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-input)" : "none",
          width: width,
          y: y,
          borderRadius: borderRadius,
          backdropFilter: backdropBlur,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className={`fixed inset-x-0 top-0 z-50 mx-auto flex max-w-auto items-center justify-between px-3 py-2 transition-all duration-300 w-full
        ${scrolled 
          ? 'bg-white/80 dark:bg-neutral-900/80 border border-white/20 dark:border-white/10' 
          : 'bg-transparent border border-transparent'
        }`}
         >
        <Link href="/">
          <Image
            className=""
            src="https://modelence.com/modelence-logo.svg"
            alt="logo"
            width={120}
            height={120}
          />
        </Link>
        
        <div className="hidden md:flex items-center">
          {navItems.map((item, idx) => (
            <Link
              className="relative px-2 py-1 text-md text-neutral-700 dark:text-white"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                  layoutId="hovered-span"
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
            
          ))}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="https://github.com/modelence/modelence">
              <IconBrandGithub className="h-6 w-6 text-neutral-700 dark:text-white" />
            </Link>
          </div>
        </div>
        
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 focus:outline-none"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <IconX className="h-6 w-6 text-neutral-700 dark:text-white" />
            ) : (
              <IconMenu2 className="h-6 w-6 text-neutral-700 dark:text-white" />
            )}
          </button>
        </div>
       
        {menuOpen && (
          <div
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
            className="fixed inset-0 z-50 flex flex-col items-center justify-start pt-20 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md animate-fade-in-slide"
          >
           
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 focus:outline-none"
                aria-label="Close navigation menu"
              >
                <IconX className="h-9 w-9 text-neutral-900 dark:text-white" />
              </button>
            </div>
            {navItems.map((item, idx) => (
              <Link
                className="w-full text-center py-4 text-lg text-neutral-700 dark:text-white border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 focus:bg-neutral-100 dark:focus:bg-neutral-800 outline-none transition-colors duration-200"
                href={item.href}
                key={idx}
                role="menuitem"
                tabIndex={0}
                onClick={() => setMenuOpen(false)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') setMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
       
      </motion.nav>
    </Container>
  );
};
