"use client";
import Sidebar from '../../../components/SideBar/SideBar'; 
import NavBar from '../../../components/NavBar/NavBar'; 
import React, { useEffect, useState } from 'react';
import Dashboard from '@/components/Dashboard/page';
import Drive from '@/components/Drive/page';
import SettingsOption from '@/components/SettingsOption/page';
import LawFirmOptions from '@/components/LawFirmOptions/page';
import Calendar from '@/components/Calendar/page';
import Profile from '@/components/Profile/page';
import NotFound from '@/components/NotFound/page';
import { useParams } from 'next/navigation';

export default function Home({ params }) {
  const { id } = useParams();
  const [user, setUser] = useState(null); 
  const [activeIndex, setActiveIndex] = useState(2);
  const [notFound, setNotFound] = useState(false);

  const mainComponents = [
    <Dashboard />,
    <Drive />,
    <Profile user={user} />,
    <Calendar />,
    <LawFirmOptions />,
    <SettingsOption />,
    <NotFound />
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/profile/${id}`);
        if (res.ok) {
          const data = await res.json();
          setUser(data);   
          setNotFound(false);
        } else if (res.status === 404) {
          setNotFound(true);  
        } else {
          console.error('Error fetching data:', res.status);
        }
      } catch (error) {
        console.error('Fetching error:', error);
      }
    };
    fetchData();
  }, [id]);

  if (user === null && !notFound) {
    return null;
  }

  return (
    <main className="relative">
      {notFound ? (
        <NotFound />
      ) : (
        <>
          <NavBar user={user} />
          <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          <div className="absolute left-[324px]">
            {mainComponents[activeIndex]}
          </div>
        </>
      )}
    </main>
  );
}
