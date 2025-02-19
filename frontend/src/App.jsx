import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home/Home";
import About from "./components/pages/About";
import Users from "./components/pages/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
