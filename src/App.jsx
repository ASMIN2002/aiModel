import React from "react";
import "./App.css";
import va from "./assets/ai2.png";
import { FaMicrophone } from "react-icons/fa";
import { useContext } from "react";
import { dataContext } from "./context/UserContext";
import speakimg from "./assets/speak.gif";
import aiimg from "./assets/aiVoice.gif";
import { FaBackward } from "react-icons/fa";

function App() {
  let { recognition, speaking, setSpeaking,prompt,response,setPrompt,setResponse } = useContext(dataContext);

  return (

    <div className="main">
      <a href="https://kuldeep2002.netlify.app/" className="back"><FaBackward /> Back</a>
      <p className="top">Developed by Asmin Kuldeep Jena</p>
      <img src={va} alt="" id="ason" />
      <span>I'm ASON, Your Advanced Virtual Assistant</span>
      {!speaking ?
        <button
          onClick={() => {
            setPrompt("Listening...")
            setSpeaking(true)
            setResponse(false)
            recognition.start()

          }}
        >
          Click here <FaMicrophone />
        </button>
      : 
        <div className="response">
          {!response? <img src={speakimg} alt="" id="speak"/>:<img src={aiimg} alt="" id="aiimg"/>}
          <p>{prompt}</p>
        </div>
      }
    </div>
  );
}

export default App;
