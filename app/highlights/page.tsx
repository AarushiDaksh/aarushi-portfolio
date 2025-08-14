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
      <h1 className="mb-6 text-xl font-medium">Highlight</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/7.jpg",
            alt: "R",
            href: "",
          },


          
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/19.jpg", alt: "B" },
           { src: "/photos/6.jpg", alt: "B" },
           { src: "/photos/Xebia.png", alt: "B" },
        ]}
      />
      
      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/8.jpg", alt: "T" },
        ]}
      />
    </section>
  );
}
