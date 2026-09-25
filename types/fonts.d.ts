import 'next/font/google';

declare module 'next/font/google' {
  export const Geist: (options?: Record<string, unknown>) => {
    className: string;
    style: { fontFamily: string; fontWeight?: number; fontStyle?: string };
    variable: string;
  };

  export const Geist_Mono: (options?: Record<string, unknown>) => {
    className: string;
    style: { fontFamily: string; fontWeight?: number; fontStyle?: string };
    variable: string;
  };

  export const Orbitron: (options?: Record<string, unknown>) => {
    className: string;
    style: { fontFamily: string; fontWeight?: number; fontStyle?: string };
    variable: string;
  };

  export const Quicksand: (options?: Record<string, unknown>) => {
    className: string;
    style: { fontFamily: string; fontWeight?: number; fontStyle?: string };
    variable: string;
  };
}

