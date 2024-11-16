import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import TravelCard from "./ui/TravelCard";
import OtherServices from "./ui/OtherServices";

export default function Home() {
  return (
    <Container maxWidth="xl" dir="rtl">
      <Image
        src="/images/banner.jpg"
        alt="alibaba-banner"
        width={300}
        height={300}
        layout="responsive"
      />
      <TravelCard />
      <OtherServices />
    </Container>
  );
}
