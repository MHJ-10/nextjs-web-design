"use client";

import {
  ExpandMore,
  HelpOutline,
  LuggageOutlined,
  PersonOutline,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import { ReactElement, useState } from "react";

interface LinkButton {
  text: string;
  icon: ReactElement<any, any>;
  href: string;
}

interface NavbarItem {
  text: string;
  href: string;
  hasChild: boolean;
  children?: string[];
}

const Navbar = () => {
  return (
    <AppBar
      position="static"
      dir="rtl"
      color="transparent"
      elevation={1}
      sx={{ py: 0.5 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src="/images/logo.svg"
            width={160}
            height={50}
            alt="alibaba logo"
          />
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 10 }}
          >
            <NavbarLinks />
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", sm: "flex" } }}>
            <NavbarButtons />
          </Box>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //   onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              //   open={Boolean(anchorElNav)}
              //   onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              open={false}
            ></Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

const NavbarLinks = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setOpenIndex(index);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpenIndex(null);
  };

  const pages: NavbarItem[] = [
    {
      text: "بلیط",
      hasChild: true,
      href: "1",
      children: ["پرواز داخلی", "پرواز خارجی", "قطار", "اتوبوس"],
    },
    {
      text: "اقامت",
      hasChild: true,
      href: "2",
      children: ["هتل", "ویلا و اقامتگاه"],
    },
    { text: "تور", hasChild: false, href: "3" },
    { text: "ویزا", hasChild: false, href: "4" },
    {
      text: "بیشتر",
      hasChild: true,
      href: "4",
      children: ["علی بابا پلاس", "مجله علی بابا", "بیمه مسافرتی"],
    },
  ];

  return pages.map((page, index) => (
    <Box>
      <Button
        id={`${page.text}-button`}
        aria-controls={openIndex === index ? `${page.text}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={openIndex === index ? "true" : undefined}
        sx={{ mx: 1, color: "text.primary", fontSize: 20, fontWeight: "400" }}
        onClick={(e) => handleClick(e, index)}
        endIcon={page.hasChild && <ExpandMore sx={{ mr: 1 }} />}
      >
        {page.text}
      </Button>
      {page.hasChild && (
        <Menu
          id={`${page.text}-menu`}
          aria-labelledby={`${page.text}-button`}
          anchorEl={anchorEl}
          open={openIndex === index}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {page.children!.map((child, i) => (
            <MenuItem
              divider={i === page.children?.length! - 1 ? false : true}
              sx={{ justifyContent: "flex-end", mx: 2, p: 2 }}
            >
              {child}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  ));
};

const NavbarButtons = () => {
  const settings: LinkButton[] = [
    {
      text: "مرکز پشتیبانی آنلاین",
      icon: <HelpOutline sx={{ ml: 1 }} />,
      href: "1",
    },
    {
      text: "سفر های من",
      icon: <LuggageOutlined sx={{ ml: 1 }} />,
      href: "2",
    },
    {
      text: "ورود یا ثبت نام",
      icon: <PersonOutline sx={{ ml: 1 }} />,
      href: "3",
    },
  ];

  return settings.map((setting) => (
    <Button
      sx={{
        mr: 3,
        fontSize: 18,
        fontWeight: "400",
        color: "text.primary",
      }}
      startIcon={setting.icon}
    >
      {setting.text}
    </Button>
  ));
};
