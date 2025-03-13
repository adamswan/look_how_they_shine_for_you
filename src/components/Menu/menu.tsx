import classNames from "classnames";
import React from "react";

import { MenuProps } from "./types";

type FunctionComponent = React.FC<MenuProps>;

const Menu: FunctionComponent = (props) => {
  const {
    className,
    mode = "horizontal", // props 的默认值
    style,
    children,
    defaultIndex = 0,
  } = props;

  // 添加不同类名
  const classes = classNames("hik-menu", className, {
    "menu-vertical": mode === "vertical",
  });

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

export default Menu;
