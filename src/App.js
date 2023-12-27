import React from "react";
import "./App.css";
import NavbarComponent from "./LandingPage/NavbarComponent";
import WelcomeSection from "./LandingPage/WelcomeSection";
import BestSellers from "./LandingPage/BestSellers";
import Products from "./LandingPage/Products";
import About from "./LandingPage/About";
import Reviews from "./LandingPage/Reviews";
import Footer from "./LandingPage/FooterComp";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
      <WelcomeSection />
      <BestSellers />
      <Products />
      <About />
      <Reviews />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
