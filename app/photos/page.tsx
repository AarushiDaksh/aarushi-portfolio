import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/7.jpg",
            alt: "R",
            href: "",
          },
          {
            src: "/photos/1.jpg",
            alt: "S",
            href: "",
          },
          {
            src: "/photos/2.jpg",
            alt: "E",
            href: "",
          },
          {
            src: "/photos/8.jpg",
            alt: "T",
            href: "",
          },
          {
            src: "/photos/4.jpg",
            alt: "C",
            href: "",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/9.jpg", alt: "R" },
          { src: "/photos/14.jpg", alt: "B" },
          { src: "/photos/19.jpg", alt: "B" },
           { src: "/photos/16.jpg", alt: "B" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/3.jpg", alt: "R" },
          { src: "/photos/5.jpg", alt: "B" },
          { src: "/photos/17.jpg", alt: "S" },
          { src: "/photos/15.jpg", alt: "E" },
          { src: "/photos/6.jpg", alt: "T" },
        ]}
      />
    </section>
  );
}
