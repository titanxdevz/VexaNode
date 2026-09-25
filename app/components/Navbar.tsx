'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationConfig, NavigationItem } from '../types/navigation';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import CurrencySelector from './CurrencySelector';
import ThemeToggle from './ThemeToggle';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
  Gamepad2,
  Bot,
  Radio,
  Gift,
  FileText,
  ShieldAlert,
  Server,
  Database,
  BookOpen,
  Users,
  Settings,
  Globe,
  Mail,
  HardDrive,
  Cloud,
  Handshake,
} from 'lucide-react';
import { FaDiscord } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import navigationConfig from '../config/sections/navigation.json';
import heroConfig from '../config/sections/hero.json';
import type { HeroConfig } from '../types/hero';

const config = navigationConfig as NavigationConfig;
const heroSettings = heroConfig as HeroConfig;

// Separate Legal items from primary nav for the secondary dropdown
const primaryNav = config.mainNavigation.filter(item => item.name !== 'Legal');
const legalNav = config.mainNavigation.find(item => item.name === 'Legal');

// Icon resolver
const getItemIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('minecraft')) return Gamepad2;
  if (n.includes('samp')) return Gamepad2;
  if (n.includes('hytale')) return Sparkles;
  if (n.includes('discord bot') || n.includes('bot')) return Bot;
  if (n.includes('lavalink') || n.includes('managed') || n.includes('audio')) return Radio;
  if (n.includes('free')) return Gift;
  if (n.includes('vps') || n.includes('cloud')) return Cloud;
  if (n.includes('dedicated')) return HardDrive;
  if (n.includes('web hosting') || n.includes('domain')) return Globe;
  if (n.includes('database')) return Database;
  if (n.includes('contact')) return Mail;
  if (n.includes('partner')) return Handshake;
  if (n.includes('affiliate') || n.includes('team')) return Users;
  if (n.includes('blog')) return BookOpen;
  if (n.includes('doc')) return FileText;
  if (n.includes('about')) return Users;
  if (n.includes('terms')) return FileText;
  if (n.includes('privacy')) return ShieldAlert;
  if (n.includes('sla') || n.includes('service level')) return Server;
  return Layers;
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{ [key: string]: boolean }>({});
  const [secondaryOpen, setSecondaryOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close secondary dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (secondaryRef.current && !secondaryRef.current.contains(e.target as Node)) {
        setSecondaryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isHrefActive = useCallback((href: string) => {
    const path = href.split(/[?#]/)[0];
    return path.startsWith('/') && (pathname === path || (path !== '/' && pathname.startsWith(`${path}/`)));
  }, [pathname]);

  const isNavItemActive = useCallback((item: NavigationItem) => {
    if (isHrefActive(item.href)) return true;
    return Boolean(item.dropdownItems?.some(d => isHrefActive(d.href)));
  }, [isHrefActive]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'vx-bg backdrop-blur-lg border-b vx-line shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">

          {/* ── Brand Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" prefetch={true}>
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg vx-card border vx-line p-1.5 flex items-center justify-center transition-all duration-200 group-hover:border-[color:var(--vx-accent)]">
              <Image
                src={heroSettings.navbar.logo}
                alt={heroSettings.navbar.brandName}
                className="w-full h-full object-contain"
                width={32}
                height={32}
                priority
              />
            </div>
            <div className="flex items-center gap-0.5 font-extrabold text-[15px] tracking-tight vx-ink">
              <span>{heroSettings.navbar.brandName}</span>
              <span className="vx-accent-text">{heroSettings.navbar.brandAccent}</span>
            </div>
          </Link>

          {/* ── Center Navigation ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {primaryNav.map((item) => {
              const active = isNavItemActive(item);
              const isMenuOpen = activeDropdown === item.name;

              if (item.hasDropdown && item.dropdownItems) {
                const isGrid = item.dropdownType === 'grid';
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`group/btn relative flex items-center gap-1 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-colors duration-150 ${
                        active || isMenuOpen
                          ? 'vx-ink'
                          : 'vx-muted vx-hover-ink'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3 h-3 vx-faint transition-transform duration-150 ${
                          isMenuOpen ? 'rotate-180 vx-accent-text' : ''
                        }`}
                      />
                      {/* Hover underline — clean, no glow */}
                      <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[color:var(--vx-accent)] transition-transform duration-200 origin-center ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover/btn:scale-x-100'
                      }`} />
                    </button>

                    {/* Desktop Dropdown */}
                    <AnimatePresence>
                      {isMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.12, ease: 'easeOut' }}
                          className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 ${
                            isGrid ? 'w-[440px]' : 'w-[260px]'
                          }`}
                        >
                          <div className="rounded-xl vx-card border vx-line p-2 shadow-xl">
                            {/* Top accent line */}
                            <div className="absolute top-2.5 inset-x-6 h-px bg-gradient-to-r from-transparent via-[color:var(--vx-accent)] to-transparent" />

                            <div className={isGrid ? "grid grid-cols-2 gap-1" : "flex flex-col gap-0.5"}>
                              {item.dropdownItems.map((dropdownItem, idx) => {
                                const DropIcon = getItemIcon(dropdownItem.name);
                                return (
                                  <Link
                                    key={idx}
                                    href={dropdownItem.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="group flex items-start gap-2.5 p-2.5 rounded-lg transition-colors duration-100 hover:vx-bg-alt"
                                  >
                                    <div className="w-7 h-7 rounded-md vx-bg-alt border vx-line flex items-center justify-center flex-shrink-0 group-hover:border-[color:var(--vx-accent)] transition-colors">
                                      <DropIcon className="w-3.5 h-3.5 vx-muted group-hover:vx-accent-text transition-colors" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center gap-1.5">
                                        <span className="text-[13px] font-semibold vx-ink transition-colors">
                                          {dropdownItem.name}
                                        </span>
                                        {dropdownItem.badge && (
                                          <span className="px-1.5 py-px rounded text-[9px] font-bold bg-[#d97757]/10 vx-accent-text border border-[#d97757]/25 uppercase">
                                            {dropdownItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      {dropdownItem.description && (
                                        <p className="text-[11px] vx-faint truncate mt-0.5">
                                          {dropdownItem.description}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group/link relative px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-colors duration-150 ${
                    active
                      ? 'vx-ink'
                      : 'vx-muted vx-hover-ink'
                  }`}
                  prefetch={true}
                >
                  <span>{item.name}</span>
                  {/* Underline indicator */}
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[color:var(--vx-accent)] transition-transform duration-200 origin-center ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* ── Right Actions ── */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Discord — ghost/outline secondary */}
            <a
              href="https://discord.gg/dJpMDfgUQq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border vx-line vx-muted vx-hover-ink hover:border-[color:var(--vx-accent)] text-[13px] font-semibold transition-all duration-150"
            >
              <FaDiscord className="w-3.5 h-3.5 text-[#5865F2]" />
              <span>Discord</span>
            </a>

            {/* Secondary items dropdown: Currency, Language, Legal */}
            <div className="relative" ref={secondaryRef}>
              <button
                onClick={() => setSecondaryOpen(!secondaryOpen)}
                className="flex items-center justify-center w-8 h-8 rounded-lg border vx-line vx-muted vx-hover-ink hover:border-[color:var(--vx-accent)] transition-all duration-150"
                aria-label="Settings and preferences"
              >
                <Settings className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {secondaryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.12, ease: 'easeOut' }}
                    className="absolute top-full right-0 mt-2 w-[220px] z-50"
                  >
                    <div className="rounded-xl vx-card border vx-line p-2 shadow-xl">
                      {/* Currency & Language row */}
                      <div className="flex items-center gap-2 px-2 py-2 border-b vx-line mb-1">
                        <div className="flex-1">
                          <CurrencySelector />
                        </div>
                        <div className="flex-shrink-0">
                          <LanguageSelector />
                        </div>
                      </div>

                      {/* Legal links */}
                      {legalNav?.dropdownItems?.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setSecondaryOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium vx-muted vx-hover-ink hover:vx-bg-alt transition-colors"
                        >
                          {(() => {
                            const Icon = getItemIcon(item.name);
                            return <Icon className="w-3.5 h-3.5 vx-faint" />;
                          })()}
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Client Area — primary CTA, terracotta fill (accessible white text) */}
            <a
              href="https://billing.vexanode.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="vx-btn-accent group flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-bold transition-all duration-150"
            >
              <span>Client Area</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* ── Mobile Toggle ── */}
          <div className="flex items-center lg:hidden gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg vx-card border vx-line vx-muted vx-hover-ink transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Slide-in Drawer ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in panel from right */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-[85vw] vx-bg border-l vx-line overflow-y-auto flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b vx-line">
                <div className="flex items-center gap-2">
                  <Image
                    src={heroSettings.navbar.logo}
                    alt={heroSettings.navbar.brandName}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="font-bold text-sm vx-ink">
                    {heroSettings.navbar.brandName}
                    <span className="vx-accent-text">{heroSettings.navbar.brandAccent}</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg vx-muted vx-hover-ink hover:vx-bg-alt transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 px-3 py-4 space-y-1">
                {primaryNav.map((item) => {
                  const active = isNavItemActive(item);
                  const isOpen = mobileDropdownOpen[item.name];

                  if (item.hasDropdown && item.dropdownItems) {
                    return (
                      <div key={item.name}>
                        <button
                          onClick={() =>
                            setMobileDropdownOpen(prev => ({ ...prev, [item.name]: !prev[item.name] }))
                          }
                          className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-[13px] font-semibold transition-colors ${
                            active ? 'vx-accent-text' : 'vx-muted2 vx-hover-ink hover:vx-bg-alt'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-3.5 h-3.5 vx-faint transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pr-1 py-1 space-y-0.5">
                                {item.dropdownItems.map((d, i) => (
                                  <Link
                                    key={i}
                                    href={d.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between py-2 px-3 rounded-lg text-[12px] vx-muted vx-hover-ink hover:vx-bg-alt transition-colors"
                                  >
                                    <span>{d.name}</span>
                                    <ChevronRight className="w-3 h-3 vx-faint" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2.5 px-3 rounded-lg text-[13px] font-semibold transition-colors ${
                        active ? 'vx-accent-text bg-[#d97757]/5' : 'vx-muted2 vx-hover-ink hover:vx-bg-alt'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* Legal links in mobile */}
                {legalNav?.dropdownItems && (
                  <div className="pt-3 mt-3 border-t vx-line">
                    <span className="px-3 text-[10px] font-bold vx-faint uppercase tracking-widest">Legal</span>
                    <div className="mt-2 space-y-0.5">
                      {legalNav.dropdownItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-3 rounded-lg text-[12px] vx-muted vx-hover-ink hover:vx-bg-alt transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile CTAs */}
              <div className="px-4 py-4 border-t vx-line space-y-2.5">
                {/* Currency & Language compact row */}
                <div className="flex items-center gap-2 mb-2">
                  <CurrencySelector />
                  <LanguageSelector />
                </div>

                <a
                  href="https://discord.gg/dJpMDfgUQq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border vx-line vx-muted2 vx-hover-ink text-[13px] font-semibold hover:border-[color:var(--vx-accent)] transition-colors"
                >
                  <FaDiscord className="w-4 h-4 text-[#5865F2]" />
                  <span>Join Discord</span>
                </a>

                <a
                  href="https://billing.vexanode.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn-accent block w-full text-center py-2.5 rounded-lg text-[13px] font-bold transition-colors"
                >
                  Client Area
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
