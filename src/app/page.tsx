import { Container } from "@mui/material";
import HeroView from "@/views/hero";

export default async function Home() {
  return (
    <Container maxWidth="xl" sx={{ display: "flex" }}>
      <HeroView />
    </Container>
  );
}
