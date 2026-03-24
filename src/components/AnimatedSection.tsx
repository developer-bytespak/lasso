"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CSSProperties, ReactNode } from "react";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-scale"
  | "fade";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: Animation;
  duration?: number;
}

const offsets: Record<Animation, CSSProperties> = {
  "fade-up": { transform: "translateY(50px)" },
  "fade-down": { transform: "translateY(-50px)" },
  "fade-left": { transform: "translateX(-50px)" },
  "fade-right": { transform: "translateX(50px)" },
  "fade-scale": { transform: "scale(0.93)" },
  fade: {},
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  duration = 0.85,
}: Props) {
  const { ref, isVisible } = useScrollReveal();

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0,0) scale(1)" : undefined,
    ...(!isVisible ? offsets[animation] : {}),
    transition: `opacity ${duration}s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform ${duration}s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
