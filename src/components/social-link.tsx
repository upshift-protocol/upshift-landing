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
    default:
      return {
        img: "X",
        link: LINKS.X,
      };
  }
}

export default function SocialLink({ type }: ISocialLink) {
  const selectedSocial = formatSocialLink(type);
  return (
    <Link
      href={selectedSocial.link}
      target="_blank"
      className="bg-white rounded-full p-[7px] transition duration-150 shadow-[0px_0px_12px_2px_#000)] hover:shadow-[0px_0px_12px_2px_#00FF96]"
    >
      <Image
        src={`/assets/socials/${selectedSocial.img}.svg`}
        alt={String(type || "Twitter / X Social Link")}
        width={16}
        height={16}
      />
    </Link>
  );
}
