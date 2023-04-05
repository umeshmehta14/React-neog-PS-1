import "./styles.css";
import Employee from "./Employee.js";
// Build an EmployeeCard component in React to display name, designation and work experience of a person. Pass name, designation and work experience as props.

// The colour of “Designation:” should be green.
// The colour of “Experience:” should be blue.
export default function App() {
  const employee_data = {
    name: "umesh",
    designation: "Software engineer",
    work_experience: "5 years"
  };
  return (
    <>
      <Employee employee_data={employee_data} />
    </>
  );
}

const Employee = (props) => {
    const { name, designation, work_experience } = props.employee_data;
    return (
      <>
        <div>
          <p>Name: {name}</p>
          <p style={{ color: "green" }}>designation: {designation}</p>
          <p style={{ color: "blue" }}>Work Experience: {work_experience}</p>
        </div>
      </>
    );
  };
  
  export default Employee;
  
