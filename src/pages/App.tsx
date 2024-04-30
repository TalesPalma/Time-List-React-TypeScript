import { useState } from "react";
import Formulario from "../components/Formulario";
import Tasks from "../model/Taks";
import Lista from "../components/Lista";
import './style.scss'
import { ClassNames } from "@emotion/react";






function App() {
  const [lista, setLista] = useState<Tasks[]>([])
  return (
    <div className="AppStyle">
      <Formulario onSubmit={(task) => setLista([...lista, task])} />
      <Lista lista={lista} />
    </div>
  );
}

export default App;
