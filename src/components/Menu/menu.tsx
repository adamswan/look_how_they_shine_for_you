import classNames from "classnames";
import React, { createContext, useState } from "react";
import { MenuProps, MenuContextProps, MenuItemProps } from "./types";
import "./_style.scss";

// 创建 MenuContext 上下文
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

  //! 如果用户向插槽中传入了一个非<MenuItem>，前端要给出报错
  // 检测方式：判断 children 的 displayName 是否为 MenuItem
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      // children 是未知类型，所以不能直接用js的.map方法，要用 React.Children.map 方法
      const childElement = child as React.ReactElement<MenuItemProps>;
      const { displayName } = childElement.type!;
      if (displayName === "MenuItem") {
        // 如果子元素是 MenuItem 组件，通过克隆的形式，给它传递 index 属性，
        // 这样就不需要手动在<MenuItem>传递 index 属性了，例如：<MenuItem index={0}>首页</MenuItem>
        return React.cloneElement(childElement, { index });
      } else {
        console.error("Menu 组件的子元素必须是 MenuItem 组件");
      }
    });
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={contextValueToSon}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};

export default Menu;
