import { Button } from "./components";

function App() {
  return (
    <>
      <h4>按钮组件</h4>

      <div>默认类型的默认大小按钮:</div>
      <Button>按钮0</Button>

      <div>危险类型的默认大小按钮:</div>
      <Button btnType="danger">按钮1</Button>

      <div>默认类型的大按钮:</div>
      <Button btnType="primary" size="lg">
        按钮2
      </Button>

      <div>链接按钮:</div>
      <Button btnType="link" href="https://www.baidu.com">
        我是链接1
      </Button>

      <Button btnType="link" href="https://www.baidu.com" disabled>
        我是链接2
      </Button>
    </>
  );
}

export default App;
