'use client';

import React from 'react';
import { FaCreditCard, FaUser } from 'react-icons/fa';

interface Fees {
  type: string;
  amount: string;
  reducedAmount?: string;
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
        amount: '2000 BDT',
        bgColor: 'bg-accent',
        textColor: 'text-accent-foreground',
      },
      {
        type: 'International',
        amount: '100 USD',
        bgColor: 'bg-primary',
        textColor: 'text-primary-foreground',
      },
    ],
  },
  {
    category: 'Participants',
    fees: [
      {
        type: 'Local',
        amount: '699 BDT',
        reducedAmount: '999',
        bgColor: 'bg-secondary',
        textColor: 'text-secondary-foreground',
      },
      {
        type: 'International',
        amount: '50 USD',
        bgColor: 'bg-muted',
        textColor: 'text-muted-foreground',
      },
    ],
  },
];

export default function RegistrationProcess() {
  return (
    <div className="min-h-screen py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 container mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Registration Process
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            Complete your registration by selecting your category and following the payment
            instructions below.
          </p>
          <p className="text-black font-bold max-w-2xl mx-auto px-4">
            There will be no team registration, only individual registration. Team Name can be given
            in the abstract.
          </p>
        </div>

        {/* Registration Fees Section */}
        <div className="bg-card rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-primary to-primary-foreground px-6 py-5">
            <h2 className="text-xl md:text-2xl font-bold text-primary-foreground flex items-center gap-3">
              <FaCreditCard className="w-6 h-6" />
              Registration Fees
            </h2>
          </div>

          <div className="p-6 md:p-8">
            <div className="space-y-6">
              {registrationFees.map((category, index) => (
                <div key={index} className="border border-border rounded-xl overflow-hidden">
                  <div className="bg-muted px-6 py-4 border-b border-border">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <FaUser className="w-5 h-5 text-muted-foreground" />
                      {category.category}
                    </h3>
                  </div>

                  <div className="divide-y divide-border">
                    {category.fees.map((fee, feeIndex) => (
                      <div
                        key={feeIndex}
                        className="px-6 py-4 flex justify-between items-center hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground font-medium">{fee.type}</span>
                        </div>
                        <div
                          className={`px-4 py-2 rounded-full font-bold flex items-center gap-1 ${fee.bgColor} ${fee.textColor}`}
                        >
                          <del className="text-sm text-red-500"> {fee.reducedAmount}</del>
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
        {/* <PaymentInfo /> */}
      </div>
    </div>
  );
}
