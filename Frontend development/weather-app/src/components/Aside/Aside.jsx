import React, { useState } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
// import { AiOutlineSearch } from 'react-icons/ai';
import TodayStats from '../Main/TodayStats';
import Form from './Form';

const Aside = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <aside className=" h-full min-h-screen bg-primaryLight text-white pb-20">
      <>
        {showForm ? (
          <Form showForm={showForm} setShowForm={setShowForm} />
        ) : (
          <>
            <div className="flex justify-between items-center px-3 pt-5">
              <button
                className="bg-buttonGray py-2 px-4 font-medium"
                onClick={() => setShowForm(!showForm)}
              >
                Search for places
              </button>
              <button className="bg-buttonGray p-2 rounded-full text-2xl">
                <BiCurrentLocation />
              </button>
            </div>
            <TodayStats />
          </>
        )}
      </>
    </aside>
  );
};

export default Aside;
