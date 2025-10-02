import { IAddress } from "@augustdigital/sdk";
import { ReactNode } from "react";

export type IChildren = {
  children: ReactNode;
};

export type ITheme = "light" | "dark";

export type ISocials =
  | "discord"
  | "facebook"
  | "x"
  | "instagram"
  | "telegram"
  | "youtube"
  | "linkedin";

export type IToken = {
  price: number;
  address: IAddress;
  symbol: string;
  decimals: number;
  chain: number;
};
