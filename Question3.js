import "./styles.css";
import Stationer from "./Stationer.js";
// Build a React component to display a list of stationery items with a header. The items and header should be passed as props. Header should be “Stationery Items”.

// Data:

const items = ["pen", "pencil", "ruler", "eraser"];

export default function App() {
  return (
    <div className="App">
      <Stationer items={items} name={"Stationery Items"} />
    </div>
  );
}
const Stationer = (props) => {
    return (
      <>
        <h1>{props.name}</h1>
        <div>
          {props.items.map((e) => (
            <p>{e}</p>
          ))}
        </div>
      </>
    );
  };
  
  export default Stationer;
  