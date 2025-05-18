import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const handlesubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Thanks for reaching us out",
      icon: "success",
      draggable: true,
    });

    e.target.reset();
  };
  return (
    <section className="py-10 bg-white">
      <div className="w-11/12 md:w-10/12 mx-auto">
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex gap-2 text-gray-500">
            <li>
              <a className="text-blue-600 hover:underline" href="/">
                TravelBid
              </a>
            </li>

            <li className="text-black font-medium">Contact</li>
          </ul>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-10">
          Have questions? We're here to help. Reach out via the form below or
          Check our F.A.Q sectionn.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="">
            <div>
              <iframe
                className="w-full md:h-96 sm:h-80 border-2 border-bidcl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266.3232139604234!2d76.87495819919776!3d8.56613862822097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf5e4f1c277d%3A0xd60489650ed30cf0!2sTravelBid!5e0!3m2!1sen!2sbd!4v1747564437080!5m2!1sen!2sbd"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handlesubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Write your name here"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                placeholder="write your email here"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                required
                placeholder="write your message here"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-bidcl text-white px-6 py-2 rounded hover:bg-travelcl transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
