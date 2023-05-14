import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AccommodationPage from "./AccommodationPage";
import  FormPage from "./FormPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accommodation/:id" element={<AccommodationPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
