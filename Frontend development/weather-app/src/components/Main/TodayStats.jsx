import React from 'react';
import { MdLocationOn } from 'react-icons/md';

const TodayStats = () => {
  return (
    <div className="today-stats flex flex-col items-center text-grayLight">
      <div
        className="flex justify-center items-center mix-blend-overlay"
        style={{
          backgroundImage: 'url("./src/images/Cloud-background.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '326px',
          width: '563px'
        }}
      >
        <img src="./src/images/s.png" alt="current weather" className="w-36 " />
      </div>

      <h1
        className="mb-8 text-9xl text-white -m-6"
        style={{ fontWeight: '500', fontSize: '9rem' }}
      >
        15
        <span className=" text-grayLight text-5xl font-raleway ">&deg;C</span>
      </h1>
      <h3 className=" text-semibold text-4xl" style={{ fontWeight: '600' }}>
        Shower
      </h3>
      <div className="date mt-12 mb-6 flex justify-between max-w-md w-40  text-lg">
        <span>Today</span>
        <span className="">&middot;</span>
        <span>Fri, 5 Jun</span>
      </div>
      <div className="location flex justify-between items-center font-semibold text-lg">
        <MdLocationOn />
        <span className="ml-2 font-medium">Helsinki</span>
      </div>
    </div>
  );
};

export default TodayStats;
