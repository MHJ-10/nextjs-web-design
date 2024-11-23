"use client";

import {
  ExpandMore,
  HelpOutline,
  LuggageOutlined,
  Menu as MenuIcon,
  PersonOutline,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import { ReactElement, useState } from "react";
import { useTravelTab } from "../context/TravelTabContext";

interface LinkButton {
  text: string;
  icon: ReactElement<any, any>;
}

interface NavbarItem {
  text: string;
  href: string;
  hasChild: boolean;
  children?: string[];
}

const settings: LinkButton[] = [
  {
    text: "مرکز پشتیبانی آنلاین",
    icon: <HelpOutline sx={{ ml: 1 }} />,
  },
  {
    text: "سفر های من",
    icon: <LuggageOutlined sx={{ ml: 1 }} />,
  },
  {
    text: "ورود یا ثبت نام",
    icon: <PersonOutline sx={{ ml: 1 }} />,
  },
];

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
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Image
            src="/images/logo.svg"
            width={160}
            height={50}
            alt="alibaba logo"
          />
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <NavbarLinks />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <NavbarButtons />
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <SideMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

const NavbarLinks = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const { handleChangeTab } = useTravelTab();

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
        sx={{
          color: "text.primary",
          fontSize: { md: 15, lg: 17 },
          fontWeight: "400",
        }}
        onClick={(e) => {
          handleClick(e, index);
          if (!page.hasChild) {
            handleChangeTab(page.text);
          }
        }}
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
              onClick={() => {
                handleChangeTab(child);
                handleCloseMenu();
              }}
            >
              {child}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  ));
};

const NavbarButtons = () =>
  settings.map((setting) => (
    <MenuItem>
      <Button
        sx={{
          fontSize: { sm: 12, md: 15, lg: 17 },
          fontWeight: "400",
          color: "text.primary",
        }}
        startIcon={setting.icon}
      >
        {setting.text}
      </Button>
    </MenuItem>
  ));

const SideMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {settings.map((setting) => (
          <MenuItem>
            <Button
              sx={{
                mr: 3,
                fontSize: { md: 15, lg: 17 },
                fontWeight: "400",
                color: "text.primary",
              }}
              startIcon={setting.icon}
            >
              {setting.text}
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
