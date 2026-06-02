import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stadium from "./pages/Stadium";
import Section from "./pages/Section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/:stadiumSlug"
          element={<Stadium />}
        />

        <Route
          path="/:stadiumSlug/:sectionId"
          element={<Section />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;