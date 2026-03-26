"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  images: string[];
  imageAlt: string;
  tags: string[];
  title: string;
  description: string;
  impact: string;
  impactLabel: string;
  icon: string;
  role: string;
  imagePosition?: "left" | "right";
}

export default function ProjectCard({
  images,
  imageAlt,
  tags,
  title,
  description,
  impact,
  impactLabel,
  icon,
  role,
  imagePosition = "left",
}: ProjectCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }

  useEffect(() => {
    updateScrollState();
  }, []);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.7;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div
        className={`${imagePosition === "right" ? "lg:order-last " : ""}relative group`}
      >
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="snap-start shrink-0 rounded-xl overflow-hidden bg-surface-container-low shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={`${imageAlt} ${i + 1}`}
                className="h-[400px] w-auto object-cover hover:scale-105 transition-transform duration-700 "
                src={src}
              />
            </div>
          ))}
        </div>

        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-primary hover:bg-white transition-colors opacity-0 group-hover:opacity-100 z-10"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined text-xl">
              chevron_left
            </span>
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-primary hover:bg-white transition-colors opacity-0 group-hover:opacity-100 z-10"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined text-xl">
              chevron_right
            </span>
          </button>
        )}
      </div>
      <div className="space-y-6">
        <div className="flex gap-3 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="ghost-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-3xl font-bold text-primary tracking-tight">
          {title}
        </h4>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          {description}
        </p>
        <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary">
          <p className="text-primary font-bold text-xl">{impact}</p>
          <p className="text-secondary text-sm font-medium uppercase mt-1">
            {impactLabel}
          </p>
        </div>
        <div className="flex items-center gap-2 text-primary font-semibold">
          <span className="material-symbols-outlined">{icon}</span>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}
