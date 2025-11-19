import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HooksPage from "./pages/HooksPage";
import HookDetailPage from "./pages/HookDetailPage";
import RenderNotes from "./pages/RenderPage";
import StateStructurePage from "./pages/StateStructure";

export default function App() {
  return (
    <Router>
      <div data-theme="black" className="min-h-screen flex flex-col ">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hooks" element={<HooksPage />} />
            <Route path="/render" element={<RenderNotes />} />
            <Route path="/state-structure" element={<StateStructurePage />} />
            <Route path="/hooks/:hookName" element={<HookDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
