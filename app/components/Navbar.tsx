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
      <div className="absolute top-full left-0 mt-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 z-50 will-change-transform">
        <div className={`relative bg-zinc-950 border border-zinc-800 rounded-xl shadow-xl overflow-hidden ${isGrid ? 'w-[500px] p-4' : 'w-[240px] p-2'}`}>
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent" />
          
          <div className={isGrid ? "grid grid-cols-2 gap-3" : "space-y-1"}>
            {item.dropdownItems.map((dropdownItem, idx) => (
              <Link
                key={idx}
                href={dropdownItem.href}
                className="flex flex-col p-2.5 rounded-lg border border-transparent hover:border-zinc-800 hover:bg-zinc-900 transition-all duration-150 group/item"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs font-bold text-zinc-100 group-hover/item:text-emerald-400 transition-colors">
                    {dropdownItem.name}
                  </span>
                  {dropdownItem.badge && (
                    <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-emerald-500 text-black">
                      {dropdownItem.badge}
                    </span>
                  )}
                </div>
                {dropdownItem.description && (
                  <p className="text-[10px] text-zinc-400 leading-tight">
                    {dropdownItem.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }, []);

  const renderMegaMenu = (item: NavigationItem) => {
    if (!item.megaMenuSections) return null;

    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-screen max-w-4xl px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50 will-change-transform">
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
                      className="flex items-start gap-3 group/item hover:bg-zinc-900 border border-transparent hover:border-zinc-800 p-2 rounded-lg transition-all duration-150"
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
    const isActive = pathname === item.href || (item.hasDropdown && pathname.startsWith(item.href));
    const translatedName = getTranslatedNavName(item.name);

    return (
      <div key={item.name} className="relative group flex items-center h-full py-1">
        <Link
          href={item.href}
          className={`px-3 py-1.5 text-xs font-bold transition-all duration-150 flex items-center gap-1 relative ${
            isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
          }`}
          prefetch={true}
        >
          <span>{translatedName}</span>
          {item.hasDropdown && (
            <ChevronRight className="w-3.5 h-3.5 rotate-90 opacity-50 group-hover:rotate-[270deg] transition-transform duration-150" />
          )}

          {isActive && (
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"
              layoutId="nav-hover-dot"
            />
          )}
        </Link>
        {item.hasDropdown && (item.isMegaMenu ? renderMegaMenu(item) : renderDropdown(item))}
      </div>
    );
  }, [pathname, renderDropdown]);

  const renderMobileNavigationItem = useCallback((item: NavigationItem) => {
    const IconComponent = item.icon ? getIcon(item.icon) : null;
    const translatedName = getTranslatedNavName(item.name);
    const isDropdownOpen = mobileDropdownStates[item.name] || false;

    if (item.hasDropdown && item.isMegaMenu && item.megaMenuSections) {
      return (
        <div key={item.name} className="border-b border-zinc-800/50">
          <button
            onClick={() => toggleMobileDropdown(item.name)}
            className={`w-full flex items-center justify-between px-4 py-3 transition-colors duration-150 ${
              isDropdownOpen ? 'bg-zinc-900/40' : 'hover:bg-zinc-900/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold tracking-wider ${isDropdownOpen ? 'text-emerald-400' : 'text-zinc-200'}`}>
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
                      const isSubActive = pathname === subItem.href;
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
        <div key={item.name} className="border-b border-zinc-800/50">
          <button
            onClick={() => toggleMobileDropdown(item.name)}
            className={`w-full flex items-center justify-between px-4 py-3 transition-colors duration-150 ${
              isDropdownOpen ? 'bg-zinc-900/40' : 'hover:bg-zinc-900/20'
            }`}
          >
            <span className={`text-xs font-bold tracking-wider ${isDropdownOpen ? 'text-emerald-400' : 'text-zinc-200'}`}>
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
                  const isSubActive = pathname === dropdownItem.href;
                  return (
                    <Link
                      key={idx}
                      href={dropdownItem.href}
                      onClick={closeMobileMenu}
                      prefetch={true}
                      className={`flex items-center justify-between px-4 py-2.5 border-l border-zinc-800/80 transition-all ${
                        isSubActive ? 'bg-emerald-500/5 text-emerald-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span className="text-xs">{dropdownItem.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    const isActive = pathname === item.href;
    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={closeMobileMenu}
        prefetch={true}
        className={`flex items-center justify-between px-4 py-3 border-b border-zinc-800/50 transition-all ${
          isActive ? 'bg-emerald-500/5 text-emerald-400 font-bold' : 'text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900/10'
        }`}
      >
        <span className="text-xs font-bold tracking-wider">{translatedName.toUpperCase()}</span>
        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
      </Link>
    );
  }, [pathname, closeMobileMenu, mobileDropdownStates, toggleMobileDropdown]);

  return (
    <div className="relative">
      <nav
        ref={navRef}
        className={`fixed z-50 inset-x-0 top-0 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 py-3'
            : 'bg-zinc-950/40 backdrop-blur-sm border-b border-white/5 py-4'
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
          <div className="hidden md:flex items-center justify-center flex-1 gap-1">
            {config.mainNavigation.map((item) => renderNavigationItem(item))}
            
            <Link
              href="/partners"
              className={`px-3 py-1.5 text-xs font-bold transition-all duration-150 relative ${
                pathname === '/partners' ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Partners</span>
              {pathname === '/partners' && (
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                  layoutId="nav-hover-dot"
                />
              )}
            </Link>
          </div>

          {/* Right Utilities */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Operational Status */}
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1 select-none whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">All systems operational</span>
            </div>

            {/* Discord online */}
            <a
              href="https://discord.gg/dJpMDfgUQq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#5865F2]/10 border border-[#5865F2]/20 hover:bg-[#5865F2]/20 text-[10px] text-[#8a96f5] font-black rounded-full px-2.5 py-1.5 transition-all uppercase tracking-wider"
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
              href="https://billing.vexanode.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-zinc-200 text-black font-black px-3.5 py-1.5 rounded-lg text-[11px] transition-all tracking-wider shadow-sm uppercase whitespace-nowrap"
            >
              Client Area
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden gap-2">
            <CurrencySelector />
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 flex flex-col pt-[53px]">
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
              className="relative bg-zinc-950 border-t border-zinc-800 flex flex-col h-full overflow-hidden"
              initial={{ scaleY: 0.96, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex-1 overflow-y-auto py-2">
                <Link
                  href="/partners"
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between px-4 py-3 border-b border-zinc-800/50 transition-all ${
                    pathname === '/partners' ? 'bg-emerald-500/5 text-emerald-400 font-bold' : 'text-zinc-300 hover:text-zinc-100'
                  }`}
                >
                  <span className="text-xs font-bold tracking-wider">PARTNERS</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </Link>

                {config.mainNavigation.map((item) => renderMobileNavigationItem(item))}
              </div>

              {/* Drawer Footer Actions */}
              <div className="border-t border-zinc-900 bg-zinc-950/90 px-4 py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">Operational</span>
                  </div>
                  
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
                  href="https://billing.vexanode.cloud"
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