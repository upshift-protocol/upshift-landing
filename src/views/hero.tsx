import FONTS from "@/config/fonts";
import { LINKS } from "@/utils/constants";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function HeroView() {
  return (
        <Stack direction={{ xs: "column", lg: "row" }} alignItems={{lg: "center"}} gap={4}>
          <Box>
            <Stack gap={2}>
              <Typography textTransform={"uppercase"} color="primary" variant="h6" component="h2" style={FONTS.dinCondensed.style} fontWeight="400">Growith Simplified</Typography>
              <Typography variant="h1" component={"h1"} textTransform="inherit">Unlock the full power of Real Yields</Typography>
            </Stack>
            <Stack gap={2} mt={2}>
              <Typography variant="body1" component="h6" fontWeight="600">Upshift opens access to transparent yields backed by secure risk controls. Supply, stake, and access cross-chain yields.</Typography>
              <Link href={LINKS.APP} target="_blank">
                <Button variant="outlined" sx={{ width: "fit-content" }} size="large" style={{ fontSize: "18px" }}>
                  Enter App
                </Button>
              </Link>
            </Stack>
          </Box>
          <Box maxWidth={{ sm: "auto", lg: "60vw" }}>
            <video autoPlay muted loop>
              <source src="/assets/videos/chart-animation.mp4" />
            </video>
          </Box>
        </Stack>
  )
}