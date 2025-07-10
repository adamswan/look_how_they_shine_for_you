import React from "react";
import { ButtonType, ButtonSize, BaseButtonProps } from "./types.ts";
import classNames from "classnames";

//! 泛型参数 BaseButtonProps 用于限制 props
const Button: React.FC<BaseButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, href } = props;

  // 各种类名
  const classes = classNames("btn", {
    // value 为 true 时，添加该类名
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    // 链接按钮
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    // 普通按钮
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

// 添加默认属性
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
