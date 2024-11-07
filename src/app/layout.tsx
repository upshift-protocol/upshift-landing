import "../styles/globals.css";
import FONTS from "@/config/fonts";
import buildMetadata from "@/config/metadata";
import Providers from "./providers";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FONTS.visiaPro.variable} antialiased bg-black`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>

      <GoogleTagManager gtmId="G-ZV739K401K" />
    </html>
  );
}
