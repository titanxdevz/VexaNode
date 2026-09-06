'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationConfig, NavigationItem, DropdownItem } from '../types/navigation';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import CurrencySelector from './CurrencySelector';
import { useToast } from './ToastProvider';
import {
  Cloud,
  Server,
  Gamepad2,
  Globe,
  Network,
  Info,
  User,
  Menu,
  X,
  ChevronRight,
  FileText,
  Shield,
  Database,
  ExternalLink,
} from 'lucide-react';
import { FaDiscord, FaMusic, FaBook, FaShieldAlt } from "react-icons/fa";
import { GrServerCluster } from "react-icons/gr";
import { motion, AnimatePresence } from 'framer-motion';
import { CustomIcons } from './CustomIcons';
import navigationConfig from '../config/sections/navigation.json';
import heroConfig from '../config/sections/hero.json';
import type { HeroConfig } from '../types/hero';

const config = navigationConfig as NavigationConfig;
const heroSettings = heroConfig as HeroConfig;

const iconMap: { [key: string]: React.ElementType } = {
  Cloud,
  Server: CustomIcons.VPS,
  Gamepad2: CustomIcons.Minecraft,
  Globe,
  Network,
  Info,
  User,
  FileText: FaBook,
  Shield: FaShieldAlt,
  Menu,
  X,
  ChevronRight,
  FaDiscord: CustomIcons.Discord,
  GrServerCluster,
  Music: FaMusic,
  Database,
};

const getIcon = (iconName?: string) => iconName ? iconMap[iconName] : null;

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdownStates, setMobileDropdownStates] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();
  const { t } = useLanguage();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const toggleMobileDropdown = useCallback((itemName: string) => {
    setMobileDropdownStates(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobileMenu();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  const isHrefActive = useCallback((href: string) => {
    const path = href.split(/[?#]/)[0];
    return path.startsWith('/') && (pathname === path || (path !== '/' && pathname.startsWith(`${path}/`)));
  }, [pathname]);

  const isNavigationItemActive = useCallback((item: NavigationItem) => {
    if (isHrefActive(item.href)) return true;

    return Boolean(
      item.dropdownItems?.some(dropdownItem => isHrefActive(dropdownItem.href)) ||
      item.megaMenuSections?.some(section => section.items.some(subItem => isHrefActive(subItem.href)))
    );
  }, [isHrefActive]);

  const getTranslatedNavName = useCallback((itemName: string) => {
    const navKey = itemName.toLowerCase().replace(/\s+/g, '');
    switch (navKey) {
      case 'home': return t('navbar.home');
      case 'products': return 'Services';
      case 'legal': return t('navbar.legal');
      case 'company': return 'Company';
      case 'status': return 'Status';
      default: return itemName;
    }
  }, [t]);

  const renderDropdown = useCallback((item: NavigationItem) => {
    if (!item.dropdownItems) return null;
    const isGrid = item.dropdownType === 'grid';

    return (
      <div className="invisible pointer-events-none absolute left-0 top-full z-50 translate-y-2 scale-[0.98] pt-2 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-out will-change-transform group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
        <div className={`relative rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl ${isGrid ? 'w-[500px] p-4' : 'w-[240px] p-2'}`}>
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent" />
          
          <div className={isGrid ? "grid grid-cols-2 gap-3" : "space-y-1"}>
            {item.dropdownItems.map((dropdownItem, idx) => (
              <div key={idx} className="group/sub relative">
                <Link
                  href={dropdownItem.href}
                  aria-disabled={dropdownItem.disabled || undefined}
                  onClick={dropdownItem.disabled ? (event) => event.preventDefault() : undefined}
                  className={`group/item flex min-h-[58px] flex-col rounded-lg border border-transparent p-2.5 transition-[background-color,border-color,transform] duration-200 ease-out focus-visible:border-emerald-500/40 focus-visible:bg-zinc-900 focus-visible:outline-none ${
                    dropdownItem.disabled ? 'cursor-not-allowed opacity-75' : 'hover:translate-x-0.5 hover:border-zinc-800 hover:bg-zinc-900'
                  }`}
                >
                  <div className="mb-0.5 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-zinc-100 transition-colors group-hover/item:text-emerald-400">
                      {dropdownItem.name}
                    </span>
                    {dropdownItem.children?.length ? (
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition-all duration-200 group-hover/sub:translate-x-0.5 group-hover/sub:text-emerald-400" />
                    ) : dropdownItem.badge ? (
                      <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-[9px] font-black text-black">
                        {dropdownItem.badge}
                      </span>
                    ) : null}
                  </div>
                  {dropdownItem.description && (
                    <p className="text-[10px] leading-tight text-zinc-400">
                      {dropdownItem.description}
                    </p>
                  )}
                </Link>

                {dropdownItem.children?.length ? (
                  <div
                    className="invisible pointer-events-none absolute top-0 z-[60] w-64 translate-x-1 scale-[0.98] opacity-0 transition-[opacity,transform,visibility] duration-200 ease-out group-hover/sub:visible group-hover/sub:pointer-events-auto group-hover/sub:translate-x-0 group-hover/sub:scale-100 group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:pointer-events-auto group-focus-within/sub:translate-x-0 group-focus-within/sub:scale-100 group-focus-within/sub:opacity-100"
                    style={{ left: isGrid && idx % 2 === 0 ? 'calc(200% + 0.75rem)' : 'calc(100% + 0.5rem)' }}
                  >
                    <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl shadow-black/40">
                      <div className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-emerald-400/80" />
                      {dropdownItem.children.map((child, childIdx) => (
                        <Link
                          key={childIdx}
                          href={child.href}
                          className="group/child block rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-zinc-900 focus-visible:bg-zinc-900 focus-visible:outline-none"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-zinc-200 transition-colors group-hover/child:text-emerald-400">
                              {child.name}
                            </span>
                            <ChevronRight className="h-3 w-3 text-zinc-600 transition-all duration-200 group-hover/child:translate-x-0.5 group-hover/child:text-emerald-400" />
                          </div>
                          {child.description && (
                            <p className="mt-0.5 text-[10px] leading-snug text-zinc-500">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }, []);

  const renderMegaMenu = (item: NavigationItem) => {
    if (!item.megaMenuSections) return null;

    return (
      <div className="invisible pointer-events-none absolute left-1/2 top-full z-50 w-screen max-w-4xl -translate-x-1/2 translate-y-2 scale-[0.98] px-4 pt-2 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-out will-change-transform group-hover:visible group-hover:pointer-events-auto group-hover:-translate-x-1/2 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:-translate-x-1/2 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
        <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl overflow-hidden grid grid-cols-3 gap-6">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent" />
          
          {item.megaMenuSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-3">
              <h3 className="text-[9px] font-black text-emerald-400 tracking-widest uppercase opacity-90">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((subItem, iIdx) => {
                  const SubIcon = getIcon(subItem.icon);
                  return (
                    <Link
                      key={iIdx}
                      href={subItem.href}
                      className="group/item flex items-start gap-3 rounded-lg border border-transparent p-2 transition-[background-color,border-color,transform] duration-200 ease-out hover:translate-x-0.5 hover:border-zinc-800 hover:bg-zinc-900 focus-visible:border-emerald-500/40 focus-visible:bg-zinc-900 focus-visible:outline-none"
                    >
                      <div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover/item:border-emerald-500/30 group-hover/item:bg-emerald-500/5 transition-all duration-150">
                        {SubIcon && <SubIcon className="w-4 h-4 text-zinc-400 group-hover/item:text-emerald-400 transition-colors" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-200 group-hover/item:text-white transition-colors flex items-center gap-1">
                          <span>{subItem.name}</span>
                          <ChevronRight className="w-3 h-3 text-emerald-400 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150" />
                        </div>
                        {subItem.description && (
                          <div className="text-[10px] text-zinc-500 group-hover/item:text-zinc-400 transition-colors mt-0.5 leading-tight">
                            {subItem.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderNavigationItem = useCallback((item: NavigationItem) => {
    const isActive = isNavigationItemActive(item);
    const translatedName = getTranslatedNavName(item.name);

    return (
      <div key={item.name} className="relative group flex items-center h-full py-1">
        <Link
          href={item.href}
          className={`relative flex items-center gap-1 px-3 py-2 text-xs font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:text-white ${
            isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
          }`}
          prefetch={true}
          aria-current={isActive ? 'page' : undefined}
        >
          <span>{translatedName}</span>
          {item.hasDropdown && (
            <ChevronRight className="h-3.5 w-3.5 rotate-90 opacity-50 transition-transform duration-300 ease-out group-hover:rotate-[270deg] group-focus-within:rotate-[270deg]" />
          )}

          <span
            aria-hidden="true"
            className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.55)] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100"
          />
        </Link>
        {item.hasDropdown && (item.isMegaMenu ? renderMegaMenu(item) : renderDropdown(item))}
      </div>
    );
  }, [getTranslatedNavName, isNavigationItemActive, renderDropdown]);

  const renderMobileNavigationItem = useCallback((item: NavigationItem) => {
    const IconComponent = item.icon ? getIcon(item.icon) : null;
    const translatedName = getTranslatedNavName(item.name);
    const isDropdownOpen = mobileDropdownStates[item.name] || false;
    const isItemActive = isNavigationItemActive(item);

    if (item.hasDropdown && item.isMegaMenu && item.megaMenuSections) {
      return (
        <div key={item.name} className={`border-b border-zinc-800/50 border-l-2 ${isItemActive ? 'border-l-emerald-400' : 'border-l-transparent'}`}>
          <button
            onClick={() => toggleMobileDropdown(item.name)}
            className={`w-full min-h-12 flex items-center justify-between px-4 py-3 transition-colors duration-150 ${
              isDropdownOpen || isItemActive ? 'bg-emerald-500/5' : 'hover:bg-zinc-900/30'
            }`}
            aria-expanded={isDropdownOpen}
          >
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold tracking-wider ${isDropdownOpen || isItemActive ? 'text-emerald-400' : 'text-zinc-200'}`}>
                {translatedName.toUpperCase()}
              </span>
            </div>
            <ChevronRight className={`w-4 h-4 transition-transform duration-150 ${isDropdownOpen ? 'rotate-90 text-emerald-400' : 'text-zinc-500'}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="overflow-hidden bg-zinc-950/60 pl-2"
              >
                {item.megaMenuSections.map((section, sIdx) => (
                  <div key={sIdx} className="pb-3 pt-1">
                    <div className="px-4 py-1.5">
                      <span className="text-[9px] font-black tracking-widest text-emerald-500/60 uppercase">{section.title}</span>
                    </div>
                    {section.items.map((subItem, iIdx) => {
                        const isSubActive = isHrefActive(subItem.href);
                      return (
                        <Link
                          key={iIdx}
                          href={subItem.href}
                          onClick={closeMobileMenu}
                          prefetch={true}
                          className={`flex items-center justify-between px-4 py-2 border-l border-zinc-800/80 transition-all ${
                            isSubActive ? 'bg-emerald-500/5 text-emerald-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          <span className="text-xs">{subItem.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    if (item.hasDropdown && item.dropdownItems) {
      return (
        <div key={item.name} className={`border-b border-zinc-800/50 border-l-2 ${isItemActive ? 'border-l-emerald-400' : 'border-l-transparent'}`}>
          <button
            onClick={() => toggleMobileDropdown(item.name)}
            className={`w-full min-h-12 flex items-center justify-between px-4 py-3 transition-colors duration-150 ${
              isDropdownOpen || isItemActive ? 'bg-emerald-500/5' : 'hover:bg-zinc-900/30'
            }`}
            aria-expanded={isDropdownOpen}
          >
            <span className={`text-xs font-bold tracking-wider ${isDropdownOpen || isItemActive ? 'text-emerald-400' : 'text-zinc-200'}`}>
              {translatedName.toUpperCase()}
            </span>
            <ChevronRight className={`w-4 h-4 transition-transform duration-150 ${isDropdownOpen ? 'rotate-90 text-emerald-400' : 'text-zinc-500'}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="overflow-hidden bg-zinc-950/60 pl-2"
              >
                {item.dropdownItems.map((dropdownItem, idx) => {
                  const isSubActive = isHrefActive(dropdownItem.href);
                  return (
                    <div key={idx}>
                      <Link
                        href={dropdownItem.href}
                        prefetch={true}
                        aria-disabled={dropdownItem.disabled || undefined}
                        className={`flex items-center justify-between border-l border-zinc-800/80 px-4 py-2.5 transition-all ${
                          dropdownItem.disabled ? 'cursor-not-allowed text-zinc-500 opacity-75' : isSubActive ? 'bg-emerald-500/5 text-emerald-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
                        }`}
                        onClick={dropdownItem.disabled ? (event) => { event.preventDefault(); closeMobileMenu(); } : closeMobileMenu}
                      >
                        <span className="text-xs">{dropdownItem.name}</span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                      </Link>

                      {dropdownItem.children?.length ? (
                        <div className="ml-5 border-l border-emerald-500/20 bg-black/20 py-1">
                          {dropdownItem.children.map((child, childIdx) => (
                            <Link
                              key={childIdx}
                              href={child.href}
                              onClick={closeMobileMenu}
                              prefetch={true}
                              className="flex min-h-10 items-center justify-between gap-3 px-4 py-2 text-[11px] text-zinc-500 transition-colors hover:bg-zinc-900/50 hover:text-emerald-400"
                            >
                              <span>{child.name}</span>
                              <ChevronRight className="h-3 w-3 shrink-0 opacity-50" />
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    const isActive = isHrefActive(item.href);
    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={closeMobileMenu}
        prefetch={true}
        className={`min-h-12 flex items-center justify-between px-4 py-3 border-b border-l-2 border-zinc-800/50 transition-all ${
          isActive ? 'border-l-emerald-400 bg-emerald-500/5 text-emerald-400 font-bold' : 'border-l-transparent text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900/20'
        }`}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="text-xs font-bold tracking-wider">{translatedName.toUpperCase()}</span>
        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
      </Link>
    );
  }, [closeMobileMenu, getTranslatedNavName, isHrefActive, isNavigationItemActive, mobileDropdownStates, toggleMobileDropdown]);

  return (
    <div className="relative">
      <nav
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
          isScrolled
            ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-2.5'
            : 'bg-zinc-950/60 backdrop-blur-md border-b border-white/10 py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2.5 group" aria-label="Home" prefetch={true}>
              <Image
                src={heroSettings.navbar.logo}
                alt={heroSettings.navbar.brandName}
                className="h-7 w-auto transition-transform group-hover:scale-105"
                width={32}
                height={32}
                priority
              />
              <span className="text-sm sm:text-base font-black text-white orbitron-font tracking-wider uppercase">
                {heroSettings.navbar.brandName}
                <span className="text-emerald-400">{heroSettings.navbar.brandAccent}</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-0 xl:gap-1">
            {config.mainNavigation.map((item) => renderNavigationItem(item))}
          </div>

          {/* Right Utilities */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {/* Discord online */}
            <a
              href="https://discord.gg/dJpMDfgUQq"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1 bg-[#5865F2]/10 border border-[#5865F2]/20 hover:bg-[#5865F2]/20 text-[10px] text-[#8a96f5] font-black rounded-full px-2.5 py-1.5 transition-colors duration-200 uppercase tracking-wider"
            >
              <FaDiscord className="w-3.5 h-3.5 text-[#5865F2]" />
              <span>Discord</span>
            </a>

            <div className="flex items-center border-l border-zinc-800 pl-3 gap-1">
              <CurrencySelector />
              <LanguageSelector />
            </div>

            {/* Client Area */}
            <a
              href="https://billing.vexanode.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-zinc-200 text-black font-black px-3.5 py-1.5 rounded-lg text-[11px] transition-all tracking-wider shadow-sm uppercase whitespace-nowrap"
            >
              Client Area
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <CurrencySelector />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-200 transition-colors hover:border-zinc-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 bottom-0 top-[61px] z-40 flex flex-col">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Drawer */}
            <motion.div
              id="mobile-navigation"
              className="relative flex h-full origin-top flex-col overflow-hidden border-t border-zinc-800 bg-zinc-950"
              initial={{ scaleY: 0.96, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex-1 overflow-y-auto py-2">
                {config.mainNavigation.map((item) => renderMobileNavigationItem(item))}
              </div>

              {/* Drawer Footer Actions */}
              <div className="border-t border-zinc-900 bg-zinc-950/90 px-4 py-4 space-y-3">
                <div className="flex items-center justify-end">
                  <a
                    href="https://discord.gg/dJpMDfgUQq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-[#5865F2]/10 border border-[#5865F2]/20 text-[10px] text-[#8a96f5] font-black rounded-full px-2.5 py-1 transition-all uppercase tracking-wider"
                  >
                    <FaDiscord />
                    <span>Discord</span>
                  </a>
                </div>

                <a
                  href="https://billing.vexanode.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white hover:bg-zinc-200 text-black font-black py-2.5 rounded-lg text-xs transition-all tracking-wider uppercase"
                >
                  Client Area
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
