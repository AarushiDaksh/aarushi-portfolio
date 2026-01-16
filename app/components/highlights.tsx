import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";
import Header from "app/components/Header";
import { Navbar } from "app/components/nav";
import Footer from "app/components/footer";
import PhotoStack from "app/components/photo-stack";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  const stackImages = [
    { src: "/photos/7.jpg", alt: "Photo 1" },
    { src: "/photos/19.jpg", alt: "Photo 2" },
    { src: "/photos/6.jpg", alt: "Photo 3" },
    { src: "/photos/Xebia.png", alt: "Photo 4" },
    { src: "/photos/8.jpg", alt: "Photo 5" },
  ];

  return (
    <section id="highlights" className="px-3 sm:px-0 ">
      

      <h1 className="mb-2 mt-12 text-xl font-medium">Highlights</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">
        A few moments, wins, and snapshots from my journey.
      </p>

      {/* ✅ Parth-style stacked photos */}
      <PhotoStack images={stackImages} />

      

      
    </section>
  );
}
