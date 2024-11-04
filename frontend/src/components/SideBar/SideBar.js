import { useState } from 'react';
import { RiChat3Line } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { menu } from '../../data/menu';

export default function SideBar({ activeIndex, setActiveIndex }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isLogoutHovered, setIsLogoutHovered] = useState(false);

  return (
    <div className="absolute left-[44px] top-[65px] w-[250px] h-[879px] flex flex-col justify-between">
      <div>
        <h2 className="font-semibold mb-[25px] text-[26px] w-[236px] h-[66px] mb-[25px] mt-[37px]">
          Welcome to the Legistai!
        </h2>
        <ul className="flex flex-col gap-[15px] ">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`px-[15px] py-[20px] flex gap-3 items-center cursor-pointer w-[250px] h-[54px] rounded-[40px]  
                ${activeIndex === index || hoverIndex === index
                  ? 'bg-dark text-primary' 
                  : 'bg-primary text-dark hover:bg-dark hover:text-primary'}`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className={`w-[24px] h-[24px] flex items-center justify-center ${activeIndex === index || hoverIndex === index ? 'text-green_blue' : 'text-dark hover:text-green_blue'}`}>
                {item.icon}
              </div>
              <a href={item.url} className={`justify-center text-[16px] ${activeIndex === index || hoverIndex === index ? 'text-primary' : 'text-gray-600'}`}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="flex px-8 gap-3 items-center cursor-pointer w-full h-[54px] rounded-[40px] px-[20px] py-[14px]  bg-[#eafcf9] text-primary hover:bg-opacity-20 hover:bg-dark">
            <div>
              <RiChat3Line className="w-[24px] h-[24px]  text-green_blue"  />
            </div>
            <a href="/" className=" text-green_blue text-[16px]">Start New Chat</a>
          </li>
        </ul>
      </div>

      <li
        className={`flex px-8 cursor-pointer gap-3 w-250 h-54 rounded-[40px] px-[20px] py-[15px]  
          ${isLogoutHovered ? 'bg-dark text-primary' : 'bg-light text-dark hover:bg-dark hover:text-primary'}`}
        onMouseEnter={() => setIsLogoutHovered(true)}
        onMouseLeave={() => setIsLogoutHovered(false)}
      >
        <div className={`flex items-center justify-center ${isLogoutHovered ? 'text-primary' : 'text-dark hover:text-green_blue'}`}>
          <IoLogOut className="w-[24px] h-[24px]" />
        </div>
        <a href="/register" className={` text-dark font-bold ${isLogoutHovered ? 'text-primary' : 'hover:text-primary'}`}>Log Out</a>
      </li>
    </div>
  );
}
