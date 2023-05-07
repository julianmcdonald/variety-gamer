import "./App.css";
import Checklist from "./Checklist";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = () => {
    setSubmitted(!submitted);
    console.log(submitted);
  };

  return (
    <div>
      {!submitted ? (
        <div>
          <Checklist /> <Button submitHandler={submitHandler} />
        </div>
      ) : (
        <div>
          <img
            src="https://tenor.com/view/vegeta-its-over9000-gif-14419267.gif"
            alt="Vegeta over 9000!"
          ></img>
          <div>
            <button onClick={() => submitHandler()}>Return to checklist</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
