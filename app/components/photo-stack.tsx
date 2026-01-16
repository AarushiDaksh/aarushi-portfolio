"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type StackImage = {
  src: string;
  alt: string;
  href?: string;
};

export default function PhotoStack({
  images,
}: {
  images: StackImage[];
}) {
  // limit to 5 like reference
  const list = images.slice(0, 5);

  const rotations = [-10, -4, 0, 5, 10];
  const yOffsets = [8, 0, -6, 0, 8];

  return (
    <div className="relative mx-auto mt-10 sm:mt-12 w-full max-w-5xl">
      <div className="relative flex items-center justify-center gap-0">
        {list.map((img, i) => {
          const Card = (
            <motion.div
              key={img.src + i}
              initial={{ opacity: 0, y: 20, rotate: rotations[i] ?? 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[i] ?? 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.03, rotate: 0 }}
              className="
                relative
                h-[170px] w-[250px]
                sm:h-[200px] sm:w-[300px]
                md:h-[220px] md:w-[320px]
                rounded-2xl overflow-hidden
                shadow-xl ring-1 ring-black/10 dark:ring-white/10
                bg-white/70 dark:bg-white/5 backdrop-blur
                -ml-6 sm:-ml-8
                first:ml-0
              "
              style={{
                transform: `rotate(${rotations[i] ?? 0}deg) translateY(${yOffsets[i] ?? 0}px)`,
                zIndex: 50 - i,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 250px, 320px"
                priority={i === 0}
              />

              {/* subtle bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
            </motion.div>
          );

          return img.href ? (
            <Link key={img.src + i} href={img.href} className="block">
              {Card}
            </Link>
          ) : (
            Card
          );
        })}
      </div>
    </div>
  );
}
