import { LINKS } from "@/utils/constants";
import { ISocials } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

interface ISocialLink {
  type?: ISocials;
}

function formatSocialLink(type?: ISocials) {
  switch (type) {
    case "facebook":
      return {
        img: "FB",
        link: "#",
      };
    case "instagram":
      return {
        img: "IG",
        link: "#",
      };
    case "discord":
      return {
        img: "DISCORD",
        link: LINKS.EXTERNAL.DISCORD,
        height: 24,
        width: 24,
        padding: "p-[4px]",
      };
    case "telegram":
      return {
        img: "TG",
        link: LINKS.EXTERNAL.TG,
        height: 24,
        width: 24,
        padding: "p-[3px]",
      };
    default:
      return {
        img: "X",
        link: LINKS.EXTERNAL.X,
      };
  }
}

export default function SocialLink({ type }: ISocialLink) {
  const selectedSocial = formatSocialLink(type);
  return (
    <Link
      href={selectedSocial.link}
      target="_blank"
      className={`bg-white rounded-full ${selectedSocial.padding || "p-[7px]"} transition duration-150 border-2 border-transparent hover:border-[#00FF96]`}
    >
      <Image
        src={`/assets/socials/${selectedSocial.img}.svg`}
        alt={String(type || "Twitter / X Social Link")}
        width={selectedSocial?.width || 16}
        height={selectedSocial?.height || 16}
      />
    </Link>
  );
}
