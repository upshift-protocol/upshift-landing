"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { styled } from "@mui/material";
import Svg from "@/utils/svgs";

interface IDropdownButton {
  options: {
    link: string;
    text: string;
  }[];
  children: string;
  id?: string;
}

const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    margin-top: 6px;
    outline: 1px solid #00ff96;
    background-color: black;
    border-radius: 1rem;
  }
`;

export default function DropdownButton({
  options,
  children,
  id = "enter-app",
}: IDropdownButton) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    sendGTMEvent({
      event: "button-click",
      name: id,
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
        endIcon={<Svg icon="chevron-down" />}
      >
        {children}
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
        {options.map((option) => (
          <Link
            key={`dropdown-menu-${id}-${option.link}`}
            href={option.link}
            target="_blank"
          >
            <MenuItem onClick={handleClose} sx={{ color: "#00FF96" }}>
              {option.text}
            </MenuItem>
          </Link>
        ))}
      </StyledMenu>
    </div>
  );
}
