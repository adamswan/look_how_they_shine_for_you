import React from "react";

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: "horizontal" | "vertical";
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
  children?: React.ReactNode;
}

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

type SelectCallback = (selectedIndex: number) => void;

export interface MenuContextProps {
  index?: number;
  onSelect?: SelectCallback;
}
