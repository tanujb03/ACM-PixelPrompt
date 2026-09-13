import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SinglePage from "./pages/SinglePage";
import useLenis from "./lib/useLenis";

function App() {
  useLenis();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<SinglePage />} />
      </Route>
    </Routes>
  );
}

export default App;
