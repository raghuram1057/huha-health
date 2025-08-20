import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Calendar, Clock, MapPin, Package } from "lucide-react";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Simulated appointment details
  const appointmentDate = "Monday, September 2, 2025";
  const appointmentTime = "10:30 AM";
  const labLocation = "CareHealth Medical Center, 123 Health Street, Medical District";

  useEffect(() => {
    const pkg = localStorage.getItem("selectedPackage");
    if (pkg) {
      setSelectedPackage(JSON.parse(pkg));
    } else {
      navigate("/"); // Redirect if no package found
    }
  }, [navigate]);

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading confirmation...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600">
            Your appointment has been successfully scheduled
          </p>
        </div>

        {/* Package Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <Package className="w-5 h-5 mr-2 text-blue-600" />
            Selected Package
          </h2>
          <p className="text-xl font-bold text-gray-900">
            {selectedPackage.name}
          </p>
          <p className="text-gray-600">{selectedPackage.details}</p>
        </div>

        {/* Appointment Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Appointment Details
          </h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-800 font-medium">{appointmentDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-800 font-medium">{appointmentTime}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-800 font-medium">{labLocation}</span>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Book Another Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
