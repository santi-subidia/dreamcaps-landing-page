"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MessageCircle } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTilt3D } from "@/hooks/useTilt3D";
import type { Product } from "@/data/products";
import { WHATSAPP_NUMBER } from "@/data/products";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ProductSectionProps {
  product: Product;
  index: number;
}

export default function ProductSection({ product, index }: ProductSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMessage)}`;
  const isEven = index % 2 === 0;

  const containerRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // 3D tilt for image card and name
  const imageTilt = useTilt3D({ maxTilt: 6, perspective: 1000, scale: 1.02 });
  const nameTilt = useTilt3D({ maxTilt: 4, perspective: 800, scale: 1.01, glare: false });

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current) return;

      // Image parallax
      gsap.to(imageWrapperRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Image reveal
      gsap.from(imageWrapperRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // Staggered entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(nameRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      })
        .from(
          lineRef.current,
          {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          ctaRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2",
        );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] },
  );

  return (
    <section
      id={`producto-${product.id}`}
      ref={containerRef}
      className="relative flex min-h-[85vh] items-center overflow-hidden py-16 md:py-24 lg:py-32"
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/15 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col gap-8 md:gap-12 lg:gap-16 ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image with 3D tilt */}
          <div
            ref={imageWrapperRef}
            className={`relative w-full md:w-[58%] lg:w-[55%] ${
              isEven ? "md:pr-6 lg:pr-10" : "md:pl-6 lg:pl-10"
            }`}
          >
            <div
              ref={imageTilt.ref}
              onMouseMove={imageTilt.onMouseMove}
              onMouseLeave={imageTilt.onMouseLeave}
              onMouseEnter={imageTilt.onMouseEnter}
              className="relative aspect-square w-full overflow-hidden rounded-2xl bg-brand-800 shadow-2xl shadow-black/50 ring-1 ring-white/5 md:aspect-[4/5] lg:rounded-3xl"
              style={{ willChange: "transform" }}
            >
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority={index < 2}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950/50 to-transparent" />
              <div
                data-tilt-glare
                className="pointer-events-none absolute inset-0 z-10 rounded-2xl md:rounded-3xl"
                style={{ opacity: 0, transition: "opacity 400ms ease-out" }}
              />
            </div>
          </div>

          {/* Text content */}
          <div
            className={`flex w-full flex-col justify-center md:w-[42%] lg:w-[45%] ${
              isEven ? "md:text-left" : "md:text-right"
            }`}
          >
            {/* Product name — 3D tilt */}
            <div
              ref={nameTilt.ref}
              onMouseMove={nameTilt.onMouseMove}
              onMouseLeave={nameTilt.onMouseLeave}
              onMouseEnter={nameTilt.onMouseEnter}
              style={{ willChange: "transform" }}
            >
              <h3
                ref={nameRef}
                className="font-display text-5xl font-bold leading-[0.9] tracking-wider text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6rem]"
              >
                {product.name}
              </h3>
            </div>

            {/* Accent line */}
            <div
              ref={lineRef}
              className={`mt-5 h-0.5 w-14 origin-left bg-accent/60 md:mt-6 md:w-20 ${
                !isEven ? "md:origin-right md:self-end" : ""
              }`}
            />

            {/* CTA */}
            <div className="mt-5 md:mt-6">
              <a
                ref={ctaRef}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-whatsapp/25 transition-all duration-300 hover:bg-whatsapp-dark hover:shadow-xl hover:shadow-whatsapp/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
                aria-label={`Consultar por ${product.name} por WhatsApp`}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Consultar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}