import { Menu, MenuItem } from "./components";

function App() {
  return (
    <>
      <h1>高圆圆</h1>
      <Menu defaultIndex={0}>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
      </Menu>
    </>
  );
}

export default App;
