export interface DropdownItem {
  name: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
  badgeColor?: string;
  color?: string;
  image?: string;
}

export interface MegaMenuSection {
  title: string;
  items: DropdownItem[];
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
  hasDropdown?: boolean;
  dropdownType?: 'games' | 'legal' | 'list' | 'grid';
  dropdownItems?: DropdownItem[];
  isMegaMenu?: boolean;
  megaMenuSections?: MegaMenuSection[];
  showStatusDot?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ClientSpace {
  name: string;
  href: string;
  icon: string;
  style?: string;
}

export interface Banner {
  show: boolean;
  text: string;
  couponCode: string;
  style?: string;
  useThemeColor?: boolean;
  backgroundColor: string;
  fallbackColor: string;
}

export interface NavigationConfig {
  mainNavigation: NavigationItem[];
  socialLinks: SocialLink[];
  clientSpace?: ClientSpace;
  banner: Banner;
}
