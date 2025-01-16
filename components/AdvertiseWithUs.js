"use client";

import { useState } from "react";
import { SuccessDialog } from "./success-dialog";
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import Link from 'next/link';

function AdvertiseForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    location: '',
    message: ''
  });
  const [accepted, setAccepted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      const formattedValue = formatMobileNumber(value);
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const formatMobileNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    const char = { 4: ' ', 8: ' ', 12: ' ' };
    let formatted = '';
    for (let i = 0; i < numbers.length; i++) {
      if (i in char) formatted += char[i];
      formatted += numbers[i];
    }
    return formatted.trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'advertisements'), formData);
      setShowSuccess(true);
      setFormData({ fullName: '', email: '', mobile: '', location: '', message: '' });
      setAccepted(false);
    } catch (error) {
      console.error('Error adding document: ', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <>
      {!showSuccess && (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[url('https://abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com/overlay-bg.svg')]">
          <div className="w-full max-w-2xl bg-[#fff5e3] rounded-3xl p-8 space-y-6">
            <div className="space-y-2">
              <h1 className="text-[#6a302f] text-4xl md:text-5xl font-medium text-center">Advertise with us</h1>
              <p className="text-[#7a3837] text-center text-lg">Showcase your brand to millions at Mahakumbh & leave a lasting impression!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full border-[#6a302f] border-2 bg-transparent h-14 text-[#6a302f] placeholder:text-[#6a302f]/70 text-lg rounded-lg px-4"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email id"
                    className="w-full border-[#6a302f] border-2 bg-transparent h-14 text-[#6a302f] placeholder:text-[#6a302f]/70 text-lg rounded-lg px-4"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                    className="w-full border-[#6a302f] border-2 bg-transparent h-14 text-[#6a302f] placeholder:text-[#6a302f]/70 text-lg rounded-lg px-4"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter your location"
                    className="w-full border-[#6a302f] border-2 bg-transparent h-14 text-[#6a302f] placeholder:text-[#6a302f]/70 text-lg rounded-lg px-4"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message"
                    className="w-full border-[#6a302f] border-2 bg-transparent min-h-[120px] text-[#6a302f] placeholder:text-[#6a302f]/70 text-lg rounded-lg p-4 resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="w-5 h-5 border-[#6a302f] border-2 rounded text-[#6a302f] focus:ring-[#6a302f]"
                />
                <label htmlFor="terms" className="text-[#6a302f] font-normal">
                  I accept the{" "}
                  <a href="#" className="text-[#6a302f] underline">
                    Terms & Conditions
                  </a>{" "}
                  of the website and consent..
                </label>
              </div>

              <button
                type="submit"
                disabled={!accepted}
                className="w-full bg-[#797979] text-white rounded-lg py-4 text-xl font-medium hover:bg-[#797979]/90 disabled:opacity-50 transition-colors"
              >
                Get in touch
              </button>

              <Link href={(locale == "en" ? "https://news.abplive.com/" : "https://www.abplive.com/") + "mahakumbh-mela"} type="button" className="w-full text-[#6a302f] text-xl font-medium">
                Close
              </Link>
            </form>
          </div>
        </div>
      )}
      {showSuccess && <SuccessDialog open={showSuccess} onClose={() => {}} />}
    </>
  );
}

export default AdvertiseForm;
