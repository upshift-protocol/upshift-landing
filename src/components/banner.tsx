import { Button, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface IBanner {
  image?: {
    path: "logos/upshift-logomark.svg";
    height?: number;
    width?: number;
  };
  title: string;
  description: string;
  cta: {
    text: string;
    href: string;
    target: string;
  };
}

const StyledStack = styled(Stack)`
  border-radius: 8px;
  padding: 16px 12px;
  border: 1px solid rgba(0, 255, 126, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function Banner({ cta, image, title, description }: IBanner) {
  return (
    <StyledStack>
      <Stack direction="row" alignItems="center" gap={"12px"}>
        {image ? (
          <Image
            src={`/assets/${image.path}`}
            alt=""
            height={image.height || 50}
            width={image.width || 50}
          />
        ) : null}
        <Stack>
          <Typography fontSize={18}>{title}</Typography>
          <Typography fontSize={16}>{description}</Typography>
        </Stack>
      </Stack>

      <Stack>
        <Link target={cta.target} href={cta.href}>
          <Button
            variant="outlined"
            sx={{ width: "fit-content" }}
            size="large"
            style={{ fontSize: "18px" }}
            endIcon={
              <Image
                src="/assets/icons/link-arrow.svg"
                alt=""
                height={10}
                width={10}
              />
            }
          >
            {cta.text}
          </Button>
        </Link>
      </Stack>
    </StyledStack>
  );
}
