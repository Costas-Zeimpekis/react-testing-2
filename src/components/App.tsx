import React from "react";
import "./App.css";
import ComentBox from "./ComentBox/ComentBox";
import ComentList from "./ComentList/ComentList";

const App: React.FC = () => {

  return (
    <div className="App">
      <h2 className="test-class">This is the app component</h2>
      <ComentBox />
      <ComentList />
    </div>
  );
};

export default App;
