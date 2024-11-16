"use client";

import { Box, Button, MobileStepper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useState } from "react";
import alibabaImg from "../../../public/images/carousel/alibaba-hotel.jpg";
import dadHotelImg from "../../../public/images/carousel/dad-hotel.jpg";
import safarCardImg from "../../../public/images/carousel/safar-card.png";
import tripCardImg from "../../../public/images/carousel/trip-card.jpg";

const carouselImages = [safarCardImg, dadHotelImg, alibabaImg, tripCardImg];

const Carousel = () => {
  const [number, setNumber] = useState<number>(0);
  const firstIndex = number;
  const secondIndex = (number + 1) % carouselImages.length;

  const onNext = () => {
    setNumber((prev) => (prev + 1) % carouselImages.length);
  };

  const onPrev = () => {
    setNumber(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Image
            src={carouselImages[firstIndex]}
            alt="carousel image"
            layout="responsive"
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Image
            src={carouselImages[secondIndex]}
            alt="carousel image"
            layout="responsive"
          />
        </Grid>
      </Grid>
      <MobileStepper
        variant="dots"
        steps={carouselImages.length}
        activeStep={number}
        position="static"
        onClick={(e) => console.log(e)}
        backButton={<Button onClick={onPrev}>Back</Button>}
        nextButton={<Button onClick={onNext}>Next</Button>}
      />
    </Box>
  );
};

export default Carousel;
