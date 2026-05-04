export const cleanPhone = (phone: string) => phone.replace(/\D/g, "");

export const phoneHref = (phone: string) => `tel:+1${cleanPhone(phone)}`;

export const mapsSearchUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export const mapsEmbedUrl = (address: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
