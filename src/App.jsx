import "./App.css";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstExperiment from "./Pages/FirstExperiment";
import SecondExperiment from "./Pages/SecondExperiment";
import ThirdExperiment from "./Pages/ThirdExperiment";

function App() {
  return (
    <div className="max-w-[1920px] 2xl:mx-auto lg:mx-[40px] mx-[10px] mt-[10px]">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/experiment1" element={<FirstExperiment />} />
          <Route path="/experiment2" element={<SecondExperiment />} />
          <Route path="/experiment3" element={<ThirdExperiment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
