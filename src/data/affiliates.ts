// Central place for affiliate/booking link bases. Until real partner IDs are
// added here, these are plain, non-monetized links — do not fabricate
// tracking params. See CLAUDE.md "Affiliate links" for the update process.

export type Provider = 'klook' | 'getyourguide' | 'expedia';

export const affiliates: Record<Provider, { label: string; searchUrl: (query: string) => string; pending: boolean }> = {
  klook: {
    label: 'Klook',
    searchUrl: (query) => `https://www.klook.com/search/result/?query=${encodeURIComponent(query)}`,
    pending: true,
  },
  getyourguide: {
    label: 'GetYourGuide',
    searchUrl: (query) => `https://www.getyourguide.com/s/?q=${encodeURIComponent(query)}`,
    pending: true,
  },
  expedia: {
    label: 'Expedia',
    searchUrl: (query) => `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(query)}`,
    pending: true,
  },
};
