import React from 'react';

const DayCard = () => {
  return (
    <div className="card bg-primaryLight p-4 flex flex-col justify-evenly h-44">
      <p className="text-base">Tomorrow</p>
      <div className="px-4">
        <img src="./src/images/s.png" />
      </div>
      <div className="flex justify-between items-center w-20 ">
        <span>16&deg;C</span>
        <span className="text-grayLight">11&deg;C</span>
      </div>
    </div>
  );
};

export default DayCard;
