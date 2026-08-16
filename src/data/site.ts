import { ls, type LocaleString } from "./types";

export const site = {
  ownerName: "Luca Nguyen",
  role: ls("IoT Specialist & Automation Engineer", "Chuyên gia IoT & Kỹ sư Tự động hoá") as LocaleString,
  email: "trieuvi5522@gmail.com",
  /** wa.me requires digits only, no "+" */
  whatsappNumber: "84847578466",
  whatsappDisplay: "+84 847 578 466",
  facebookUrl: "https://www.facebook.com/trieu.vi.419252",
  linkedinUrl: "https://www.linkedin.com/in/vi-nguyen-trieu-a61061331/",
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}`;
export const mailtoUrl = `mailto:${site.email}`;
