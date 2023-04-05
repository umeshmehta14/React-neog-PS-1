import "./styles.css";
import Grade from "./Grade.js";
// Given a student object with student name and the marks for english, maths and computers. If the total marks of a student is >= 225, the grade is A, >=180 the grade is B, >=150 the grade is C, otherwise the grade is D. Build a React Component that takes the student object as props and uses it to show all the students details, total marks and grade on the DOM as shown in the image below.

// Example

// Data:

const student = {
  name: "John Doe",
  english: 90,
  maths: 80,
  computers: 70
};
export default function App() {
  return (
    <div className="App">
      <Grade student={student} />
    </div>
  );
}


const Grade = ({ student }) => {
    const { name, english, maths, computers } = student;
    const Total = english + maths + computers;
    return (
      <>
        <h1>Student Details</h1>
        <p>name:{name}</p>
        <p>english:{english}</p>
        <p>maths:{maths}</p>
        <p>computers:{computers}</p>
        <p>
          Grade:
          {Total >= 225 ? "A" : Total >= 180 ? "B" : Total >= 150 ? "C" : "D"}
        </p>
  
        <div></div>
      </>
    );
  };
  
  export default Grade;
  