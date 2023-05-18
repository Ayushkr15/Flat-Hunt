import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AccommodationPage from "./AccommodationPage";
import  FormPage from "./FormPage";
import ThankYouPage from "./ThankYouPage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import LandingPage from "./LandingPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/accommodation/:id" element={<AccommodationPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
