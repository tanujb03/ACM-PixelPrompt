import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import useLenis from "./lib/useLenis";

function App() {
  useLenis();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
