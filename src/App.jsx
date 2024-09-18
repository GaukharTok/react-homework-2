import { useState } from "react";
import "./App.css";
import { Container } from "./Components/Container/Container";

function App() {
  const [personList, setPersonList] = useState([]);

  return (
    <>
      <Container state={personList} setter={setPersonList} />
    </>
  );
}

export default App;
