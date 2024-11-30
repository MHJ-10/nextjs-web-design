import Container from "@mui/material/Container";
import Image from "next/image";
import Carousel from "./ui/Carousel";
import OtherServices from "./ui/OtherServices";
import TravelCard from "./ui/TravelCard";
import TravelsTable from "./ui/TravelsTable";

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
      <TravelsTable />
      <OtherServices />
      <Carousel />
    </Container>
  );
}
