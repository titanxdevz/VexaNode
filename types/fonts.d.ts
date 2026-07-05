import 'next/font/google';

declare module 'next/font/google' {
  export const Geist: (options?: any) => {
    className: string;
    style: { fontFamily: string; fontWeight?: number; fontStyle?: string };
    variable: string;
  };

  export const Geist_Mono: (options?: any) => {
    className: string;
    style: { fontFamily: string; fontWeight?: number; fontStyle?: string };
    variable: string;
  };

  export const Orbitron: (options?: any) => {
    className: string;
    style: { fontFamily: string; fontWeight?: number; fontStyle?: string };
    variable: string;
  };

  export const Quicksand: (options?: any) => {
    className: string;
    style: { fontFamily: string; fontWeight?: number; fontStyle?: string };
    variable: string;
  };
}

