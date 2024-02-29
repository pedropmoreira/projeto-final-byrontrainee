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
    <div className="embla overflow-hidden rounded-3xl" ref={emblaRef}>
      <div className="embla__container flex h-full w-full px-4 gap-4">
        {/* <img src="/img/noticia2.png" alt="" />
        <img src="/img/noticia2.png" alt="" />
        <img src="/img/noticia2.png" alt="" />
        <img src="/img/noticia2.png" alt="" />
        <img src="/img/noticia2.png" alt="" />
        <img src="/img/noticia2.png" alt="" />
        <img src="/img/noticia2.png" alt="" /> */}
        <CardSm id="1"></CardSm>
        <CardSm id="2"></CardSm>
        <CardSm id="5"></CardSm>
        <CardSm id="6"></CardSm>
        <CardSm id="10"></CardSm>
      </div>
    </div>
  );
};
