import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";
import History from "./History";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}
