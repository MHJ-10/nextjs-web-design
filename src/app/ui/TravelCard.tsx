"use client";

import { Card, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
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
  const [selectedTab, setSelectedTab] = useState<number>(0);

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
        value={selectedTab}
        variant="fullWidth"
        onChange={(_, tab) => setSelectedTab(tab)}
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
        />
        <Tab icon={<ForeignFlight fontSize="large" />} label="پرواز خارجی" />
        <Tab icon={<Train fontSize="large" />} label="قطار" />
        <Tab icon={<Bus fontSize="large" />} label="اتوبوس" />
        <Tab icon={<Tour fontSize="large" />} label="تور" />
        <Tab icon={<Hotel fontSize="large" />} label="هتل" />
        <Tab
          icon={<Accommodation fontSize="large" />}
          label="ویلا و اقامتگاه"
        />
      </Tabs>
      <Divider orientation="horizontal" />
      <Typography variant="h3">{selectedTab}</Typography>
      <Typography variant="h3">این قسمت باید در آینده تکمیل شود</Typography>
    </Card>
  );
};

export default TravelCard;
