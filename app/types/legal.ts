export interface LegalSection {
  title: string;
  content: string;
}

export interface LegalPageConfig {
  title: string;
  lastUpdated: string;
  companyName: string;
  websiteUrl: string;
  contactEmail: string;
  sections: LegalSection[];
}

export interface LegalConfig {
  termsOfService: LegalPageConfig;
  privacyPolicy: LegalPageConfig;
}

// d0d95cc52efefbee5a1c3aa6f8f5f50e