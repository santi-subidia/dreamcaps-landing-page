"use client";

import { useCallback, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
}

export function useTilt3D(options: TiltOptions = {}) {
  const {
    maxTilt = 8,
    perspective = 1200,
    scale = 1.03,
    speed = 400,
    glare = true,
  } = options;

  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !ref.current) return;

      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const xPercent = (x - centerX) / centerX;
      const yPercent = (y - centerY) / centerY;

      const rotateY = xPercent * maxTilt;
      const rotateX = -yPercent * maxTilt;

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, 1)`;

      if (glare) {
        const glareEl = el.querySelector("[data-tilt-glare]") as HTMLElement | null;
        if (glareEl) {
          glareEl.style.opacity = "0.15";
          // Radial gradient follows cursor position
          glareEl.style.background = `radial-gradient(circle at ${50 + xPercent * 30}% ${50 + yPercent * 30}%, rgba(255,255,255,0.3) 0%, transparent 60%)`;
        }
      }
    },
    [prefersReducedMotion, maxTilt, perspective, scale, glare],
  );

  const handleMouseLeave = useCallback(() => {
    if (prefersReducedMotion || !ref.current) return;
    const el = ref.current;

    el.style.transition = `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)`;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    if (glare) {
      const glareEl = el.querySelector("[data-tilt-glare]") as HTMLElement | null;
      if (glareEl) {
        glareEl.style.opacity = "0";
      }
    }

    setTimeout(() => {
      if (el) el.style.transition = "";
    }, speed);
  }, [prefersReducedMotion, perspective, speed, glare]);

  const handleMouseEnter = useCallback(() => {
    if (prefersReducedMotion || !ref.current) return;
    ref.current.style.transition = "";
  }, [prefersReducedMotion]);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
  };
}