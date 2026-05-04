"use client";

import Image from "next/image";
import { A11y, Keyboard, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type PortfolioSliderProps = {
  images: string[];
  projectName: string;
};

export default function PortfolioSlider({ images, projectName }: PortfolioSliderProps) {
  if (images.length === 0) {
    return (
      <div className="flex min-h-[320px] items-center justify-center bg-slate-900/60 text-slate-400">
        No project images available.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg">
      <Swiper
        modules={[Pagination, Keyboard, A11y, Autoplay]}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="portfolio-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="relative h-[280px] overflow-hidden rounded-lg md:h-[520px]">
              <Image className="object-cover"
                src={image} alt={`${projectName} screenshot ${index + 1}`}
                fill sizes="(max-width: 768px) 100vw, 1200px"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}