import React from 'react';
import { bkash, nagad } from '@/assets';
import Image from 'next/image';
import { FaUser, FaUniversity, FaMobileAlt } from 'react-icons/fa';

export default function PaymentInfo() {
  return (
    <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary-foreground px-8 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground flex items-center gap-3">
          <FaUniversity className="w-7 h-7" />
          Payment Information
        </h2>
      </div>

      <div className="p-8">
        {/* Bank Info */}
        {/* <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="bg-accent/20 p-6 rounded-xl border-2 border-accent">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-2">অগ্রণী ব্যাংক লিমিটেড</div>
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
        </div> */}

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
              <span>Select your registration category and note the corresponding fee amount</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></span>
              <span>Transfer the exact amount to the provided bank account or mobile wallet</span>
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
  );
}
