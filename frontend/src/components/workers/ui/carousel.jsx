import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel = ({ children, orientation = "horizontal", className = "" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: orientation === "horizontal" ? "x" : "y",
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  return (
    <div className={`relative ${className}`}>
      <div ref={emblaRef} className="overflow-hidden">
        <div
          className={`flex ${
            orientation === "horizontal" ? "" : "flex-col"
          }`}
        >
          {children}
        </div>
      </div>

      {/* Prev */}
      <button
        onClick={scrollPrev}
        disabled={!canPrev}
        className={`absolute h-8 w-8 rounded-full border bg-white shadow flex items-center justify-center
          ${
            orientation === "horizontal"
              ? "left-2 top-1/2 -translate-y-1/2"
              : "top-2 left-1/2 -translate-x-1/2 rotate-90"
          }
          disabled:opacity-40`}
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      {/* Next */}
      <button
        onClick={scrollNext}
        disabled={!canNext}
        className={`absolute h-8 w-8 rounded-full border bg-white shadow flex items-center justify-center
          ${
            orientation === "horizontal"
              ? "right-2 top-1/2 -translate-y-1/2"
              : "bottom-2 left-1/2 -translate-x-1/2 rotate-90"
          }
          disabled:opacity-40`}
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

const CarouselItem = ({ children, className = "" }) => {
  return (
    <div className={`min-w-0 shrink-0 grow-0 basis-full ${className}`}>
      {children}
    </div>
  );
};

export { Carousel, CarouselItem };
