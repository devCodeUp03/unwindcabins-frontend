import React, { useEffect, useState } from "react";
import InspirationCabin from "./InspirationCabin";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import rootUrl from "../../../url";

const InspirationCabins = () => {
  const [inspirationCabin, setInspirationCabin] = useState([]);
  const [link, setLink] = useState(true);
  const location = useLocation();
  let url = `${rootUrl}/api/cabins/inspirationCabins`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setInspirationCabin(res.data);
    });
  }, []);

  useEffect(() => {
    setLink(location.pathname === "/");
  }, [location.pathname]);

  return (
    <div id="getinspired"> 
      <div className="mt-[20px] rounded-[4px] bg-[#F2FAF9] py-[18px] sm:py-[22px] md:py-[26px] lg:py-[32px] xl:py-[36px] xxl:py-[44px]">
        <div className="flex flex-col gap-4 container">
          <p className="font-serif text-[16px] font-bold">
            Inspiration for your next getaway
          </p>
          <div className="flex flex-col gap-2 font-poppins text-[12px] md:flex-row md:justify-between">
            <p>
              We've curated some amazing experiences to help you find your next
              getaway.
            </p>
            {link ? (
              <Link
                to="/inspirationcabins"
                className="underline"
                onClick={() => setLink(false)}
              >
                View all experiences
              </Link>
            ) : (
              <Link to="/" className="underline">
                Go back
              </Link>
            )}
          </div>
          {/* <div className="grid place-items-center gap-2 md:grid-cols-2 md:justify-between lg:grid-cols-3"> */}
          <div className="flex flex-wrap justify-center gap-3 md:justify-between lg:flex-nowrap">
            {inspirationCabin.map((el) => {
              return (
                <InspirationCabin
                  image={`${rootUrl}` + el.image}
                  wish={el.wish}
                  action={el.action}
                  description={el.description}
                  key={el._id}
                  _id={el._id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCabins;
