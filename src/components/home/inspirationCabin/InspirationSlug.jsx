import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import rootUrl from "../../../url";

const InspirationSlug = () => {
  const [inspirationCabin, setInspirationCabin] = useState({});
  let params = useParams();

  useEffect(() => {
    axios
      .get(`${rootUrl}/api/cabins/inspirationcabins/one/${params.slug}`)
      .then((res) => {
        setInspirationCabin(res.data);
      });
  }, []);

  return (
    <div className="mb-4 mt-4 flex flex-col items-center justify-center">
      <div className="container mb-2 flex justify-end">
        <HashLink to="/#getinspired" className="underline">
          Go back
        </HashLink>
      </div>
      <div className="container flex flex-col justify-center md:flex-row">
        <img src={`${rootUrl}${inspirationCabin.image}`} alt="" />
        <div className="flex flex-col gap-[20px] rounded-sm bg-[#596363] px-[18px] py-[12px] text-white md:rounded-none">
          <p>{inspirationCabin.wish}</p>
          <p>{inspirationCabin.action}</p>
          <p>{inspirationCabin.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InspirationSlug;
