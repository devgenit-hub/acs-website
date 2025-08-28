import React from 'react';
import {
  FaCreditCard,
  FaBuilding,
  FaMapMarkerAlt,
  FaHashtag,
  FaUser,
  FaUniversity,
} from 'react-icons/fa';

interface Fees {
  type: string;
  amount: string;
  bgColor: string;
  textColor: string;
}

interface RegistrationFees {
  category: string;
  fees: Fees[];
}

const registrationFees: RegistrationFees[] = [
  {
    category: 'Professional',
    fees: [
      {
        type: 'Local',
        amount: '2500 BDT',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-700',
      },
      {
        type: 'International',
        amount: '100 USD',
        bgColor: 'bg-green-50',
        textColor: 'text-green-700',
      },
    ],
  },
  {
    category: 'Authors (Student)',
    fees: [
      {
        type: 'Local',
        amount: '1500 BDT',
        bgColor: 'bg-purple-50',
        textColor: 'text-purple-700',
      },
      {
        type: 'International',
        amount: '50 USD',
        bgColor: 'bg-orange-50',
        textColor: 'text-orange-700',
      },
    ],
  },
  {
    category: 'Participants',
    fees: [
      {
        type: 'Local',
        amount: '2000 BDT',
        bgColor: 'bg-indigo-50',
        textColor: 'text-indigo-700',
      },
    ],
  },
];

export default function RegistrationProcess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Registration Process
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Complete your registration by selecting your category and following the payment
            instructions below.
          </p>
        </div>

        {/* Registration Fees Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden mb-8 sm:mb-10 md:mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
              <FaCreditCard className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              Registration Fees
            </h2>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              {registrationFees.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                      <FaUser className="w-5 h-5 text-gray-600" />
                      {category.category}
                    </h3>
                  </div>

                  <div className="divide-y divide-gray-200">
                    {category.fees.map((fee, feeIndex) => (
                      <div
                        key={feeIndex}
                        className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${fee.bgColor.replace('50', '200')}`}
                          ></div>
                          <span className="text-gray-700 font-medium">{fee.type}</span>
                        </div>
                        <div
                          className={`px-4 py-2 rounded-full font-bold ${fee.bgColor} ${fee.textColor}`}
                        >
                          {fee.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Information Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <FaUniversity className="w-7 h-7" />
              Payment Information
            </h2>
          </div>

          <div className="p-8">
            {/* Bank Logo and Info */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800 mb-2">
                    অগ্রণী ব্যাংক লিমিটেড
                  </div>
                  <div className="text-lg font-semibold text-green-700">Agrani Bank PLC</div>
                  <div className="text-sm text-green-600 italic mt-1">
                    Committed to serve the nation
                  </div>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <FaUser className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Account Name</span>
                  </div>
                  <p className="text-blue-700 font-mono font-medium">ICSHSD-2025</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <FaHashtag className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-purple-800">Account Number</span>
                  </div>
                  <p className="text-purple-700 font-mono font-medium">0200023735145</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <FaBuilding className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Bank Name</span>
                  </div>
                  <p className="text-green-700 font-medium">Agrani Bank PLC</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMapMarkerAlt className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-orange-800">Branch Name</span>
                  </div>
                  <p className="text-orange-700 font-medium">DUET</p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Payment Instructions</h3>
              <ul className="text-yellow-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Select your registration category and note the corresponding fee amount
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Transfer the exact amount to the provided bank account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Keep the transaction receipt for verification purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Submit your payment proof along with your registration form</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
