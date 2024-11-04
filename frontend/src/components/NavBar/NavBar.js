import Image from 'next/image';
import { FaBell, FaUser, FaChevronDown } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import { FlagIcon } from 'react-flag-kit';
import { IoMdNotifications } from "react-icons/io";

export default function NavBar({ user }) {
  return (
    <header className="w-full h-[56px] flex items-center justify-between pl-[44px] pr-[64px] mt-[29px] mb-[30px]">
      {/* Company Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Company Logo" width={156} height={42} />
      </div>

      <div style={{ width: '103.94px' }}></div>
      <nav className="flex items-center gap-6">
        <ul className="flex items-center justify-center gap-4">
          {/* Search */}
          <li className="relative">
            <label htmlFor="gsearch" className="sr-only">Search</label>
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
              <RiSearchLine className="text-light_gray h-6 w-6" />
            </div>
            <input
              type="search"
              id="gsearch"
              placeholder="Search"
              className="pl-[56px] w-[679px] h-[55px] flex items-center px-[20px] py-[12px] rounded-[48px] bg-light text-[16px] focus:outline-none"
            />
          </li>

          {/* Language Selector */}
          <li className="relative flex items-center">
            <div className="flex items-center bg-light rounded-[48px] w-[116px] h-[55px] p-2 gap-2 cursor-pointer">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex items-center justify-center">
                <FlagIcon code="US" size={24} className="rounded-full object-cover" />
              </div>
              <p className="text-black text-[14px]">ENG</p>
              <FaChevronDown className="text-light_gray" />
            </div>

            {/* Dropdown Menu */}
              {/* <div>
                <div>
                  <a href=''>ENG</a>
                  <a href=''>Arabic</a>
                </div>
              </div> */}
          </li>

          {/* Notification Icon */}
          <li className="flex items-center">
            <div className="flex items-center justify-center bg-light rounded-[48px] w-[55px] h-[55px]">
              <IoMdNotifications className="text-black h-6 w-6" />
            </div>
          </li>

          {/* User Profile */}
          <li className="flex items-center">
            <div className="flex items-center bg-light rounded-[48px] w-[162px] h-[55px] p-2">
              <div className="flex items-center justify-center bg-light rounded-full w-[40px] h-[40px]">
                <FaUser className="h-8 w-8 text-black" />
              </div>
              <div className="ml-2">
                <p className="text-[12px] text-[#101010]">{user.name}</p>
                <p className="text-[10px] text-light_gray">Product Manager</p> {/*it must be the user title given by registration form , but for here i made fix according to your given registration information*/} 
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
