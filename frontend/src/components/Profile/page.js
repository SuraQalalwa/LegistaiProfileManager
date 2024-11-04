import React, { useEffect, useState } from 'react';
import BasicInformation from './BasicInformation/BasicInformation';
import Specialization from './SpecializationInformation/SpecializationInformation';
import LawyerTeam from './LawyerTeam/LawyerTeam';
import Documents from './DocumentsInformation/DocumentsInformation';
import Communication from './Communication/Communication';
import FinancialInformation from './FinancialInformation/FinancialInformation';
import CaseInformation from './CaseInformation/CaseInformation';
import ReviewsInformation from './ReviewsInformation/ReviewsInformation';
import { useParams } from 'next/navigation';


export default function Profile() {
  const { id } = useParams(); 
  const [user, setUser] = useState('');
  const [internalSelectedOption, setInternalSelectedOption] = useState("Basic Information");
  const [activeIndex, setActiveIndex] = useState(0); 

  const internalSidebarOptions = [
    "Basic Information",
    "Specialization",
    "Lawyer Team",
    "Reviews",
    "Case Information",
    "Financial Information",
    "Communication",
    "Documents"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/profile/${id}`);
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          console.error('Error fetching user data:', res.status);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, [id]);

  const renderInternalSideBarContent = () => {
    switch (internalSelectedOption) {
      case "Basic Information":
        return <BasicInformation user={user} />;
      case "Specialization":
        return <Specialization/>;
      case "Lawyer Team":
        return <LawyerTeam/>;
      case "Reviews":
        return <ReviewsInformation/>;
      case "Case Information":
        return <CaseInformation/>;
        case "Financial Information":
      return <FinancialInformation/>;
      case "Communication":
      return <Communication/>;
      case "Documents":
        return <Documents/>;  
      default:
        return null;
    }
  };

  return (
    <main >
      <div className=" bg-[#F7F8FA] rounded-[20px] pt-[20px] pr-[32px] pl-[32px] pb-[30px]">
        <div className="w-[1052px] h-[839px] bg-primary rounded-[14px] p-[20px] pb-[30px]">
          <div className="flex flex-col mb-[25px]">
              <h1 className="text-[18px] font-bold">Profile</h1>
              <h6 className="text-gray text-[14px]">Manage your details and personal preference here</h6>
          </div>
          <div className="flex h-[720px] rounded-lg bg-[#F7F8FA] p-[20px]">

          <aside className="border-r w-1/4">
            <ul className="space-y-2">
              {internalSidebarOptions.map((option, index) => (
                <li
                  key={option}
                  onClick={() => {
                    setInternalSelectedOption(option);
                    setActiveIndex(index); 
                  }}
                  className={`cursor-pointer p-2 text-[12px] rounded-[40px] ${
                    activeIndex === index ? "text-black" : "text-gray-400"
                  } hover:text-black hover:bg-primary whitespace-nowrap`}
                >
                  {option}
                </li>
              ))}
            </ul>
          </aside>


            {/* Content Area */}
            <div className="w-full px-6 bg-[#F7F8FA]">
              {renderInternalSideBarContent()}      
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

