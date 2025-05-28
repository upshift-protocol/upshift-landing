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
            Democratizing institutional yield
          </Typography>
          <Typography variant="h1" component={"h1"} textTransform="inherit">
            The most capital-efficient
            <br />
            way to earn DeFi yield
          </Typography>
        </Stack>
        <Stack gap={2} mt={2}>
          <Typography variant="body1" component="h6" fontWeight="600">
            Upshift, built on prime brokerage August, lets retail access the
            strategies used by institutions. Maximize your yield across DeFi.
          </Typography>

          <Stack direction="row" alignItems="center" gap={2}>
            <Link href={LINKS.EXTERNAL.APP_MAIN} target="_blank">
              <Button
                id="enter-app-dropdown-button"
                variant="contained"
                sx={{ width: "fit-content", fontSize: "18px" }}
                size="large"
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
            <Link href={LINKS.EXTERNAL.AUGUST} target="_blank">
              <Button
                variant="outlined"
                size="large"
                sx={{ width: "fit-content", fontSize: "18px" }}
              >
                About August
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
      <Box maxWidth={{ sm: "auto", lg: "55vw" }}>
        <video autoPlay muted loop>
          <source src="/assets/videos/chart-animation.mp4" />
        </video>
      </Box>
    </Stack>
  );
}
