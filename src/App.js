import React from "react";
import "./App.css";
import NavbarComponent from "./NavbarComponent";
import WelcomeSection from "./WelcomeSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
      <WelcomeSection />
      <footer></footer>
    </div>
  );
}

export default App;
