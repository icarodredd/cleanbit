"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function Card({
  title,
  description,
  src,
  alt,
}: {
  title: string;
  description: string;
  src?: string;
  alt?: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-cleanlight relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-cleanlight"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-smq mt-2 dark:text-cleanlight"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={src ? src : "https://picsum.photos/1000"}
            height="2000"
            width="2000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={alt ? alt : "Placeholder Image"}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
