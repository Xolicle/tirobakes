import React from "react";
import "./App.css";
import NavbarComponent from "./LandingPage/NavbarComponent";
import WelcomeSection from "./LandingPage/WelcomeSection";
import BestSellers from "./LandingPage/BestSellers";
import Products from "./LandingPage/Products";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
      <WelcomeSection />
      <BestSellers />
      <Products />
      <footer></footer>
    </div>
  );
}

export default App;
