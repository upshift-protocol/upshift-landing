"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import buildMetadata from "@/config/metadata";
import Stack from "@mui/material/Stack";
import { LINKS, STYLE_VARS } from "@/utils/constants";
import BannerView from "@/views/banner";
import augustSdk from "@/config/august-sdk";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { IWSTokenEntry } from "@augustdigital/sdk";
import { StyledLink } from "@/styles/styled";

export const arrayAllEqualTrue = (arr: boolean[]) =>
  arr?.every((val) => val === true);

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true);
  const [totalSupplied, setTotalSupplied] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const allPools = await augustSdk.getVaults({
        loans: true,
        allocations: false,
      });
      const tokens: IWSTokenEntry[] = await Promise.all(
        allPools?.map(async (p) => {
          const price = await augustSdk.getPrice(
            p.depositAssets?.[0]?.symbol?.toLowerCase(),
          );
          return {
            ...p.depositAssets?.[0],
            price,
          };
        }),
      );
      if (!allPools?.length) return "0.0";
      let total = 0;
      allPools?.forEach((pool) => {
        const foundToken = tokens?.find(
          (t) => t.address === pool?.depositAssets?.[0]?.address,
        );
        if (foundToken) {
          // add actual tvl
          total +=
            Number(pool?.totalAssets?.normalized || 0) *
            (foundToken?.price || 0);
        }
      });
      setTotalSupplied(total);
      setIsLoading(false);
    })().catch(console.error);
  }, []);

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
