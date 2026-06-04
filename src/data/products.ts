export const WHATSAPP_NUMBER = "542664172006";
export const INSTAGRAM_HANDLE = "@dreamcaps_sl";
export const INSTAGRAM_URL = "https://www.instagram.com/dreamcaps_sl/";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dreamcaps.com.ar";

export interface Product {
  id: string;
  name: string;
  image: string;
  alt: string;
  whatsappMessage: string;
}

export const EXCLUSIVE_LABEL = "ᴘʀᴏᴅᴜᴄᴛᴏ ɪᴍᴘᴏʀᴛᴀᴅᴏ ᴇ ᴇxᴄʟᴜsɪᴠᴏ";

export const products: Product[] = [
  {
    id: "gorra-new-era-x-duki",
    name: "New York Yankees",
    image: "/images/gorra-new-era-x-duki.webp",
    alt: "Gorra New York Yankees",
    whatsappMessage: "Hola! Me interesa la New Era x Duki. ¿Está disponible?",
  },
  {
    id: "gorra-new-york-yankees",
    name: "New Era x Duki",
    image: "/images/gorra-new-york-yankees.webp",
    alt: "Gorra New Era x Duki",
    whatsappMessage: "Hola! Me interesa la New York Yankees. ¿Está disponible?",
  },
  {
    id: "new-york-yankees-creamolive",
    name: "New York Yankees Cream/Olive",
    image: "/images/new-york-yankees-creamolive.webp",
    alt: "Gorra New York Yankees crema y oliva",
    whatsappMessage: "Hola! Me interesa la New York Yankees Cream/Olive. ¿Está disponible?",
  },
  {
    id: "new-era-graffiti-script",
    name: "New Era Graffiti Script",
    image: "/images/new-era-graffiti-script.webp",
    alt: "Gorra New Era Graffiti Script",
    whatsappMessage: "Hola! Me interesa la New Era Graffiti Script. ¿Está disponible?",
  },
  {
    id: "new-era-houston-astros",
    name: "New Era Houston Astros",
    image: "/images/new-era-houston-astros.webp",
    alt: "Gorra New Era Houston Astros",
    whatsappMessage: "Hola! Me interesa la New Era Houston Astros. ¿Está disponible?",
  },
  {
    id: "la-dodgers-roja",
    name: "Los Angeles Dodgers Roja",
    image: "/images/la-dodgers-roja.webp",
    alt: "Gorra Los Angeles Dodgers roja",
    whatsappMessage: "Hola! Me interesa la LA Dodgers Roja. ¿Está disponible?",
  },
  {
    id: "la-dodgers-default",
    name: "Los Angeles Dodgers",
    image: "/images/la-dodgers-default.webp",
    alt: "Gorra Los Angeles Dodgers clásica",
    whatsappMessage: "Hola! Me interesa la LA Dodgers. ¿Está disponible?",
  },
  {
    id: "la-dodgers-azul",
    name: "Los Angeles Dodgers Azul",
    image: "/images/la-dodgers-azul.webp",
    alt: "Gorra Los Angeles Dodgers azul",
    whatsappMessage: "Hola! Me interesa la LA Dodgers Azul. ¿Está disponible?",
  },
  {
    id: "la-dodgers-camuflada",
    name: "Los Angeles Dodgers Camuflada",
    image: "/images/la-dodgers-camuflada.webp",
    alt: "Gorra Los Angeles Dodgers camuflada",
    whatsappMessage: "Hola! Me interesa la LA Dodgers Camuflada. ¿Está disponible?",
  },
  {
    id: "la-dodgers",
    name: "Los Angeles Dodgers",
    image: "/images/la-dodgers.webp",
    alt: "Gorra Los Angeles Dodgers",
    whatsappMessage: "Hola! Me interesa la LA Dodgers. ¿Está disponible?",
  },
  {
    id: "chicago-white-sox",
    name: "Chicago White Sox",
    image: "/images/chicago-white-sox.webp",
    alt: "Gorra Chicago White Sox",
    whatsappMessage: "Hola! Me interesa la Chicago White Sox. ¿Está disponible?",
  },
];