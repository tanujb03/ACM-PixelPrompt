import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SinglePage from "./pages/SinglePage";
import EventDetail from "./pages/EventDetail";
import useLenis from "./lib/useLenis";

function App() {
  useLenis();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="*" element={<SinglePage />} />
      </Route>
    </Routes>
  );
}

export default App;
