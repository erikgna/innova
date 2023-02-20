import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Character } from "./pages/Character/Character";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <section className="flex justify-center bg-gray-800 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </HashRouter>
  );
}

export default App;
