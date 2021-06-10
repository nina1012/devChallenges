import React, { useState } from 'react';

import { MdClose } from 'react-icons/md';
import LocationItem from './LocationItem';

const Form = ({ showForm, setShowForm }) => {
  return (
    <div className="p-4">
      <div className="flex justify-end">
        <button className="text-right text-2xl">
          <MdClose onClick={() => setShowForm(!showForm)} />
        </button>
      </div>
      <form className="my-6 flex items-center">
        <input
          className="w-4/5 p-3 bg-transparent border text-brownDark text-sm font-medium"
          type="text"
          placeholder="search location"
          name="location"
        />
        <button
          className="bg-buttonPurple py-3 px-4 font-medium text-base ml-3"
          type="submit"
        >
          Search
        </button>
      </form>
      <ul className="mt-8">
        <LocationItem title="San Francisco" />
        <LocationItem title="San Diego" />
        <LocationItem title="Santa Monica" />
      </ul>
    </div>
  );
};

export default Form;
