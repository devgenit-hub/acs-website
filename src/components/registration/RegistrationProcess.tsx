'use client';
import { bkash, nagad } from '@/assets';
import Image from 'next/image';
import React from 'react';
import {
  FaCreditCard,
  FaBuilding,
  FaMapMarkerAlt,
  FaHashtag,
  FaUser,
  FaUniversity,
  FaMobileAlt,
} from 'react-icons/fa';

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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
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
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary-foreground px-8 py-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary-foreground flex items-center gap-3">
              <FaUniversity className="w-7 h-7" />
              Payment Information
            </h2>
          </div>

          <div className="p-8">
            {/* Bank Info */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
              <div className="bg-accent/20 p-6 rounded-xl border-2 border-accent">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-2">
                    অগ্রণী ব্যাংক লিমিটেড
                  </div>
                  <div className="text-lg font-semibold text-foreground">Agrani Bank PLC</div>
                  <div className="text-sm text-muted-foreground italic mt-1">
                    Committed to serve the nation
                  </div>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="bg-accent/20 p-4 rounded-lg border border-accent">
                  <div className="flex items-center gap-3 mb-2">
                    <FaUser className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Account Name</span>
                  </div>
                  <p className="text-muted-foreground font-mono font-medium">ICESGE-2025</p>
                </div>

                <div className="bg-muted p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <FaHashtag className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Account Number</span>
                  </div>
                  <p className="text-muted-foreground font-mono font-medium">0200023735145</p>
                </div>

                <div className="bg-secondary p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <FaBuilding className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Bank Name</span>
                  </div>
                  <p className="text-muted-foreground font-medium">Agrani Bank PLC</p>
                </div>

                <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMapMarkerAlt className="w-5 h-5 text-destructive" />
                    <span className="font-semibold text-foreground">Branch Name</span>
                  </div>
                  <p className="text-muted-foreground font-medium">DU</p>
                </div>
              </div>
            </div>

            {/* Mobile Banking Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3 mb-6">
                <FaMobileAlt className="w-6 h-6 text-primary" />
                Mobile Banking
              </h3>

              <div className="flex flex-col gap-6">
                {/* Account Name */}
                <div className="bg-muted/50 p-4 rounded-lg border border-border col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <FaUser className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">
                      <p>Account Name</p>
                      <p className="text-muted-foreground font-medium">Md. Rakibur Rahman</p>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 w-full flex-1">
                  {/* Bkash */}
                  <div className="bg-pink-100 p-4 rounded-lg border border-pink-300 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Image width={40} height={50} src={bkash} alt="Bkash" className="h-10" />
                      <span className="font-semibold text-foreground">
                        <p>Bkash</p>
                        <p className="text-muted-foreground font-medium">01518618583</p>
                      </span>
                    </div>
                  </div>
                  {/* Nagad */}
                  <div className="bg-orange-100 p-4 rounded-lg border border-orange-300 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Image width={40} height={50} src={nagad} alt="Nagad" className="h-10" />
                      <span className="font-semibold text-foreground">
                        <p>Nagad</p>
                        <p className="text-muted-foreground font-medium">01518618583</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-warning/20 border border-warning rounded-lg p-6">
              <h3 className="text-lg font-semibold text-warning mb-3">Payment Instructions</h3>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Select your registration category and note the corresponding fee amount
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Transfer the exact amount to the provided bank account or mobile wallet
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></span>
                  <span>Keep the transaction receipt for verification purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></span>
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
