import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import DiscoverCabin from "./DiscoverCabin";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import rootUrl from "../../../url";

const DiscoverCabins = () => {
  const [cabins, setCabins] = useState([]);
  const [link, setLink] = useState(true);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLink(location.pathname === "/");
  }, [location.pathname]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${rootUrl}/api/cabins/getcabins`).then((res) => {
      setCabins(res.data || []);
      setIsLoading(false);
    }).catch(res => console.error("Failed to fetch cabins: ", err)).finally(() => {setIsLoading(false)})

  }, []);

  console.log(cabins);

  return (
    <div>
      <div className="bg-white" id="ourcabins">
        <div className="container flex flex-col gap-4">
          <p className="font-serif text-[16px] font-bold">
            Discover our idyllic countryside cabins
          </p>
          <div className="flex flex-col gap-2 font-poppins text-[12px] md:flex-row md:justify-between">
            <p>
              Fully equipped kitchen and bathroom with plenty of walking and
              cycling routes to explore.
            </p>
            {link ? (
              <Link
                to="cabins/viewalldiscovercabins"
                className="underline"
                onClick={() => {
                  setLink(false);
                }}
              >
                View all cabins
              </Link>
            ) : (
              <Link to="/" className="underline">
                Go back
              </Link>
            )}
          </div>
          {/* <div className="grid place-items-center gap-2 md:grid-cols-2 md:justify-between lg:grid-cols-3"> */}
          <div className="flex flex-row flex-wrap justify-center gap-4 md:justify-between">
            {isLoading ? (
              <>
                <Skeleton height={448}  width={340}/>
                <Skeleton height={448}  width={340}/>
                <Skeleton height={448}  width={340}/>
              </>
            ) : (
              cabins
                .slice(0, 3)
                .map((el) => (
                  <DiscoverCabin
                    _id={el._id}
                    image={`${rootUrl}${el.image}`}
                    placeName={el.placeName}
                    cabinName={el.cabinName}
                    price={el.price}
                    description={el.description}
                    key={el._id}
                  /> 
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCabins;
