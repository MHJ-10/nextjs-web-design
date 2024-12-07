import { AndroidOutlined, Apple, ChevronLeft } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";

const DownloadAppCard = () => {
  return (
    <Card sx={{ my: 5 }} variant="outlined">
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          width: "100%",
          pt: 1,
          px: { xs: 1, md: 8 },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "center" },
          gap: { xs: 3, md: 7 },
        }}
      >
        <Image
          src="/images/download-qrcode.png"
          width={150}
          height={185}
          alt="دانلود اپلیکیشن علی‌بابا"
        />

        <Box
          sx={{ height: { xs: 1, md: 290 }, flexGrow: { xs: 0, lg: 1 } }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={3}
          alignItems="start"
        >
          <Box color="text.secondary">
            <Typography variant="h6">اپلیکیشن علی‌بابا</Typography>
            <Typography fontSize="1.2rem">
              سریع‌تر و مطمئن‌تر به سفر بروید
            </Typography>
          </Box>
          <Button
            variant="text"
            endIcon={<ChevronLeft sx={{ mr: 1 }} />}
            size="large"
            color="info"
            sx={{ fontSize: "1.1rem", fontWeight: 400 }}
          >
            مشاهده لینک‌ های دانلود
          </Button>
          <Typography
            variant="caption"
            display="flex"
            alignItems="center"
            sx={{ color: "#bec5cb" }}
          >
            {<AndroidOutlined />}
            {<Apple />}
            قابلیت نصب روی Android و iOS
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "250px", sm: "335px" } }}>
          <Image
            src="/images/mobile-app.webp"
            layout="responsive"
            width={300}
            height={250}
            alt="اپلیکیشن موبایل علی‌بابا"
          />
        </Box>
      </Box>
    </Card>
  );
};

export default DownloadAppCard;
