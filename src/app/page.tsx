import { Container } from "@mui/material";
import HeroView from "@/views/hero";
import BannerView from "@/views/banner";
import augustSdk from "@/config/august-sdk";
import { IToken } from "@/utils/types";

export default async function Home() {
  const pools = await augustSdk.pools.getPools();
  const tokens: IToken[] = await Promise.all(
    pools?.map(async (p) => {
      const price = await augustSdk.getPrice(
        p.underlying?.symbol?.toLowerCase(),
      );
      return {
        ...p.underlying,
        price,
      };
    }),
  );

  return (
    <Container maxWidth="xl">
      <HeroView />
      <BannerView pools={pools} tokens={tokens} />
    </Container>
  );
}
