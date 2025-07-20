import { Menu, MenuItem } from "./components";

function App() {
  function handleClick(index: number) {
    console.log("当前点击项的index", index);
  }

  return (
    <>
      <h4>菜单组件</h4>
      <Menu defaultIndex={0} onSelect={handleClick}>
        <MenuItem>首页</MenuItem>
        <MenuItem>关于</MenuItem>
        <MenuItem>个人中心</MenuItem>
      </Menu>

      <Menu defaultIndex={0} onSelect={handleClick} mode="vertical">
        <MenuItem>首页</MenuItem>
        <MenuItem>关于</MenuItem>
        <MenuItem>个人中心</MenuItem>
        {/* <p>123</p> */}
      </Menu>
    </>
  );
}

export default App;
