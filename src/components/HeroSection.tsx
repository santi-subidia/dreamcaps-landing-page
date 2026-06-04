"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EXCLUSIVE_LABEL } from "@/data/products";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current) return;

      // Logo: scale from 0 + stagger rotation
      gsap.from(".hero-logo-ring", {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.4)",
      });

      gsap.from(".hero-logo-img", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.15,
      });

      // Title: characters slide up from below with stagger
      const titleChars = containerRef.current.querySelectorAll(".hero-char");
      gsap.from(titleChars, {
        y: 80,
        opacity: 0,
        rotateX: -40,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.4,
      });

      // Subtitle: fade + slide
      gsap.from(".hero-subtitle", {
        y: 15,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.9,
      });

      // CTA: scale bounce
      gsap.from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 1.1,
      });

      // Scroll indicator: fade in
      gsap.from(".hero-scroll", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 1.4,
      });

      // Parallax on scroll — content drifts up
      gsap.to(".hero-content", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // BG image scales down + fades on scroll
      gsap.to(".hero-bg", {
        opacity: 0.2,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Logo glow pulse — continuous
      gsap.to(".hero-logo-pulse", {
        scale: 1.4,
        opacity: 0.4,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] },
  );

  // Split DREAMCAPS into individual characters for stagger animation
  const titleChars = "DREAMCAPS".split("");

  return (
    <header ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-950">
      {/* Background image */}
      <div className="hero-bg absolute inset-0">
        <Image
          src="/images/group-photo.webp"
          alt="Colección de gorras Dreamcaps"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-brand-950" />

      {/* Noise texture */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="hero-content relative z-10 flex h-full flex-col items-center justify-center gap-4 px-4 text-center sm:gap-5 md:gap-6">
        {/* Logo with animated ring + pulse */}
        <div className="hero-logo relative">
          <div className="hero-logo-pulse absolute -inset-4 rounded-full bg-accent/15 blur-2xl" />
          <div className="hero-logo-ring absolute -inset-1.5 rounded-full ring-2 ring-white/10" />
          <Image
            src="/images/logo.jpeg"
            alt="Dreamcaps logo"
            width={120}
            height={120}
            className="hero-logo-img relative rounded-full shadow-2xl sm:h-[140px] sm:w-[140px]"
            priority
          />
        </div>

        {/* Title — each character animated individually */}
        <h1 className="font-display text-6xl font-bold tracking-wider sm:text-8xl md:text-9xl" style={{ perspective: "600px" }}>
          {titleChars.map((char, i) => (
            <span
              key={i}
              className="hero-char inline-block bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent"
              style={{ textShadow: "0 0 40px rgba(255,45,85,0.2)" }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Exclusive label subtitle */}
        <p className="hero-subtitle font-mono text-xs tracking-[0.2em] text-brand-200 sm:text-sm md:text-sm">
          {EXCLUSIVE_LABEL}
        </p>

        {/* CTA */}
        <a
          href="#productos"
          className="hero-cta mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:mt-6"
          aria-label="Ver productos"
        >
          Ver gorras
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-brand-400">
            Scroll
          </span>
          <div className="relative h-8 w-px overflow-hidden bg-brand-600">
            <div className="absolute inset-x-0 top-0 h-full animate-pulse bg-gradient-to-b from-accent to-transparent" />
          </div>
        </div>
      </div>
    </header>
  );
}