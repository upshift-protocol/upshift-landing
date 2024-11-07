import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import buildMetadata from "@/config/metadata";
import Stack from "@mui/material/Stack";
import { STYLE_VARS } from "@/utils/constants";

export default function Footer() {
  return (
    <footer>
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
