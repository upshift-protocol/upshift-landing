"use client";

import FONTS from "@/config/fonts";
import { Box, Button, Stack, Typography } from "@mui/material";
import { LINKS } from "@/utils/constants";
import Link from "next/link";
import { log } from "@/utils/helpers";

export default function HeroView() {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      alignItems={{ lg: "center" }}
      gap={4}
    >
      <Box>
        <Stack gap={2}>
          <Typography
            textTransform={"uppercase"}
            color="primary"
            variant="h6"
            component="h2"
            style={FONTS.dinCondensed.style}
            fontWeight="400"
          >
            Democratizing yield
          </Typography>
          <Typography variant="h1" component={"h1"} textTransform="inherit">
            Institutions are here.
            <br />
            They run Upshift DeFi vaults.
          </Typography>
        </Stack>
        <Stack gap={2} mt={2}>
          <Typography variant="body1" component="h6" fontWeight="600">
            Earn yield on stablecoins and crypto, with strategies run by top
            DeFi funds. APY from funding rates, LPing, basis and more.
          </Typography>

          <Link href={LINKS.EXTERNAL.APP_MAIN} target="_blank">
            <Button
              id="enter-app-dropdown-button"
              variant="contained"
              sx={{ width: "fit-content" }}
              size="large"
              style={{ fontSize: "18px" }}
              onClick={() =>
                log({
                  eventType: "button-click",
                  eventName: "launch-app",
                })
              }
            >
              Launch App
            </Button>
          </Link>
        </Stack>
      </Box>
      <Box maxWidth={{ sm: "auto", lg: "57.5vw" }}>
        <video autoPlay muted loop>
          <source src="/assets/videos/chart-animation.mp4" />
        </video>
      </Box>
    </Stack>
  );
}
