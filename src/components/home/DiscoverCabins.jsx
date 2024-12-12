import React from 'react'
import DiscoverCabin from './DiscoverCabin';

const DiscoverCabins = () => {

  
  return (
    <div>
        <div className="bg-white">
        <div className="container flex flex-col gap-4">
          <p className="font-serif text-[16px] font-bold">
            Discover our idyllic countryside cabins
          </p>
          <p className="font-poppins text-[12px]">
            Fully equipped kitchen and bathroom with plenty of walking and
            cycling routes to explore.
          </p>
          <div className="grid place-items-center gap-2 md:grid-cols-2 md:justify-between lg:grid-cols-3">
            {[1, 2, 3].map((el) => {
              return (
               <DiscoverCabin />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverCabins