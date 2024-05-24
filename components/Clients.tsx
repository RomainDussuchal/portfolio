import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/constant";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfed clients</span>
      </h1>
      <div className="flex flex-col items-center justify-center max-lg:mt-10 mt-14">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16  max-lg:mt-10 mt-14">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={img}
                alt={name}
                width={100}
                height={100}
                className="md:w-10 w-5"
              />
              <Image
                src={nameImg}
                alt={name}
                width={100}
                height={100}
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
