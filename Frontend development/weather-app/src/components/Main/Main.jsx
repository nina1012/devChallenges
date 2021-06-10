import React from 'react';
import DayCard from './DayCard';
import TodayHighlight from './TodayHighlight';

const Main = () => {
  return (
    <main className="bg-primaryDark text-white px-5">
      <div className="list grid grid-cols-2 gap-x-8 gap-y-8 justify-between text-center p-6">
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </div>
      <h2 className="text-white text-2xl font-bold mb-8">Today's Highlights</h2>
      <div className="grid grid-cols-1 gap-y-8">
        <TodayHighlight />
      </div>
      <p className="mt-16 p-4 text-center">
        created by{' '}
        <a className="underline" href="https://www.github.com/nina1012">
          nina1012
        </a>
        - devChallenges.io
      </p>
    </main>
  );
};

export default Main;
