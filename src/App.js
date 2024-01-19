import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageComponent from "./Components/HomePageComponent";
import ButtonComponent from "./Components/Header";
import HomeComponent from "./Components/HomeComponent";
import AboutComponent from "./Components/AboutComponent";
import ContactComponent from "./Components/ContactComponent";
import MailComponent from "./Components/MailUsComponent";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePageComponent />} />
        <Route path="/Button" element={<ButtonComponent />} />
        <Route path="/Home" element={<HomeComponent />} />
        <Route path="/About" element={<AboutComponent />} />
        <Route path="/Contact" element={<ContactComponent />} />
        <Route path="/MailUs" element={<MailComponent />} />

      </Routes>
    </Router>
  );
}
export default App;