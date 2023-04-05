import "./styles.css";
import DisplayProduct from "./DisplayProduct.js";
// Given the products data. Build a React component to display the name of all products as an unordered list on the DOM. Order of items display can vary from the image shown below.

// Example

// Data:

const products = [
  { name: "Perk", quantity: 10, sales: 7 },
  { name: "Pepsi", quantity: 10, sales: 20 },
  { name: "Coke", quantity: 18, sales: 50 },
  { name: "Maggi", quantity: 41, sales: 22 },
  { name: "5Star", quantity: 7, sales: 9 }
];

export default function App() {
  return (
    <div className="App">
      <DisplayProduct products={products} />
    </div>
  );
}

const DisplayProduct = (props) => {
    return (
      <>
        <h1>Product Names</h1>
        <ul>
          {props.products.map((e) => (
            <li>{e.name}</li>
          ))}
        </ul>
      </>
    );
  };
  
  export default DisplayProduct;
  