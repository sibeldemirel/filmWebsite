import ListGroup from "./components/ListGroup";
import Alerte from "./components/Alerte";
import { Button } from "./components/Button";


const App = () => {
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
    <Alerte>
      Hello <span>YOU</span> !
    </Alerte>
    <Button color="danger" onclick={()=>console.log("click")}>Did it again</Button>
  </div>
}

export default App;