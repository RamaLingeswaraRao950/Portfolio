import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
