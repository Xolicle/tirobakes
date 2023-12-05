import React from "react";
import "./App.css";
import NavbarComponent from "./LandingPage/NavbarComponent";
import WelcomeSection from "./LandingPage/WelcomeSection";
import BestSellers from "./LandingPage/BestSellers";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
      <WelcomeSection />
      <div className="c3">
        <BestSellers />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
