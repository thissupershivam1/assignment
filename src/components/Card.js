import React from 'react';


const Card = ({ data }) => {

    console.log(data);
  return (
    <div className="w-96 mx-auto bg-black rounded-xl overflow-hidden md:max-w-2xl m-14 shadow-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48 rounded-md" src={data?.results[0]?.picture?.large} alt="User" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-base text-white font-semibold mt-1">{data?.results[0]?.name?.first} {data?.results[0]?.name?.last}</div>
          
          <div className="block mt-3 text-lg leading-tight font-medium text-white">{data?.results[0]?.gender}</div>
          <div className="block mt-3 text-lg leading-tight font-medium text-white">{data?.results[0]?.phone}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;