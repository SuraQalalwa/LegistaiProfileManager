"use client";
import Sidebar from '../../../components/SideBar/SideBar'; 
import NavBar from '../../../components/NavBar/NavBar'; 
import React, { useEffect, useState } from 'react';
import Dashboard from '@/components/Dashboard/page';
import Drive from '@/components/Drive/page';
import SettingsOption from '@/components/SettingsOption/page';
import LawFirmOptions from '@/components/LawFirmOptions/page';
import Calendar from '@/components/Calendar/page';
import Profile from '@/components/Profile/page'

export default function Home({ params }) {
  const { id } = React.use(params); 
  const [user, setUser] = useState('');
  const [activeIndex, setActiveIndex] = useState(2);

  const mainComponents = [
    <Dashboard />,
    <Drive />,
    <Profile user={user} />,
    <Calendar />,
    <LawFirmOptions />,
    <SettingsOption />
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

  return (
    <main className="relative">
      <NavBar user={user} />
      <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div className="absolute left-[324px]">
        {mainComponents[activeIndex]}
      </div>
    </main>
  );
}