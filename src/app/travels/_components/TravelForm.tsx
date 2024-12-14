"use client";

import { Travel } from "@/app/lib/data";
import { Box, Button, Snackbar, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const initialTravel = {
  origin: "",
  destination: "",
  price: 0,
  date: dayjs().add(1, "day").toString(),
};

const TravelForm = () => {
  const [travel, setTravel] = useState<Omit<Travel, "id">>(initialTravel);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setTravel({ ...travel, [name]: value });
  };

  const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await fetch("/api/travels", {
        method: "POST",
        body: JSON.stringify(travel),
      });

      setTravel(initialTravel);
      setIsOpen(true);
      setTimeout(() => router.push("/"), 1500);
    } catch (error) {}
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 5 }}
      dir="rtl"
    >
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        message="سفر با موفقیت ایجاد شد."
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
      <Box
        dir="rtl"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
        sx={{ width: { xs: "100%", sm: "500px" }, p: 3, m: 2, boxShadow: 2 }}
        component="form"
        onSubmit={onSubmit}
      >
        <TextField
          required
          name="origin"
          fullWidth
          type="text"
          label="مبدا سفر"
          value={travel.origin}
          onChange={handleChange}
        />
        <TextField
          required
          name="destination"
          fullWidth
          type="text"
          label="مقصد سفر"
          value={travel.destination}
          onChange={handleChange}
        />
        <TextField
          required
          name="price"
          fullWidth
          type="number"
          label="قیمت"
          value={travel.price}
          onChange={handleChange}
        />
        <DatePicker
          label="انتخاب تاریخ"
          minDate={dayjs().add(1, "day")}
          value={dayjs(travel.date)}
          onChange={(value) =>
            setTravel({ ...travel, date: value?.toString() ?? travel.date })
          }
        />

        <Button type="submit" variant="contained">
          ثبت اطلاعات
        </Button>
      </Box>
    </Box>
  );
};

export default TravelForm;
