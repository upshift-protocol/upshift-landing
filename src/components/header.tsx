"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { LINKS, STYLE_VARS } from "@/utils/constants";
import Logo from "./logo";
import Link from "next/link";
import SocialLink from "./social-link";
import { Drawer, IconButton, Typography } from "@mui/material";
import Banner from "./banner";
import { StyledLink } from "@/styles/styled";
import { useState } from "react";
import { log } from "@/utils/helpers";

const NAV_ITEMS = [
  {
    href: LINKS.EXTERNAL.BLOG,
    text: "Vision",
    className: "!pb-0",
  },
  {
    href: LINKS.EXTERNAL.DOCS,
    text: "Docs",
    className: "!pb-0",
  },
  {
    href: LINKS.EXTERNAL.FAQ,
    text: "FAQ",
    className: "mr-1 !pb-0",
  },
];

export default function Header() {
  // const { isDark, toggleTheme } = useThemeMode();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header>
      {process.env.NEXT_PUBLIC_BANNER ? (
        <Box
          sx={{
            maxWidth: STYLE_VARS.width,
            margin: "0 auto",
            width: "100%",
            padding: "24px",
          }}
        >
          <Banner
            title="Introducing Upshift"
            description="Read about our vision to bridge the gap between CeFi and DeFi with institutional-grade yield"
            image={{ path: "logos/upshift-logomark.svg" }}
            cta={{
              text: "See announcements",
              href: LINKS.EXTERNAL.BLOG,
              target: "_blank",
            }}
          />
        </Box>
      ) : null}

      <Box sx={{ flexGrow: 1, mb: "1rem" }}>
        <AppBar
          position="static"
          color={"inherit"}
          style={{
            backgroundColor: "inherit",
            backgroundImage: "none",
          }}
          sx={{ boxShadow: "none", py: "0.25rem" }}
        >
          <Toolbar
            style={{
              maxWidth: STYLE_VARS.width,
              margin: "0 auto",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              target="_self"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
              }}
            >
              <Logo />
            </Link>

            {/* Desktop */}
            <Stack
              direction="row"
              alignItems="center"
              gap={{ xs: 2, lg: 2.5 }}
              display={{ xs: "none", sm: "flex" }}
            >
              {/* <ThemeSwitch checked={isDark} onChange={toggleTheme} /> */}
              {NAV_ITEMS.map((n) => (
                <StyledLink
                  key={`nav-item-${n.text}`}
                  href={n.href}
                  target="_blank"
                  className={n.className}
                  onClick={() =>
                    log({
                      eventType: "button-click",
                      eventName: n.text.toLowerCase().replaceAll(" ", "-"),
                    })
                  }
                >
                  <Typography textTransform={"uppercase"}>{n.text}</Typography>
                </StyledLink>
              ))}

              <SocialLink type="telegram" />
              <SocialLink type="discord" />
              <SocialLink type="x" />
            </Stack>

            {/* Mobile */}
            <Stack
              direction="row"
              alignItems="center"
              gap={{ xs: 1, md: 2 }}
              display={{ sm: "none" }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ p: 1 }}
              >
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
                    fill="currentColor"
                  />
                </svg>
              </IconButton>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                  role="presentation"
                  // onClick={toggleDrawer(false)}
                  width="250px"
                  padding={2}
                  height="100%"
                >
                  <Stack gap={2} height="100%" justifyContent={""}>
                    <Stack
                      direction="row"
                      alignItems={"center"}
                      gap={2}
                      justifyContent={"space-between"}
                    >
                      <Logo width={80} height={40} />
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(false)}
                        sx={{ p: 1 }}
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                            fill="currentColor"
                          />
                        </svg>
                      </IconButton>
                    </Stack>
                    <Stack gap={2}>
                      {NAV_ITEMS.map((n) => (
                        <StyledLink
                          key={`nav-item-${n.text}`}
                          href={n.href}
                          target="_blank"
                          className={n.className}
                          onClick={() =>
                            log({
                              eventType: "button-click",
                              eventName: n.text
                                .toLowerCase()
                                .replaceAll(" ", "-"),
                            })
                          }
                        >
                          <Typography textTransform={"uppercase"}>
                            {n.text}
                          </Typography>
                        </StyledLink>
                      ))}
                    </Stack>

                    <Stack gap={2} direction="row" justifySelf={"end"}>
                      <SocialLink type="telegram" />
                      <SocialLink type="discord" />
                      <SocialLink type="x" />
                    </Stack>
                  </Stack>
                </Box>
              </Drawer>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
