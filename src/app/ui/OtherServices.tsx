import { Box, Card, Grid2, Typography } from "@mui/material";
import Image from "next/image";

interface ServiceCard {
  imageSrc: string;
  text: string;
}

const serviceCards: ServiceCard[] = [
  {
    text: "سفر‌کارت (سازمانی)",
    imageSrc:
      "https://cdn.alibaba.ir/h2/desktop/assets/images/safarcard-3dc2c4c4.svg",
  },
  {
    text: "بیمه مسافرتی",
    imageSrc:
      "https://cdn.alibaba.ir/h2/desktop/assets/images/insurance-icon-bb51c425.svg",
  },
  {
    text: "ویزای سفر",
    imageSrc:
      "https://cdn.alibaba.ir/h2/desktop/assets/images/visa-icon-d8507c8e.svg",
  },
  {
    text: "تور گروهی",
    imageSrc:
      "https://cdn.alibaba.ir/h2/desktop/assets/images/gtour-icon-5e641f1b.svg",
  },
];

const OtherServices = () => {
  return (
    <Box sx={{ my: "30px" }}>
      <Typography variant="h6" color="textSecondary">
        سایر خدمات علی‌بابا
      </Typography>
      <Card
        variant="outlined"
        sx={{
          flexGrow: 1,
          p: "30px",
          mt: "15px",
        }}
      >
        <Grid2 container spacing={3}>
          {serviceCards.map((card) => (
            <Grid2
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <Image
                src={card.imageSrc}
                alt={card.text}
                width={50}
                height={50}
              />
              <Typography variant="body1">{card.text}</Typography>
            </Grid2>
          ))}
        </Grid2>
      </Card>
    </Box>
  );
};

export default OtherServices;
