import "./styles.css";
// Build a React component to display all the employee details as unordered list on the DOM in the following format:

// name: name, level: level, dept: dept, designation: designation, salary: salary

// No need to pass as props.

// Given Data:

// QUESTION 9
// Considering above data given in question 8, at the end of all the employee details, calculate and display the total salary expense of the company. Total Salary Expense: totalSalary

// QUESTION 10
// Considering above data given in question 8, display the details of employee with orange backgroundColor, who are at level 2.

// QUESTION 11
// Considering above data given in question 8, add a border around the employee details whose designation is “President”.

const employees = [
  {
    name: "Jack Smith",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 24000
  },
  {
    name: "Mary Robbins",
    level: 3,
    dept: "Fin",
    designation: "Manager",
    salary: 28000
  },
  {
    name: "Steve Williams",
    level: 4,
    dept: "Ops",
    designation: "President",
    salary: 35000
  },
  {
    name: "Bob Andrews",
    level: 1,
    dept: "Fin",
    designation: "Trainee",
    salary: 16500
  },
  {
    name: "Dave Martin",
    level: 2,
    dept: "Fin",
    designation: "Manager",
    salary: 21700
  },
  {
    name: "Julia Clarke",
    level: 3,
    dept: "Ops",
    designation: "Manager",
    salary: 26900
  },
  {
    name: "Kathy Jones",
    level: 4,
    dept: "Tech",
    designation: "President",
    salary: 42500
  },
  {
    name: "Tom Bresnan",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 22200
  }
];
export default function App() {
  return (
    <div className="App">
      <ol>
        {employees.map(({ name, level, dept, designation, salary }) => (
          <li
            style={{
              backgroundColor: level === 2 ? "orange" : "",
              border: designation === "President" ? "2px solid black" : ""
            }}
          >
            name:{name}, level:{level}, dept:{dept}, designation:{designation},
            salary:{salary}
          </li>
        ))}
        {/* // QUESTION 9 */}
        {
          <p>
            Total Expenses:{" "}
            {employees.reduce((acc, { salary }) => (acc = acc + salary), 0)}
          </p>
        }
      </ol>
    </div>
  );
}
