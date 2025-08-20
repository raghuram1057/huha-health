import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/splashScreen" ;
import WelcomeScreen from "./components/WelcomeScreen";
import PackageSelection from "./components/PackageSelection";
import BookingConfirmation from "./components/BookingConfirmation";

function App() {
  return (
    <SplashScreen>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/packages" element={<PackageSelection />} />
            <Route path="/confirmation" element={<BookingConfirmation />} />
          </Routes>
        </div>
      </Router>
    </SplashScreen>
  );
}

export default App;
