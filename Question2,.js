import "./styles.css";
import CustomButton from "./CustomButton.js";
// Build a React component to display a button with custom styles and button text as ‘Start’. The styles should be passed as props.

// Data:

const backgroundColor = "lightgreen";
const color = "darkgreen";
const borderRadius = "5px";
const padding = "10px";

export default function App() {
  return (
    <div className="App">
      <CustomButton
        backgroundColor={backgroundColor}
        color={color}
        borderRadius={borderRadius}
        padding={padding}
      />
    </div>
  );
}

const CustomButton = (props) => {
    const { backgroundColor, color, borderRadius, padding } = props;
    return (
      <>
        <button
          style={{
            backgroundColor: `${backgroundColor}`,
            color: `${color}`,
            padding: ` ${padding}`,
            borderRadius: `${borderRadius}`
          }}
        >
          click me
        </button>
      </>
    );
  };
  export default CustomButton;
  