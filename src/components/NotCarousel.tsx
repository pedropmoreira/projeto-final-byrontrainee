"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CardSm from "./CardSm";

export const NotCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      delay: 3000,
    }),
  ]);

  return (
    <div className="embla overflow-hidden rounded-2xl" ref={emblaRef}>
      <div className="embla__container flex h-full w-full px-4 gap-4">
        <CardSm></CardSm>
        <CardSm></CardSm>
      </div>
    </div>
  );
};
