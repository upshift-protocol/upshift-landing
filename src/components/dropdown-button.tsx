"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { LINKS } from "@/utils/constants";
import { sendGTMEvent } from "@next/third-parties/google";
import { styled } from "@mui/material";

const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    margin-top: 6px;
    outline: 1px solid #00ff96;
    background-color: black;
    border-radius: 1rem;
  }
`;

export default function DropdownButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    sendGTMEvent({
      event: "button-click",
      name: "enter-app",
    });
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="enter-app-dropdown-button"
        variant="outlined"
        sx={{ width: "fit-content" }}
        size="large"
        style={{ fontSize: "18px" }}
        onClick={handleClick}
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={
          <svg
            width="12px"
            height="12px"
            viewBox="0 -0.5 17 17"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="si-glyph si-glyph-triangle-down"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path
                d="M10.106,12.69 C9.525,13.27 8.584,13.27 8.002,12.69 L1.561,6.246 C0.979,5.665 0.722,4.143 2.561,4.143 L15.549,4.143 C17.45,4.143 17.131,5.664 16.549,6.246 L10.106,12.69 L10.106,12.69 Z"
                fill="#00FF96"
                className="si-glyph-fill"
              ></path>
            </g>
          </svg>
        }
      >
        Enter App
      </Button>
      <StyledMenu
        id="enter-app-dropdown-button-menu"
        aria-labelledby="enter-app-dropdown-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Link href={LINKS.EXTERNAL.APP_AVAX} target="_blank">
          <MenuItem onClick={handleClose} sx={{ color: "#00FF96" }}>
            Avax AUSD
          </MenuItem>
        </Link>
        <Link href={LINKS.EXTERNAL.APP_LOMBARD} target="_blank">
          <MenuItem onClick={handleClose} sx={{ color: "#00FF96" }}>
            Lombard LBTC
          </MenuItem>
        </Link>
        <Link href={LINKS.EXTERNAL.APP_ETHENA} target="_blank">
          <MenuItem onClick={handleClose} sx={{ color: "#00FF96" }}>
            Ethena sUSDe
          </MenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
