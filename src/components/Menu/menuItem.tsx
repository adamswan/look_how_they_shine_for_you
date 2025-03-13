import classNames from "classnames";
import React from "react";

import { MenuItemProps } from "./types";

type FunctionComponent = React.FC<MenuItemProps>;

const MenuItem: FunctionComponent = (props) => {
  const { index, disabled, className, style, children } = props;

  // 添加不同类名
  const classes = classNames("hik-menu-item", className, {
    "is-disabled": disabled,
  });

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

export default MenuItem;
