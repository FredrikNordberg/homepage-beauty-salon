import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "start", label: "Start" },
  { href: "/about", key: "about", label: "Om oss" },
  { href: "/prices", key: "prices", label: "Priser" },
  { href: "/gallery", key: "gallery", label: "Galleri" },
];

export const SERVICES = [
  {
    id: 1,
    title: "Fotvård",
    description: "Professionell fotvård för friska och vackra fötter.",
    image: `/footcare.jpg`,
  },
  {
    id: 2,
    title: "Naglar",
    description: "Manikyr och pedikyr för perfekta naglar.",
    image: `/nails.jpg`,
  },
  {
    id: 3,
    title: "Frisör",
    description: "Modern klippning och styling för alla hårtyper.",
    image: `/hairdresser.jpg`,
  },
];

export const GALLERY_IMAGES = [
  { id: 1, category: "Naglar", image: "/nails1.jpg" },
  { id: 2, category: "Naglar", image: "/nails2.jpg" },
  { id: 3, category: "Naglar", image: "/nails3.jpg" },
  { id: 4, category: "Frisör", image: "/hairdresser1.jpg" },
  { id: 5, category: "Frisör", image: "/hairdresser2.jpg" },
  { id: 6, category: "Frisör", image: "/hairdresser3.jpg" },
];

export const PRICES = [
  {
    id: 1,
    category: "Ansiktsbehandling",
    services: [
      {
        title: "Ansiktsbehandling Klassisk",
        duration: "55 minuter",
        price: "995 kr",
      },
      {
        title: "Ansiktsbehandling Klassisk",
        duration: "85 minuter",
        price: "1 395 kr",
      },
    ],
  },
  {
    id: 2,
    category: "Manikyr",
    services: [
      {
        title: "Borttagning Akryl",
        duration: "25 minuter",
        price: "250 kr",
      },
      {
        title: "Borttagning Géle",
        duration: "25 minuter",
        price: "200 kr",
      },
      {
        title: "Borttagning gellack",
        duration: "20 minuter",
        price: "150 kr",
      }
    ],
  },
  {
    id: 3,
    category: "Massage",
    services: [
      {
        title: "Aromamassage",
        duration: "55 minuter",
        price: "995 kr",
      },
      {
        title: "Aromamassage 85 min",
        duration: "85 minuter",
        price: "1 395 kr",
      }
    ],
  },
  {
    id: 4,
    category: "Ögonbryn Färg",
    services: [
      {
        title: "Färg & Vaxning Ögonbryn",
        duration: "25 minuter",
        price: "495 kr",
      },
      {
        title: "Färgning av Fransar & Bryn",
        duration: "25 minuter",
        price: "495 kr",
      },
      {
        title: "Färgning av Ögonbryn",
        duration: "15 minuter",
        price: "295 kr",
      }
    ],
  },
  {
    id: 5,
    category: "Ögonfransförlängning",
    services: [
      {
        title: "Fransförlängning Nytt sett - SINGEL (naturlig)",
        duration: "75 minuter",
        price: "795 kr",
      },
      {
        title: "Fransförlängning Påfyllning - SINGEL (naturlig)",
        duration: "55 minuter",
        price: "695 kr",
      },
    ],
  },
  {
    id: 6,
    category: "Paket",
    services: [
      {
        title: "Fotspa & Pedikyr",
        duration: "85 minuter",
        price: "1 295 kr",
      },
      {
        title: "Express Manikyr & Handspa & Hand massage",
        duration: "55 minuter",
        price: "895 kr",
      },
      {
        title: "Facial & Body Oil Massage",
        duration: "85 minuter",
        price: "1 395 kr",
      },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Kontaktuppgifter",
  details: [
    { label: "Adress", value: "Kungens Gata 22 , 144 44 Stockholm" },
    { label: "Telefon", value: "0735 355 558" },
    { label: "Email", value: "info@beautysalon.com" },
  ],
};

export const SOCIALS = {
  title: "Följ oss",
  links: [
    { label: "Facebook", icon: FaFacebook , url: "https://facebook.com" },
    { label: "Instagram", icon: FaInstagramSquare, url: "https://instagram.com" },
  ],
};

export const FOOTER_OPENING_HOURS = {
  title: "Öppettider",
  hours: [
    { day: "Måndag - Fredag", time: "09:00 - 18:00" },
    { day: "Lördag", time: "10:00 - 16:00" },
    { day: "Söndag", time: "Stängt" },
  ],
};
