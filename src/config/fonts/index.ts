import localFont from "next/font/local";

const visiaPro = localFont({
  src: [
    {
      path: "./VisiaPro/VisiaProHeavy/font.woff",
      weight: "900",
    },
    {
      path: "./VisiaPro/VisiaProExtraBold/font.woff",
      weight: "800",
    },
    {
      path: "./VisiaPro/VisiaProBold/font.woff",
      weight: "700",
    },
    {
      path: "./VisiaPro/VisiaProSemiBold/font.woff",
      weight: "600",
    },
    {
      path: "./VisiaPro/VisiaProRegular/font.woff",
      weight: "400",
    },
    {
      path: "./VisiaPro/VisiaProLight/font.woff",
      weight: "200",
    },
    {
      path: "./VisiaPro/VisiaProExtraLight/font.woff",
      weight: "100",
    },
  ],
  variable: "--font-visia-pro",
});

const FONTS = {
  visiaPro,
};

export default FONTS;
