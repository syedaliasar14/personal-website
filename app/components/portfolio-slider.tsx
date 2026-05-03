"use client";

import Image from "next/image";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type PortfolioSliderProps = {
  images: string[];
  projectName: string;
};

export default function PortfolioSlider({ images, projectName }: PortfolioSliderProps) {
  if (images.length === 0) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 text-slate-400">
        No project images available.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 p-3 md:p-5">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        className="portfolio-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="relative h-[280px] overflow-hidden rounded-[1.5rem] bg-slate-900 md:h-[520px]">
              <Image
                src={image}
                alt={`${projectName} screenshot ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}