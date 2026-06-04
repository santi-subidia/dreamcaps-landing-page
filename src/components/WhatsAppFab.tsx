"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function WhatsAppFab() {
  const message = "Hola! Quiero consultar sobre las gorras.";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-whatsapp/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-whatsapp/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
    </a>
  );
}