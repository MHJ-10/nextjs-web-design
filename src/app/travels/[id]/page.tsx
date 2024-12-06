import { fetchTravelById } from "@/app/lib/data";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";

const TravelPage = async ({ params }: { params: { id: string } }) => {
  const travelId = params.id;
  const travel = await fetchTravelById(travelId);

  return (
    <Card
      dir="rtl"
      sx={{ maxWidth: 450, mt: 2, mx: { xs: 5, sm: "auto" } }}
      variant="elevation"
    >
      <CardMedia>
        <Image
          src="/images/travel-card.webp"
          width={450}
          height={250}
          layout="responsive"
          alt={`سفر ${travel.origin} به ${travel.destination}`}
        />
      </CardMedia>
      <CardContent>
        <Typography>مبدا: {travel.origin}</Typography>
        <Typography>مقصد: {travel.destination}</Typography>
        <Typography>
          تاریخ: {new Date(travel.date).toLocaleDateString("fa-IR")}
        </Typography>
        <Typography>قیمت: {travel.price} تومان</Typography>
      </CardContent>
      <CardActions>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          gap={2}
          sx={{
            width: "100%",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button variant="contained" sx={{ width: "100%" }}>
            مشاهده اطلاعات بیشتر
          </Button>
          <Button variant="contained" sx={{ width: "100%" }}>
            خرید بلیط
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default TravelPage;
