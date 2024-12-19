"use client";

import { Box, MobileStepper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import alibabaImg from "../../../public/images/carousel/alibaba-hotel.jpg";
import dadHotelImg from "../../../public/images/carousel/dad-hotel.jpg";
import safarCardImg from "../../../public/images/carousel/safar-card.png";
import tripCardImg from "../../../public/images/carousel/trip-card.jpg";

const carouselImages = [safarCardImg, dadHotelImg, alibabaImg, tripCardImg];

const Carousel = () => {
  const [number, setNumber] = useState<number>(0);
  const stepperRef = useRef<HTMLDivElement>(null);

  const firstIndex = number;
  const secondIndex = (number + 1) % carouselImages.length;

  useEffect(() => {
    const interval = setInterval(
      () => setNumber((prev) => (prev + 1) % carouselImages.length),
      5000
    );

    return () => clearInterval(interval);
  }, []);

  const onDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const stepper = stepperRef.current;
    const dots = stepper?.querySelector("div")?.querySelectorAll("div");
    dots?.forEach((dot, i) => {
      if (dot === e.target) setNumber(i);
    });
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }} height={{ xs: 200, sm: 255 }}>
          <Image
            src={carouselImages[firstIndex]}
            alt="carousel image"
            layout="responsive"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} height={{ xs: 200, sm: 255 }}>
          <Image
            src={carouselImages[secondIndex]}
            alt="carousel image"
            layout="responsive"
          />
        </Grid>
      </Grid>
      <MobileStepper
        ref={stepperRef}
        variant="dots"
        steps={carouselImages.length}
        activeStep={number}
        position="static"
        onClick={onDotClick}
        backButton={<p></p>}
        nextButton={<p></p>}
      />
    </Box>
  );
};

export default Carousel;
