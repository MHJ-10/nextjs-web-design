"use client";

import { Card, Tab, Tabs, Typography } from "@mui/material";
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
    <Card>
      <Tabs
        dir="rtl"
        value={selectedTab}
        onChange={(_, tab) => setSelectedTab(tab)}
        centered
      >
        <Tab icon={<DomesticFlight fontSize="large" />} label="پرواز داخلی" />
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
      <Typography variant="h3">{selectedTab}</Typography>
    </Card>
  );
};

export default TravelCard;
