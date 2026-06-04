"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ProductSection from "@/components/ProductSection";
import { products } from "@/data/products";

gsap.registerPlugin(useGSAP);

export default function ProductGrid() {
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".products-line", {
        scaleX: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          ".products-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".products-subtitle",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        );
    },
    { scope: headerRef },
  );

  return (
    <section id="productos" className="relative">
      {/* Section header */}
      <div ref={headerRef} className="mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8">
        <div className="products-line mx-auto mb-8 h-px w-16 bg-accent sm:mb-10 sm:w-24" />

        <h2 className="products-title text-center font-display text-5xl font-bold tracking-wider text-white sm:text-6xl md:text-7xl">
          NUESTRAS GORRAS
        </h2>

        <p className="products-subtitle mt-4 text-center text-brand-300 sm:mt-6 sm:text-lg">
          Tocá &ldquo;Consultar&rdquo; y hablanos directamente por WhatsApp
        </p>
      </div>

      {/* Individual product showcases */}
      <div>
        {products.map((product, index) => (
          <ProductSection
            key={product.id}
            product={product}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}