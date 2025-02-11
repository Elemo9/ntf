"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Image from "next/image";
import logoImg from "../../../public/assets/Tech fair 8.png";

const BookStandPage: React.FC = () => {
  const [showTnC, setShowTnC] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Stand booking request submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div
        className="p-8 rounded-lg shadow-[0_4px_20px_0px_rgba(0,255,127,0.4)] w-full max-w-6xl"
        style={{
          background: "linear-gradient(145deg, #1a1a1a, #262626)",
        }}
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          <Image
            src={logoImg}
            alt="Naija Tech Fair Logo"
            className="w-[180px] max-lg:w-[140px] aspect-auto"
          />
          <h1 className="text-4xl font-bold text-[#00ff7f]">Book a Stand</h1>
          <p className="text-gray-300 text-center">
            Reserve your exhibition space at Naija Tech Fair 2025. Complete the
            form below and our team will contact you.
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Company Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-green-500 text-sm font-semibold">
                Company Name *
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                className="p-2 h-[40px] w-full rounded-full bg-gray-800 text-white focus:outline-none border border-green-500"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-green-500 text-sm font-semibold">
                Contact Person *
              </label>
              <input
                type="text"
                placeholder="Enter contact name"
                className="p-2 h-[40px] w-full rounded-full bg-gray-800 text-white focus:outline-none border border-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-green-500 text-sm font-semibold">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="p-2 h-[40px] w-full rounded-full bg-gray-800 text-white focus:outline-none border border-green-500"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-green-500 text-sm font-semibold">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="p-2 h-[40px] w-full rounded-full bg-gray-800 text-white focus:outline-none border border-green-500"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-green-500 text-sm font-semibold">
              Company Website
            </label>
            <input
              type="url"
              placeholder="https://yourcompany.com"
              className="p-2 h-[40px] w-full rounded-full bg-gray-800 text-white focus:outline-none border border-green-500"
            />
          </div>

          {/* Stand Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="flex flex-col gap-1">
              <label className="text-green-500 text-sm font-semibold">
                Stand Type *
              </label>
              <select
                className="p-2 h-[40px] w-full rounded-full bg-gray-800 text-white focus:outline-none border border-green-500"
                required
              >
                <option value="">Select stand type</option>
                <option value="basic">Basic Stand (6m²)</option>
                <option value="premium">Premium Stand (12m²)</option>
                <option value="custom">Custom Space</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-green-500 text-sm font-semibold">
                Preferred Location
              </label>
              <select
                className="p-2 h-[40px] w-full rounded-full bg-gray-800 text-white focus:outline-none border border-green-500"
              >
                <option value="">Select preferred area</option>
                <option value="entrance">Near Entrance</option>
                <option value="main">Main Hall</option>
                <option value="tech">Tech Pavilion</option>
                <option value="no-preference">No Preference</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-green-500 text-sm font-semibold">
                Number of Stands *
              </label>
              <input
                type="number"
                min="1"
                placeholder="Enter quantity"
                className="p-2 h-[40px] w-full rounded-full bg-gray-800 text-white focus:outline-none border border-green-500"
                required
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="flex flex-col gap-1 mt-4">
            <label className="text-green-500 text-sm font-semibold">
              Additional Requirements
            </label>
            <textarea
              placeholder="Special requests, power needs, custom branding requirements, etc."
              className="p-2 h-[120px] w-full rounded-lg bg-gray-800 text-white focus:outline-none border border-green-500 resize-none"
            />
          </div>

          {/* Submit Section */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <button
              type="submit"
              className="w-full md:w-[200px] h-[40px] bg-green-500 text-white text-sm font-bold rounded-full hover:bg-green-600 transition-all"
            >
              Submit Booking Request
            </button>
            <p className="text-gray-300 text-xs text-center">
              By submitting this form, you agree to our terms and conditions. Our
              team will contact you within 48 hours to confirm your booking.
            </p>
          </div>
        </motion.form>

        {/* Terms and Conditions Section */}
        <div className="mt-8">
          <button
            onClick={() => setShowTnC((prev) => !prev)}
            className="text-green-500 text-sm font-bold underline"
          >
            {showTnC ? "Hide Terms and Conditions" : "Show Terms and Conditions"}
          </button>
          {showTnC && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg text-gray-300 text-sm overflow-y-auto max-h-64">
              <h2 className="text-green-500 font-bold mb-2">
                Naija Tech Fair – Book a Stand Terms and Conditions
              </h2>
              <p>
                <strong>Last Updated:</strong> February 11, 2025
              </p>
              <p className="mt-2">
                By submitting an application to book a stand at Naija Tech Fair
                (“the Event”), you (“Exhibitor”) agree to the following terms and
                conditions, which form a binding agreement between you and NAIJA TECH FAIR PROJECTS Ltd (“Organizer”).
              </p>
              <h3 className="text-green-500 font-bold mt-4">1. Definitions</h3>
              <p>
                <strong>Event:</strong> Refers to the Naija Tech Fair, including all
                associated activities, exhibitions, and networking sessions.
              </p>
              <p>
                <strong>Stand:</strong> The allocated exhibition space provided to
                the Exhibitor at the Event.
              </p>
              <p>
                <strong>Application:</strong> The online or written form submitted by
                an Exhibitor to secure a stand.
              </p>
              <p>
                <strong>Fee:</strong> The stand booking fee, any applicable service
                charges, and any other charges as detailed in the booking information.
              </p>
              <h3 className="text-green-500 font-bold mt-4">
                2. Eligibility and Application
              </h3>
              <p>
                Only registered companies, startups, and individuals with valid
                business credentials are eligible to book a stand. All applications
                must be submitted through the Organizer’s official website or
                designated booking portal. Stand locations and sizes will be allocated
                at the Organizer’s sole discretion based on submission order, space
                availability, and suitability to the event’s layout.
              </p>
              <h3 className="text-green-500 font-bold mt-4">3. Payment Terms</h3>
              <p>
                Upon successful application, the Exhibitor must pay the full or deposit
                amount (as indicated in the booking details) by the stated deadline.
                Payments may be made via approved methods. An official invoice will be
                issued upon confirmation, and failure to pay on time may result in
                cancellation, with any amounts paid being forfeited as specified in the
                Cancellation Policy.
              </p>
              <h3 className="text-green-500 font-bold mt-4">
                4. Stand Allocation and Specifications
              </h3>
              <p>
                The Organizer will provide details about the allocated stand, including
                dimensions, location, and built-in amenities. Any additional
                customization must be arranged in advance and may incur extra charges.
                All setups must comply with venue safety regulations and Organizer guidelines.
              </p>
              <h3 className="text-green-500 font-bold mt-4">
                5. Cancellation and Refund Policy
              </h3>
              <p>
                Cancellation by the Exhibitor may incur fees as specified at booking.
                If the Organizer cancels or modifies the event, a full refund or a
                comparable alternative will be offered. Neither party is liable for
                cancellations due to force majeure.
              </p>
              <h3 className="text-green-500 font-bold mt-4">
                6. Exhibitor Obligations
              </h3>
              <p>
                Exhibitors must adhere to setup and dismantling schedules, maintain their
                stand, and comply with all event and venue regulations. Damages due to
                negligence may incur additional fees.
              </p>
              <h3 className="text-green-500 font-bold mt-4">
                7. Liability and Indemnification
              </h3>
              <p>
                The Organizer is not liable for any loss, damage, or injury during the
                event except in cases of proven negligence. The Exhibitor agrees to
                indemnify the Organizer against any claims arising from their participation.
              </p>
              <h3 className="text-green-500 font-bold mt-4">
                8. Intellectual Property
              </h3>
              <p>
                Exhibitors grant the Organizer a non-exclusive license to use their logos
                and materials for promotional purposes related to the event. Exhibitors
                are responsible for ensuring their content does not infringe third-party
                rights.
              </p>
              <h3 className="text-green-500 font-bold mt-4">
                9. Amendments and Modifications
              </h3>
              <p>
                The Organizer reserves the right to amend these terms at any time. Any
                changes will be communicated to confirmed exhibitors. Continued
                participation constitutes acceptance of the updated terms.
              </p>
              <h3 className="text-green-500 font-bold mt-4">
                10. Governing Law and Jurisdiction
              </h3>
              <p>
                These terms are governed by the laws of Nigeria jurisdiction. Any disputes
                will be subject to the exclusive jurisdiction of the courts in that
                jurisdiction.
              </p>
              <h3 className="text-green-500 font-bold mt-4">11. Miscellaneous</h3>
              <p>
                These terms, together with any referenced policies, constitute the entire
                agreement. If any provision is deemed unenforceable, the remaining
                provisions will remain in effect. Please contact info@naijatechfair.com for any further questions regarding these terms.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookStandPage;