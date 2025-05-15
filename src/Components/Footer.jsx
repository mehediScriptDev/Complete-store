import React from 'react';

const Footer = () => {
    return (
        <section>
            <footer className="bg-gray-100 border-t py-4 px-6 text-sm text-gray-700 flex justify-between items-center">
      {/* Left: Logo and Brand Name */}
      <div className="flex items-center space-x-2">
        <img src={travelBidLogo} alt="TravelBid Logo" className="h-6" />
        <span className="font-semibold">
          <span className="text-travel">Travel</span>
          <span className="text-bid">Bid</span>
        </span>
      </div>

      {/* Right: Links and Info */}
      <div className="text-right text-gray-600">
        <div>
          <a href="#" className="text-blue-600 hover:underline">
            Privacy
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of service
          </a>
        </div>
        <div className="mt-1">
          © 2003–2025 TravelBid Inc. All Rights Reserved.
          <br />
          TravelBid is a trademark of TravelBid Inc.
        </div>
      </div>
    </footer>
        </section>
    );
};

export default Footer;