import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
