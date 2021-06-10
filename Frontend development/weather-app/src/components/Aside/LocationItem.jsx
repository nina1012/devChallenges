import React from 'react';

import { RiArrowRightSLine } from 'react-icons/ri';

const LocationItem = ({ title }) => {
  return (
    <li className=" mb-4 py-2 text-brownDark ">
      <button className="location-item px-3 py-4 flex items-center justify-between w-full ">
        <span className="font-medium text-white">{title}</span>
        <RiArrowRightSLine />
      </button>
    </li>
  );
};

export default LocationItem;
