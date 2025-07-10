// 按钮类型
export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

// 按钮大小
export enum ButtonSize {
  Small = "sm",
  large = "lg",
}

// 按钮组件的属性
export interface BaseButtonProps {
  // 允许用户添加自定义的类名
  className?: string;
  // 禁用
  disabled?: boolean;
  // 尺寸
  size?: ButtonSize | string;
  // 类型
  btnType?: ButtonType | string;
  // 按钮的子元素, 类似插槽
  children?: React.ReactNode;
  // 链接形按钮的href属性
  href?: string;
}
