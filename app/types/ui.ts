export interface Currency {
  code: string;
  symbol: string;
  name: string;
}

export interface UIConfig {
  loading: {
    enableLoadingScreen: boolean;
    loadingDuration: number;
  };
  currency: {
    apiKey: string;
    baseCurrency: string;
    defaultCurrency: string;
    supportedCurrencies: Currency[];
  };
  christmasTheme?: {
    enabled: boolean;
  };
}
