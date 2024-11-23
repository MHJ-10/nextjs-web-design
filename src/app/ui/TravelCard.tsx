"use client";

import { Card, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useTravelTab } from "../context/TravelTabContext";
import {
  Accommodation,
  Bus,
  DomesticFlight,
  ForeignFlight,
  Hotel,
  Tour,
  Train,
} from "./SVGIcons";

const TravelCard = () => {
  const { tab, handleChangeTab } = useTravelTab();

  return (
    <Card
      dir="rtl"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        p: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tabs
        value={tab}
        variant="fullWidth"
        onChange={(_, value) => handleChangeTab(value)}
        sx={{
          width: "100%",
          "& .MuiTabs-indicator": {
            backgroundColor: "#236ead",
            height: "4px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          },
          "& .MuiTab-root.Mui-selected": {
            color: "#236ead",
          },
          "& .MuiTab-root": {
            color: "#4e5256",
            mx: "15px",
            fontWeight: "400",
            fontSize: "1rem",
          },
        }}
      >
        <Tab
          icon={<DomesticFlight fontSize="large" />}
          color="secondary"
          label="پرواز داخلی"
          value="پرواز داخلی"
        />
        <Tab
          icon={<ForeignFlight fontSize="large" />}
          label="پرواز خارجی"
          value="پرواز خارجی"
        />
        <Tab icon={<Train fontSize="large" />} label="قطار" value="قطار" />
        <Tab icon={<Bus fontSize="large" />} label="اتوبوس" value="اتوبوس" />
        <Tab icon={<Tour fontSize="large" />} label="تور" value="تور" />
        <Tab icon={<Hotel fontSize="large" />} label="هتل" value="هتل" />
        <Tab
          icon={<Accommodation fontSize="large" />}
          label="ویلا و اقامتگاه"
          value="ویلا و اقامتگاه"
        />
      </Tabs>
      <Divider orientation="horizontal" />
      <Typography variant="h3">{tab}</Typography>
      <Typography variant="h3">این قسمت باید در آینده تکمیل شود</Typography>
    </Card>
  );
};

export default TravelCard;
