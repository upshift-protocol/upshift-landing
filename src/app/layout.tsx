/* eslint react/no-unescaped-entities: 0 */
import "../styles/globals.css";
import FONTS from "@/config/fonts";
import buildMetadata from "@/config/metadata";
import Providers from "./providers";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export const metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line no-use-before-define */}
        <Script id="safary">
          var
          script=document.createElement('script');script.src="https://tag.safary.club/stag-0.1.16.js";script.async=true;script.setAttribute('data-name','safary-sdk');script.setAttribute('data-product-id','prd_ZRGfMsIdvE');script.integrity="sha256-jl67N5KgpOXS3tLPc6pUXU1UxJqBm9LUZtqX5H3jZ2U=";script.crossOrigin="anonymous";var
          target=document.head||document.body;target.appendChild(script);
        </Script>
      </head>

      <body className={`${FONTS.visiaPro.variable} antialiased bg-black`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>

      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER || ""}
      />

      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
        debugMode
      />
    </html>
  );
}
