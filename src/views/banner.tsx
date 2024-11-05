import FONTS from "@/config/fonts";
import { INVESTORS_IMGS } from "@/utils/constants";
import { formatUsd } from "@/utils/helpers";
import { IToken } from "@/utils/types";
import { IPoolWithUnderlying, toNormalizedBn } from "@augustdigital/sdk";
import { Box, Chip, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useMemo } from "react";

export default function BannerView({
  pools,
  tokens,
}: {
  pools?: IPoolWithUnderlying[];
  tokens?: IToken[];
}) {
  const totalSupplied = useMemo(() => {
    if (!pools?.length) return "0.0";
    let total = 0;
    pools?.forEach(({ totalSupply, underlying }) => {
      const foundToken = tokens?.find((t) => t.address === underlying.address);
      total += Number(totalSupply?.normalized || 0) * (foundToken?.price || 0);
    });
    return String(total);
  }, [pools?.length, tokens?.length]);

  const totalBorrow = useMemo(() => {
    if (!pools?.length) return "0.0";
    let total = 0;
    pools?.forEach(({ globalLoansAmount, underlying }) => {
      const foundToken = tokens?.find((t) => t.address === underlying.address);
      total +=
        Number(globalLoansAmount?.normalized || 0) * (foundToken?.price || 0);
    });
    // TODO: return USD amount
    return toNormalizedBn(total).normalized;
  }, [pools?.length, tokens?.length]);

  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      justifyContent={"space-between"}
      mt={{ xs: 6, lg: 8 }}
      gap={4}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={{ xs: 2, md: 4, lg: 6 }}
      >
        <Stack direction="row" gap={2} alignItems={"center"}>
          <Typography textTransform={"uppercase"}>Total Deposited</Typography>
          <Chip color="primary" label={formatUsd(totalSupplied)} />
        </Stack>
        <Stack direction="row" gap={2} alignItems={"center"}>
          <Typography textTransform={"uppercase"}>Total Borrowed</Typography>
          <Chip color="primary" label={formatUsd(totalBorrow)} />
        </Stack>
      </Stack>

      <Box>
        <Box>
          <Typography
            textTransform={"uppercase"}
            color="primary"
            style={FONTS.dinCondensed.style}
            fontWeight="400"
          >
            Backed By
          </Typography>
        </Box>
        <Grid2
          container
          spacing={{ xs: 4, xl: 6 }}
          columns={{ xs: 2, sm: 4, md: 4 }}
        >
          {INVESTORS_IMGS.map((inv, i) => (
            <Grid2
              key={`investor-${i}`}
              alignItems={"center"}
              justifyContent={"center"}
              alignSelf={"center"}
              justifySelf={"center"}
            >
              <Image {...inv} src={`/assets/investors/${inv.src}`} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Stack>
  );
}
