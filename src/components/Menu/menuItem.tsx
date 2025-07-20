import classNames from "classnames";
import React, { useContext } from "react";
import { MenuItemProps } from "./types";
import { MenuContext } from "./menu";

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;

  // 使用 useContext 获取父组件传递的 index 和 onSelect
  const ctx = useContext(MenuContext);

  // 添加不同类名
  const classes = classNames("hik-menu-item", className, {
    "is-disabled": disabled,
    "is-active": ctx?.index === index, // 给当前激活项添加 is-active 类名
  });

  const handleClick = () => {
    if (disabled) return; // 如果禁用了，就不做任何操作
    if (ctx?.onSelect) {
      ctx.onSelect(index); // 调用父组件传递的 onSelect 回调函数
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
