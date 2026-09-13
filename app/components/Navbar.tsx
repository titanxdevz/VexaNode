'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationConfig, NavigationItem } from '../types/navigation';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import CurrencySelector from './CurrencySelector';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ExternalLink,
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
  Globe,
  BookOpen,
  Users
} from 'lucide-react';
import { FaDiscord } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import navigationConfig from '../config/sections/navigation.json';
import heroConfig from '../config/sections/hero.json';
import type { HeroConfig } from '../types/hero';

const config = navigationConfig as NavigationConfig;
const heroSettings = heroConfig as HeroConfig;

// Icon resolver for modern items
const getItemIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('minecraft')) return Gamepad2;
  if (n.includes('discord bot') || n.includes('bot')) return Bot;
  if (n.includes('lavalink')) return Radio;
  if (n.includes('free')) return Gift;
  if (n.includes('samp')) return Gamepad2;
  if (n.includes('hytale')) return Sparkles;
  if (n.includes('database')) return Database;
  if (n.includes('blog')) return BookOpen;
  if (n.includes('about')) return Users;
  if (n.includes('terms')) return FileText;
  if (n.includes('privacy')) return ShieldAlert;
  if (n.includes('sla')) return Server;
  return Layers;
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();
  const { t } = useLanguage();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-zinc-950/40 backdrop-blur-md border-b border-white/[0.06]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0" prefetch={true}>
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-zinc-900 to-zinc-950 border border-emerald-500/30 p-1.5 flex items-center justify-center transition-all duration-300 group-hover:border-emerald-400/60 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <Image
              src={heroSettings.navbar.logo}
              alt={heroSettings.navbar.brandName}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              width={36}
              height={36}
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 font-black text-base sm:text-lg tracking-tight text-white font-sans">
              <span>{heroSettings.navbar.brandName}</span>
              <span className="text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]">
                {heroSettings.navbar.brandAccent}
              </span>
            </div>
            <span className="text-[10px] font-medium text-zinc-400 tracking-widest uppercase">Cloud Hosting</span>
          </div>
        </Link>

        {/* Center Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {config.mainNavigation.map((item) => {
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
                    className={`group/btn relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                      active || isMenuOpen
                        ? 'text-white bg-white/[0.08]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
                        isMenuOpen ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                    {/* Animated hover underline */}
                    <span className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 opacity-0 scale-x-0 group-hover/btn:opacity-100 group-hover/btn:scale-x-100 transition-all duration-300 origin-center shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  </button>

                  {/* Desktop Dropdown Card */}
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 ${
                          isGrid ? 'w-[460px]' : 'w-[280px]'
                        }`}
                      >
                        <div className="relative rounded-2xl bg-[#090a0f] border border-white/[0.1] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
                          {/* Accent Top Border */}
                          <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

                          <div className={isGrid ? "grid grid-cols-2 gap-2" : "flex flex-col gap-1.5"}>
                            {item.dropdownItems.map((dropdownItem, idx) => {
                              const DropIcon = getItemIcon(dropdownItem.name);
                              return (
                                <Link
                                  key={idx}
                                  href={dropdownItem.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-white/[0.06] border border-transparent hover:border-white/[0.06]"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-zinc-900/90 border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-colors">
                                    <DropIcon className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">
                                        {dropdownItem.name}
                                      </span>
                                      {dropdownItem.badge && (
                                        <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-extrabold border border-emerald-500/30">
                                          {dropdownItem.badge}
                                        </span>
                                      )}
                                    </div>
                                    {dropdownItem.description && (
                                      <p className="text-[10px] text-zinc-400 truncate mt-0.5 group-hover:text-zinc-300">
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
                className={`group/link relative px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                  active
                    ? 'text-white bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
                prefetch={true}
              >
                <span>{item.name}</span>
                {/* Active Indicator or Hover Underline */}
                {active ? (
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                ) : (
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 opacity-0 scale-x-0 group-hover/link:opacity-100 group-hover/link:scale-x-100 transition-all duration-300 origin-center shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Utilities */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Discord Community Pill */}
          <a
            href="https://discord.gg/dJpMDfgUQq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/30 text-[#8a96f5] text-xs font-bold transition-all duration-200"
          >
            <FaDiscord className="w-4 h-4 text-[#5865F2]" />
            <span>Discord</span>
          </a>

          {/* Selectors */}
          <div className="flex items-center gap-1.5 border-l border-zinc-800 pl-3">
            <CurrencySelector />
            <LanguageSelector />
          </div>

          {/* Client Area Glowing CTA */}
          <a
            href="https://billing.vexanode.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden px-4 py-2 rounded-xl bg-white hover:bg-zinc-100 text-black text-xs font-black tracking-wide transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] flex items-center gap-1.5"
          >
            <span>Client Area</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center lg:hidden gap-2">
          <CurrencySelector />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-zinc-800 bg-zinc-950/98 backdrop-blur-2xl overflow-hidden px-4 py-4 space-y-3"
          >
            <div className="space-y-1">
              {config.mainNavigation.map((item) => {
                const active = isNavItemActive(item);
                const isOpen = mobileDropdownOpen[item.name];

                if (item.hasDropdown && item.dropdownItems) {
                  return (
                    <div key={item.name} className="border-b border-zinc-900 pb-1">
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(prev => ({ ...prev, [item.name]: !prev[item.name] }))
                        }
                        className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-xs font-bold text-zinc-200 hover:bg-zinc-900"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="pl-3 pr-1 py-1 space-y-1 bg-zinc-900/40 rounded-xl mt-1">
                          {item.dropdownItems.map((d, i) => (
                            <Link
                              key={i}
                              href={d.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center justify-between py-2 px-3 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-zinc-800"
                            >
                              <span>{d.name}</span>
                              <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2.5 px-3 rounded-xl text-xs font-bold transition-colors ${
                      active ? 'bg-emerald-500/10 text-emerald-400' : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-3 border-t border-zinc-900 space-y-2.5">
              <a
                href="https://discord.gg/dJpMDfgUQq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#5865F2]/15 border border-[#5865F2]/30 text-[#8a96f5] text-xs font-bold"
              >
                <FaDiscord className="w-4 h-4" />
                <span>Join Discord Community</span>
              </a>

              <a
                href="https://billing.vexanode.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 rounded-xl bg-white text-black text-xs font-black shadow-lg"
              >
                Client Area Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;


