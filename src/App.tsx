import ListGroup from "./components/ListGroup";

const App = () => {
  let items = [
    "NY",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris"
];
  return <div>
    <ListGroup 
      items={["NY",
        "San Francisco",
        "Tokyo",
        "London",
        "Paris"]} 
      heading={"Cities"}
        />
  </div>
}

export default App;