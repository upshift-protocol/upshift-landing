import { Metadata } from "next";

const _title = "Upshift Finance";
const _description =
  "Upshift opens access to transparent yields backed by secure risk controls. Supply, stake and access cross-chain yields.";
const rootUrl = "https://upshift.finance";

export default function buildMetadata(
  title?: string,
  description = _description,
): Metadata {
  return {
    title: title ? `${title} | ${_title}` : _title,
    metadataBase: new URL(rootUrl),
    description: description,
    openGraph: {
      type: "website",
      url: rootUrl,
      title: title ? `${title} | ${_title}` : _title,
      description: description,
      siteName: _title,
      images: [
        {
          url: `${rootUrl}/og-image.jpg`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@upshift_fi",
      creator: "@upshift_fi",
      images: `${rootUrl}/og-image.jpg`,
    },
  };
}
