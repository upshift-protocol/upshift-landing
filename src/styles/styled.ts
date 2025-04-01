import { styled } from "@mui/material";
import Link from "next/link";

export const StyledLink = styled(Link)`
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  transition: 0.15s ease;
  &:hover {
    border-color: #00ff7e;
  }
`;
