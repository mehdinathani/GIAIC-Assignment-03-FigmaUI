import Image from "next/image";
import React, { useEffect, useState } from "react";

import ContentSection from "./components/ContentSection";

export default function Home() {
  return (
    <div>
      <ContentSection
        text="We provide high quality products just for you
to make your life better and happier"
        imageSrc="/assets/Image-container.png"
        reverse={true}
        bgColor="bg-[#043873]"
      />
      <ContentSection
        text="We provide high quality products just for you
to make your life better and happier"
        imageSrc="/assets/Image-container.png"
        reverse={true}
        bgColor="bg-[#043873]"
      />

    </div>);
}
