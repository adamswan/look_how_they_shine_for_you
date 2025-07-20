import classNames from "classnames";
import React, { createContext, useState } from "react";
import { MenuProps, MenuContextProps } from "./types";

export const MenuContext = createContext<MenuContextProps>({
  index: 0,
});

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode = "horizontal", // props 的默认值
    style,
    children,
    defaultIndex = 0, // 初始化时，没有点击任何菜单项时的默认激活项，默认是第1个
    onSelect,
  } = props;

  // 添加不同类名
  const classes = classNames("hik-menu", className, {
    "menu-vertical": mode === "vertical",
  });

  // 当前激活项的 index
  const [currentActive, setCurrentActive] = useState(defaultIndex);

  // 点击菜单项的回调
  const handleClick = (index: number) => {
    setCurrentActive(index); // 更新当前激活项的 index
    if (onSelect) {
      // 如果有 onSelect 回调函数，调用它
      onSelect(index);
    }
  };

  // 传递给子组件的上下文
  const contextValueToSon: MenuContextProps = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={contextValueToSon}>{children}</MenuContext.Provider>
    </ul>
  );
};

export default Menu;
