import { Menu, MenuItem } from "./components";

function App() {
  function handleClick(index) {
    console.log("当前点击项的index", index);
  }

  return (
    <>
      <h4>菜单组件</h4>
      <Menu defaultIndex={0} onSelect={handleClick}>
        <MenuItem index={0}>首页</MenuItem>
        <MenuItem index={1}>关于</MenuItem>
        <MenuItem index={2}>个人中心</MenuItem>
      </Menu>
    </>
  );
}

export default App;
