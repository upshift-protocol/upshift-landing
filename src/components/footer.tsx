"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import buildMetadata from "@/config/metadata";
import Stack from "@mui/material/Stack";
import { LINKS, STYLE_VARS } from "@/utils/constants";
import BannerView from "@/views/banner";
import { Container } from "@mui/material";
import { StyledLink } from "@/styles/styled";
import { useTVL } from "@/hooks/use-tvl";

export default function Footer() {
  const { totalSupplied, isLoading } = useTVL();

  return (
    <footer>
      <Container maxWidth="xl" sx={{ marginBottom: 2 }}>
        <BannerView totalSupplied={totalSupplied} loading={isLoading} />
      </Container>

      <Stack
        paddingY={2}
        paddingX={{ xs: "16px", sm: "24px" }}
        direction={{ sm: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxWidth={STYLE_VARS.width}
        margin={"0 auto"}
      >
        <Box>
          <Typography fontSize={12} color="darkgray">
            Copyright &copy; {new Date().getFullYear()}{" "}
            {String(buildMetadata().openGraph?.siteName)}
          </Typography>
        </Box>

        <Box>
          <StyledLink
            style={{ fontSize: 12 }}
            target="_blank"
            href={`${LINKS.EXTERNAL.MEDIA_KIT}`}
          >
            Media Kit
          </StyledLink>
        </Box>
      </Stack>
    </footer>
  );
}
