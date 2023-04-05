import "./styles.css";
import DisplayDetails from "./DisplayDetails.js";
// Consider the products data from previous question and display all the product details as unordered list for which the number of sales is more than the quantity.

const products = [
  { name: "Perk", quantity: 10, sales: 7 },
  { name: "Pepsi", quantity: 10, sales: 20 },
  { name: "Coke", quantity: 18, sales: 50 },
  { name: "Maggi", quantity: 41, sales: 22 },
  { name: "5Star", quantity: 7, sales: 9 }
];

// Order of items display can vary from the image shown below.

export default function App() {
  return (
    <div className="App">
      <DisplayDetails products={products} />
    </div>
  );
}
const DisplayDetails = (props) => {
    return (
      <>
        <ol>
          {props.products
            .filter((e) => e.sales > e.quantity)
            .map((e) => (
              <li>
                name:{e.name},"quantity":e.quantity, "sales":{e.sales}
              </li>
            ))}
        </ol>
      </>
    );
  };
  export default DisplayDetails;
  