"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import buildMetadata from "@/config/metadata";
import Stack from "@mui/material/Stack";
import { STYLE_VARS } from "@/utils/constants";
import BannerView from "@/views/banner";
import augustSdk from "@/config/august-sdk";
import { IToken } from "@/utils/types";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { IPoolWithUnderlying } from "@augustdigital/sdk";

export default function Footer() {
  const [pools, setPools] = useState<IPoolWithUnderlying[]>([]);
  const [tokens, setTokens] = useState<IToken[]>([]);

  useEffect(() => {
    (async () => {
      const poolsData = await augustSdk.pools.getPools();
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
    })().catch(console.error);
  }, []);

  return (
    <footer>
      <Container maxWidth="xl" sx={{ marginBottom: 2 }}>
        <BannerView pools={pools} tokens={tokens} />
      </Container>

      <Stack
        paddingY={2}
        paddingX={{ xs: "16px", sm: "24px" }}
        direction={{ sm: "row" }}
        justifyContent={"center"}
        alignItems={{ xs: "center", sm: "center" }}
        maxWidth={STYLE_VARS.widthWide}
        margin={"0 auto"}
      >
        <Box>
          <Typography fontSize={12} color="darkgray">
            Copyright &copy; {new Date().getFullYear()}{" "}
            {String(buildMetadata().openGraph?.siteName)}
          </Typography>
        </Box>
      </Stack>
    </footer>
  );
}
