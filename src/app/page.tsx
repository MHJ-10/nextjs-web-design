import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./ui/Carousel";
import DownloadAppCard from "./ui/DownloadAppCard";
import OtherServices from "./ui/OtherServices";
import TravelCard from "./ui/TravelCard";
import TravelsTable from "./ui/TravelsTable";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg" dir="rtl">
        <Image
          style={{ marginTop: 10 }}
          src="/images/banner.jpg"
          alt="alibaba-banner"
          width={300}
          height={300}
          layout="responsive"
        />
        <TravelCard />
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            mt: 2,
          }}
          variant="contained"
        >
          <Link
            href="/travels/new"
            style={{ textDecoration: "none", color: "black" }}
          >
            ایجاد سفر جدید
          </Link>
        </Button>
        <TravelsTable />
        <OtherServices />
        <Carousel />
        <DownloadAppCard />
      </Container>
    </>
  );
}
