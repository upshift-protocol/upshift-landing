import FONTS from "@/config/fonts";
import { INVESTORS_IMGS } from "@/utils/constants";
import { formatUsd } from "@/utils/helpers";
import { Box, Grid2, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function BannerView({
  totalSupplied,
  loading,
}: {
  totalSupplied?: number | null;
  loading?: boolean;
}) {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      justifyContent={"space-between"}
      mt={{ xs: 4, lg: 6 }}
      gap={4}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={{ xs: 2, md: 4, lg: 6 }}
      >
        <Stack direction="column" minWidth={"150px"}>
          <Typography
            textTransform={"uppercase"}
            color="primary"
            style={FONTS.dinCondensed.style}
            fontWeight="400"
            fontSize="16px"
          >
            Total Deposited
          </Typography>
          {loading || !totalSupplied ? (
            <Skeleton variant="text" height={"40px"} width="176px" />
          ) : (
            <Typography variant="h5">{formatUsd(totalSupplied)}</Typography>
          )}
        </Stack>
      </Stack>

      <Box>
        <Box>
          <Typography
            textTransform={"uppercase"}
            color="primary"
            style={FONTS.dinCondensed.style}
            fontWeight="400"
            fontSize="16px"
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
