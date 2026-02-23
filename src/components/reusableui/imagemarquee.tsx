"use client";

import Image, { StaticImageData } from "next/image";

const ImageMarquee = ({ images }: { images: StaticImageData[] }) => {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden rounded-2xl">
      <div className="flex w-max scroll-marquee">
        {doubled.map((img, i) => (
          <div
            key={i}
            className="relative w-80 h-52 mx-2 flex-shrink-0"
          >
            <Image
              src={img}
              alt="Service showcase"
              fill
              className="object-cover rounded-xl"
              sizes="320px"
            />
          </div>
        ))}
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-marquee {
          animation: marquee 20s linear infinite;
        }

        .scroll-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ImageMarquee;