// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ConverterPage from "./components/ConverterPage";
import SendPage from "./components/SendPage";
import ChartPage from "./components/ChartPage";
import SettingPage from "./components/SettingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Converter */}
        <Route path="/converter" element={<ConverterPage />} />

        {/* Placeholder Pages */}
        <Route path="/send" element={<SendPage />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </Router>
  );
}

export default App;