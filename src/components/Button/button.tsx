import React from "react";
import { ButtonType, ButtonProps } from "./types.ts";
import classNames from "classnames";
import "./_style.scss";

//! 泛型参数 ButtonProps 用于限制传入组件的 props
const Button: React.FC<ButtonProps> = (props) => {
  // className, 用户传入的自定义类名
  // btnType, 按钮类型
  // size, 按钮大小
  // disabled, 按钮是否禁用
  // children, 传入<Button>中的内容（插槽）
  // href, 链接按钮的 href 属性
  // restProps, 剩余的所有属性
  const { className, btnType = "default", size, disabled = false, children, href, ...restProps } = props;

  // 各种类名
  const classes = classNames("btn", className, {
    // value 为 true 时，添加该类名
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    // 链接按钮，restProps 表示将剩余属性都传递给 <a> 标签
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    // 普通按钮，restProps 表示将剩余属性都传递给 <button> 标签
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

export default Button;
