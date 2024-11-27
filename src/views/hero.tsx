import FONTS from "@/config/fonts";
import { Box, Stack, Typography } from "@mui/material";
import DropdownButton from "@/components/dropdown-button";

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
            Growth Simplified
          </Typography>
          <Typography variant="h1" component={"h1"} textTransform="inherit">
            Unlock the full power of Real Yields
          </Typography>
        </Stack>
        <Stack gap={2} mt={2}>
          <Typography variant="body1" component="h6" fontWeight="600">
            Upshift opens access to transparent yields backed by secure risk
            controls. Supply, stake, and access cross-chain yields.
          </Typography>
          <DropdownButton />
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
