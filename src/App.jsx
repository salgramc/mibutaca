import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stadium from "./pages/Stadium";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:stadiumSlug" element={<Stadium />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;