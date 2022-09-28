import React from "react";
//Import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
//Global style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
