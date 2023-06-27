import "./App.css";
import TodoTitle from "./components/TodoTitle";
import Render from "./components/Render";
import AddData from "./components/AddData";

function App() {
  return (
    <>
      <TodoTitle></TodoTitle>
      <AddData></AddData>
      <Render></Render>
    </>
  );
}

export default App;
