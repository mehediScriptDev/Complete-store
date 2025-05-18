import React from 'react';

const VisaCard = ({visa}) => {
    const {country,title,price,delivery,image} = visa;
    return (
        <section>
             <div class="max-w-xs rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-1 mx-auto group">
        <img
          class="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt="Country Image"
        />
        <div class="p-4">
          <h3 class="text-blue-600 font-semibold text-lg hover:underline cursor-pointer">
            {title}
          </h3>
          <p class="text-gray-700 mt-1">
            From <span class="font-bold">${price}</span>
          </p>
          <div class="flex items-center text-sm text-gray-600 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6a9 9 0 100 18 9 9 0 000-18z"
              />
            </svg>
            {delivery}
          </div>
        </div>
      </div>
        </section>
    );
};

export default VisaCard;