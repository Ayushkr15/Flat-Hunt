import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AccommodationPage from "./AccommodationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accommodation/:id" element={<AccommodationPage />} />
      </Routes>
    </div>
  );
}

export default App;
