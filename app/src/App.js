import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import React, {useState} from "react";


function App() {
  const [skillsDisplay, setSkillsDisplay] = useState(false);
  const [empHistoryDisplay, setEmpHistoryDisplay] = useState(false);

  function setSkillsDis() {
    skillsDisplay ? setSkillsDisplay(false) : setSkillsDisplay(true);
  }

  function setEmpHistoryDis() {
    empHistoryDisplay? setEmpHistoryDisplay(false): setEmpHistoryDisplay(true);
  }

  return (
    <>
      <Header />
      <Main
        setSkillsDisplay={setSkillsDis}
        skillsDisplay={skillsDisplay}
        setEmpHistoryDisplay={setEmpHistoryDis}
        empHistoryDisplay={empHistoryDisplay}
      />
      <Footer />
    </>
  );
}

export default App;
