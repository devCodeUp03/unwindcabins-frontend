import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DiscoverCabin from "./DiscoverCabin";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import rootUrl from "../../../url";

const ViewAllDiscoverCabins = () => {
  const [cabins, setCabins] = useState([]);
  const [skeleton, setSekeleton] = useState(false);
  const [link, setLink] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLink(location.pathname === "/");
  }, [location.pathname]);

  useEffect(() => {
    axios.get(`${rootUrl}/api/cabins/getcabins`).then((res) => {
      setSekeleton(true);
      setCabins(res.data || []);
      setSekeleton(false);
    });
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

            <Link to="/" className="underline">
              Go back
            </Link>
          </div>
          {/* <div className="grid place-items-center gap-2 md:grid-cols-2 md:justify-between lg:grid-cols-3"> */}
          <div className="my-10 flex flex-row flex-wrap justify-between gap-3">
            {cabins.map((el) => {
              return (
                <DiscoverCabin
                  _id={el._id}
                  image={`${rootUrl}` + el.image}
                  placeName={el.placeName}
                  cabinName={el.cabinName}
                  price={el.price}
                  description={el.description}
                  key={el._id}
                />
              );
            })}
            {skeleton && (
              <>
                <Skeleton className="h-[488px] max-w-[339px]" />
                <Skeleton className="h-[488px] max-w-[339px]" />
                <Skeleton className="h-[488px] max-w-[339px]" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllDiscoverCabins;
