import FONTS from "@/config/fonts";
import { LINKS } from "@/utils/constants";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function HeroView() {
  return (
          <div className="grid grid-cols-1 lg:grid-cols-5 items-center ">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Typography textTransform={"uppercase"} color="primary" variant="h6" component="h2" style={FONTS.dinCondensed.style} fontWeight="400">Growith Simplified</Typography>
              <Typography variant="h1" component={"h1"} textTransform="inherit">Unlock the full power of Real Yields</Typography>
            </div>
            <div className="flex flex-col gap-6">
              <Typography variant="body1" component="h6" fontWeight="600">Upshift opens access to transparent yields backed by secure risk controls. Supply, stake, and access cross-chain yields.</Typography>
              <Link href={LINKS.APP} target="_blank">
                <Button variant="outlined" sx={{ width: "fit-content" }} size="large" style={{ fontSize: "18px" }}>
                  Enter App
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3">
            <video autoPlay muted loop>
              <source src="/assets/videos/chart-animation.mp4" />
            </video>
          </div>
        </div>
  )
}