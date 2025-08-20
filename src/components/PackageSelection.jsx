import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowLeft, Shield, Clock, Users, Star } from 'lucide-react';

const PackageSelection = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Load user profile from localStorage
    const profile = localStorage.getItem('userProfile');
    if (profile) {
      setUserProfile(JSON.parse(profile));
    } else {
      // Redirect to welcome screen if no profile found
      navigate('/');
    }
  }, [navigate]);

  const packages = [
    {
      id: 'basic',
      name: 'Essential Care',
      price: 99,
      duration: '30 mins',
      features: [
        'Basic health screening',
        'Blood pressure check',
        'Weight & BMI assessment',
        'General consultation',
        'Health recommendations'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'standard',
      name: 'Comprehensive Care',
      price: 199,
      duration: '60 mins',
      features: [
        'Complete physical examination',
        'Blood work & lab tests',
        'Cardiovascular screening',
        'Nutritional assessment',
        'Personalized health plan',
        'Follow-up consultation'
      ],
      popular: true,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'premium',
      name: 'Executive Wellness',
      price: 399,
      duration: '90 mins',
      features: [
        'Executive health assessment',
        'Advanced diagnostic tests',
        'Specialist consultations',
        'Stress & mental health evaluation',
        'Lifestyle coaching session',
        'Annual wellness tracking',
        'Priority appointment booking'
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleContinue = () => {
    if (selectedPackage) {
      // Save selected package to localStorage
      localStorage.setItem('selectedPackage', JSON.stringify(selectedPackage));
      navigate('/confirmation');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={handleBack}
            className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Choose Your Care Package</h1>
            <p className="text-gray-600">Select the package that best fits your health needs</p>
          </div>
        </div>

        {/* Welcome Back Message */}
        {userProfile && (
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 mb-8 border border-blue-100">
            <p className="text-gray-700">
              Welcome back, <span className="font-medium text-blue-600">{userProfile.firstName}</span>! 
              Based on your profile, we've tailored these packages for you.
            </p>
          </div>
        )}

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                selectedPackage?.id === pkg.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
              }`}
              onClick={() => handlePackageSelect(pkg)}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Package Header */}
                <div className={`bg-gradient-to-r ${pkg.color} text-white p-4 rounded-xl mb-6`}>
                  <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">${pkg.price}</span>
                    <div className="flex items-center text-sm opacity-90">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Selection Indicator */}
                {selectedPackage?.id === pkg.id && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                    <p className="text-blue-700 font-medium text-sm">✓ Selected Package</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">HIPAA Compliant</p>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Licensed Professionals</p>
          </div>
          <div className="text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">5-Star Rated Care</p>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            disabled={!selectedPackage}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedPackage
                ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {selectedPackage ? 'Continue to Booking' : 'Select a Package'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageSelection;