import React from "react";

import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/constant";

export function Grid() {
  return (
    <section id="about" className="relative">
      <BentoGrid className="w-full py-12">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.id === 1 ? "md:col-span-2 md:row-span-2" : ""}
            img={item.img}
            imgClassName={item.imgClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
