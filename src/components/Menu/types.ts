import React from "react";

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: "horizontal" | "vertical";
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: string | number) => void;
  children?: React.ReactNode;
}

export interface MenuItemProps {
  index?: string | number;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}
