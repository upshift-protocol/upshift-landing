"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import buildMetadata from "@/config/metadata";
import Stack from "@mui/material/Stack";
import { LINKS, STYLE_VARS } from "@/utils/constants";
import BannerView from "@/views/banner";
import augustSdk from "@/config/august-sdk";
import { IToken } from "@/utils/types";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { IPoolWithUnderlying } from "@augustdigital/sdk";
import { StyledLink } from "@/styles/styled";

export default function Footer() {
  const [pools, setPools] = useState<IPoolWithUnderlying[]>([]);
  const [tokens, setTokens] = useState<IToken[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const poolsData = await augustSdk.pools.getPools({
        loans: true,
        allocations: true,
      });
      const tokensData: IToken[] = await Promise.all(
        poolsData?.map(async (p) => {
          const price = await augustSdk.getPrice(
            p.underlying?.symbol?.toLowerCase(),
          );
          return {
            ...p.underlying,
            price,
          };
        }),
      );
      setPools(poolsData);
      setTokens(tokensData);
      setIsLoading(false);
    })().catch(console.error);
  }, []);

  // const pools = await augustSdk.pools.getPools();
  // const tokens: IToken[] = await Promise.all(
  //   pools?.map(async (p) => {
  //     const price = await augustSdk.getPrice(
  //       p.underlying?.symbol?.toLowerCase(),
  //     );
  //     return {
  //       ...p.underlying,
  //       price,
  //     };
  //   }),
  // );

  return (
    <footer>
      <Container maxWidth="xl" sx={{ marginBottom: 2 }}>
        <BannerView pools={pools} tokens={tokens} loading={isLoading} />
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
