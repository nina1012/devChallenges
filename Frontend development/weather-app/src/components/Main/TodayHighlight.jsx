import React from 'react';
import { WiDirectionDownRight } from 'react-icons/wi';

const TodayHighlight = () => {
  return (
    <>
      <div className="text-center bg-primaryLight py-6 flex flex-col justify-between">
        <p className="text-base">Wind status</p>
        <h3 className="text-6xl text-bold my-2" style={{ fontWeight: '700' }}>
          7<span className="text-4xl font-normal">mph</span>
        </h3>
        <div className="flex items-center w-20 mx-auto justify-between">
          <WiDirectionDownRight />
          <span className="ml-2 font-medium">WSW</span>
        </div>
      </div>
      {/* <div className="text-center bg-primaryLight py-6 flex flex-col justify-between">
        <p className="text-base">Humidity</p>
        <h3 className="text-6xl text-bold  my-2" style={{ fontWeight: '700' }}>
          84<span className="text-4xl font-normal">%</span>
        </h3>
      </div>
      <div className="text-center bg-primaryLight py-6 flex flex-col justify-between">
        <p className="text-base">Visibility</p>
        <h3 className="text-6xl text-bold  my-2" style={{ fontWeight: '700' }}>
          6,4<span className="text-4xl font-normal">miles</span>
        </h3>
      </div>
      <div className="text-center bg-primaryLight py-6 flex flex-col justify-between">
        <p className="text-base">Air Pressure</p>
        <h3 className="text-6xl text-bold  my-2" style={{ fontWeight: '700' }}>
          998<span className="text-4xl font-normal">mb</span>
        </h3>
      </div> */}
    </>
  );
};

export default TodayHighlight;
