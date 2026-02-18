"use client";
import Image from "next/image";
import { useState } from "react";

const InnovativeTechIcon = ({ item }: { item: string }) => {
  const [exists, setExists] = useState(true);

  const src = `/icons/${item.split(" ").join("").toLowerCase()}.png`;

  return (
    exists && (
      <Image
        src={src}
        alt={item}
        width={20}
        height={20}
        onError={() => setExists(false)}
      />
    )
  );
};

export default InnovativeTechIcon;
