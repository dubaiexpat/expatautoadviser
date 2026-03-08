import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Singapore from "./pages/Singapore";
import HongKong from "./pages/HongKong";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singapore" element={<Singapore />} />
        <Route path="/singapore/*" element={<Singapore />} />
        <Route path="/hongkong" element={<HongKong />} />
        <Route path="/hongkong/*" element={<HongKong />} />
      </Routes>
    </BrowserRouter>
  );
}