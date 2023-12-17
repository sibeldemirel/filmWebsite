import ListGroup from "./components/ListGroup";

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
  </div>
}

export default App;