import ListGroup from "./components/ListGroup";
import Alerte from "./components/Alerte";
import { Button } from "./components/Button";
import { useState } from "react";


const App = () => {

  const[visibleAlerte, setAlertVisibility] = useState(false);

  let items = [
    "NY",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris"
];

const handleSelectItem = (item: string) => {
  console.log(item)
}
  return <div>
    <ListGroup 
      items={items} 
      heading={"Cities"}
      onSelectItem={handleSelectItem}
        />
    <Alerte onClose={()=>console.log("test")}>
      Hello <span>YOU</span> !
    </Alerte>
    {visibleAlerte &&
    <Alerte onClose={()=>setAlertVisibility(false)}>
      My alerte
    </Alerte>}
    <Button color="danger" onclick={()=>setAlertVisibility(true)}>My button</Button>
  </div>
}

export default App;