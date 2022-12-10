import { FormComponents } from "./components/FormComponents";

function App() {
  const addTask = () => {};
  return (
    <div>
      <h1>Hello</h1>
      <FormComponents addTask={addTask} />
    </div>
  );
}

export default App;
