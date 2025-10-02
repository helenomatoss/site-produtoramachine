export const CONTACT_EMAIL = "produtoramachine@gmail.com";
export const CONTACT_PHONE_DISPLAY = "+55 11 9 9155-2263";
export const CONTACT_PHONE_E164 = "+5511991552263";
export const WHATSAPP_LINK = "https://wa.me/5511991552263";

export const EMAIL = import.meta?.env?.VITE_CONTACT_EMAIL || CONTACT_EMAIL;
export const PHONE_DISPLAY = import.meta?.env?.VITE_CONTACT_PHONE_DISPLAY || CONTACT_PHONE_DISPLAY;
export const PHONE_E164 = import.meta?.env?.VITE_CONTACT_PHONE_E164 || CONTACT_PHONE_E164;
export const WHATSAPP = import.meta?.env?.VITE_CONTACT_WHATSAPP || WHATSAPP_LINK;
