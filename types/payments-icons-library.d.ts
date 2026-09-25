declare module "payments-icons-library" {
  export interface PaymentIcon {
    icon_name: string;
    icon_version: string;
    icon_url: string;
  }
  export function getIcon(nick: string, size?: "sm" | "md" | "lg" | "svg"): PaymentIcon;
  export function getIcons(
    names: string[],
    size?: "sm" | "md" | "lg" | "svg"
  ): PaymentIcon[];
  export function getModesIcons(
    mode: string,
    size?: "sm" | "md" | "lg" | "svg"
  ): PaymentIcon[];
  const icons: {
    getIcon: typeof getIcon;
    getIcons: typeof getIcons;
    getModesIcons: typeof getModesIcons;
  };
  export default icons;
}
