"use client";

import { useState } from "react";
import { SuccessDialog } from "./success-dialog";

function AdvertiseForm() {
  const [accepted, setAccepted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your API
    setShowSuccess(true);
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
                  <input type="text" placeholder="Enter your full name" className="w-full border-[#6a302f] border-2 bg-transparent h-14 text-[#6a302f] placeholder:text-[#6a302f]/70 text-lg rounded-lg px-4" required />
                </div>

                <div>
                  <input type="email" placeholder="Enter your email id" className="w-full border-[#6a302f] border-2 bg-transparent h-14 text-[#6a302f] placeholder:text-[#6a302f]/70 text-lg rounded-lg px-4" required />
                </div>

                <div>
                  <input type="tel" placeholder="Enter your mobile number" className="w-full border-[#6a302f] border-2 bg-transparent h-14 text-[#6a302f] placeholder:text-[#6a302f]/70 text-lg rounded-lg px-4" required />
                </div>

                <div>
                  <input type="text" placeholder="Enter your location" className="w-full border-[#6a302f] border-2 bg-transparent h-14 text-[#6a302f] placeholder:text-[#6a302f]/70 text-lg rounded-lg px-4" required />
                </div>

                <div>
                  <textarea placeholder="Write your message" className="w-full border-[#6a302f] border-2 bg-transparent min-h-[120px] text-[#6a302f] placeholder:text-[#6a302f]/70 text-lg rounded-lg p-4 resize-none" required></textarea>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="w-5 h-5 border-[#6a302f] border-2 rounded text-[#6a302f] focus:ring-[#6a302f]" />
                <label htmlFor="terms" className="text-[#6a302f] font-normal">
                  I accept the{" "}
                  <a href="#" className="text-[#6a302f] underline">
                    Terms & Conditions
                  </a>{" "}
                  of the website and consent..
                </label>
              </div>

              <button type="submit" disabled={!accepted} className="w-full bg-[#797979] text-white rounded-lg py-4 text-xl font-medium hover:bg-[#797979]/90 disabled:opacity-50 transition-colors">
                Get in touch
              </button>

              <button type="button" className="w-full text-[#6a302f] text-xl font-medium">
                Close
              </button>
            </form>
          </div>

        </div>
      )}
          {showSuccess && <SuccessDialog open={showSuccess} onClose={() => window.location.href="https://news.abplive.com/mahakumbh-mela"} />}
    </>
  );
}

export default AdvertiseForm;
