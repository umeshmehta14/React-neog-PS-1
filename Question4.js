import "./styles.css";
import DisplayImage from "./DisplayImage.js";
// Build a React component to display an image with a caption. The image and caption should be passed as props.

// Data:

const imageLink =
  "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
const caption = "Spring Flowers";

export default function App() {
  return (
    <div className="App">
      <DisplayImage imageLink={imageLink} caption={caption} />
    </div>
  );
}


const DisplayImage = (props) => {
    return (
      <>
        <div>
          <img src={props.imageLink} alt="image not available" height="200px" />
          <p>{props.caption}</p>
        </div>
      </>
    );
  };
  export default DisplayImage;
  