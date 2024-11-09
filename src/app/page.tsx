import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import TravelCard from "./ui/TravelCard";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Image
        src="/images/banner.jpg"
        alt="alibaba-banner"
        width={300}
        height={300}
        layout="responsive"
      />
      <TravelCard />
    </Container>
  );
}
