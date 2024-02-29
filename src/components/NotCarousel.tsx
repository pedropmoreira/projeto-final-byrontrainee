"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CardSm from "./CardSm";
import noticiasData from "@/datateams/noticiasData";

export const NotCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      delay: 3000,
    }),
  ]);

  const notRecent = noticiasData.noticias.filter(
    (notRec) => notRec.notNew === "sim"
  );

  // return notRecent.map((notExibida) => (
  //   <div className="embla overflow-hidden rounded-3xl" ref={emblaRef}>
  //     <div className="embla__container flex h-full w-full px-4 gap-4">
  //       <CardSm id={`${notExibida.id}`}></CardSm>
  //     </div>
  //   </div>
  // ));

  return (
    <div className="embla overflow-hidden rounded-3xl" ref={emblaRef}>
      <div className="embla__container flex h-full w-full px-4 gap-4">
        <CardSm></CardSm>
        <CardSm></CardSm>
      </div>
    </div>
  );
};
