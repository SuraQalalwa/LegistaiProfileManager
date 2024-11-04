import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar, FaExternalLinkAlt } from 'react-icons/fa';

export default function BasicInformation({ user }) {
  return (
    <div className='w-[790px]'>
      <h2 className="text-[14px] mb-2">Basic Information</h2>
      <div className="bg-white p-4 rounded-[14px] ">
        <div className="flex mb-4 justify-between">
          <div className="flex items-center p-4 rounded-[20px]">
            <img src="/logo.png" alt="Company Logo" className="w-[100px] h-[100px] rounded-full mr-4" />
            <div>
              <h3 className="text-[20px] font-semibold">LEGISTAI</h3>
              <div className="flex items-center bg-light rounded-full p-1">
                <FaStar className="text-yellow-500" />
                <span className="ml-1 text-[12px] font-semibold">{user.rating} Rating</span>
              </div>
            </div>
          </div>
          <div className="flex items-center mr-[15px]">
            <a href="/" className="text-green_blue font-medium hover:underline flex items-center justify-center rounded-[30px] w-[125px] h-[35px] text-[12px] bg-[#E0F7F8]">
              <span className="mr-1">Website Link</span>
              <FaExternalLinkAlt className="text-green_blue" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3  mb-4 px-[15px] py-[15px] rounded-[10px]  bg-light">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-1">
              <FaMapMarkerAlt className="text-green_blue mr-1" />
              <h4 className="text-light_gray  text-[12px]">Location</h4>
            </div>
            <p className="text-black text-[14px]">{user.location}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-1">
              <FaPhone className="text-green_blue mr-1 scale-x-[-1]" />
              <h4 className="text-light_gray  text-[12px]">Phone Number</h4>
            </div>
            <p className="text-black text-[14px]">{user.phone_number}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-1">
              <FaEnvelope className="text-green_blue rounded-full mr-1" />
              <h4 className="text-light_gray text-[12px]">Email Address</h4>
            </div>
            <p className="text-black text-[14px]">{user.email}</p>
          </div>
        </div>

        <div className="bg-light p-4 rounded-[20px]  h-[100px]">
          <h4 className=" text-light_gray text-[12px]">Description</h4>
          <p className="text-[#000000] text-[12px]">{user.description}</p>
        </div>
      </div>
    </div>
  );
}
