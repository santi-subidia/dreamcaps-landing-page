import { MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/data/products";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-brand-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        {/* Logo & name */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-display text-2xl tracking-widest text-white">DREAMCAPS</span>
          <span className="text-sm text-brand-400">Gorras New Era originales</span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-800 text-brand-200 transition-all hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Instagram de Dreamcaps"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-800 text-brand-200 transition-all hover:bg-whatsapp hover:text-white hover:shadow-lg hover:shadow-whatsapp/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
            aria-label="WhatsApp de Dreamcaps"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-brand-700 to-transparent" />

        {/* Copyright */}
        <p className="text-xs text-brand-400">
          &copy; {currentYear} Dreamcaps. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}