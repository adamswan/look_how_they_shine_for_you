import { Menu, MenuItem, Button } from "./components";

function App() {
  return (
    <>
      <h1>高圆圆</h1>
      <Menu defaultIndex={0}>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
      </Menu>

      <h3>-------</h3>

      <h3>按钮</h3>
      <br />
      <Button>hi</Button>
      <br />
      <Button btnType="primary" size="lg">
        确定
      </Button>
      <br />
      <Button btnType="link" size="sm" href="https://www.baidu.com">
        前往
      </Button>
    </>
  );
}

export default App;
