本质上，菜单组件就是原生的`<ul>` + `<li>`标签

1. 当前选中项高亮的实现原理

- 通过 createContext ，父组件将当前点击项的 index 传给所有子组件；子组件用 useContext 接收 index, 再判断传入的 index 是否与自身的 index 一致，一致则添加‘is-active’类名实现高亮效果

- 技术点 1：正常情况下, 向`Menu`的插槽中传入的是`MenuItem` , 但如果用户向插槽中传入了非`MenuItem`，前端要给出报错。所以，要检测传入的组件是否是`MenuItem`。通过 React.Children.map() 方法映射传入的 children，判断每个子组件是否是`MenuItem`，如果不是，则抛出错误。
- 技术点 2：为了避免让用户手动给`MenuItem`传入 index 属性，所以通过 React.cloneElement 克隆 children，在回调中，将 React.Children.map() 中 index，传给`MenuItem`, 这样就避免了手动传入 index
