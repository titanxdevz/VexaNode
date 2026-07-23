export interface HeroGame {
  id: string;
  name: string;
  displayName: string;
  banner: string;
  color: string;
  showSuffix: boolean;
  showInDropdown: boolean;
}

export interface HeroTitle {
  prefix: string;
  suffix: string;
  suffixColor: string;
  gameNameColor: string;
}

export interface HeroPartner {
  name: string;
  src: string;
  loading: "lazy" | "eager";
}

export interface HeroConfig {
  navbar: {
    logo: string;
    brandName: string;
    brandAccent: string;
  };
  hero: {
    title: HeroTitle;
    games: HeroGame[];
    description: string;
    cycleInterval: number;
    partners: HeroPartner[];
  };
}
