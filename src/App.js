import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AccommodationPage from "./AccommodationPage";
import  FormPage from "./FormPage";
import ThankYouPage from "./ThankYouPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accommodation/:id" element={<AccommodationPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />

      </Routes>
    </div>
  );
}

export default App;
