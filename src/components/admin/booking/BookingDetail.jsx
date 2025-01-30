import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingDetail = () => {
  const [book, setBook] = useState({});
 let navigate =  useNavigate();

  let { id } = useParams();
  let url = `http://localhost:8000/api/orders/booked/getonecabin/${id}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setBook(res.data);
    });
  }, []);

  //   bookedBy: "67729db3c18e7e7c82cb562f";
  //   cabinId: "6797a08c60824a5037ab1f6c";
  //   cabinName: "Rustic country retreat";
  //   checkin: "2025-01-29T00:00:00.000Z";
  //   checkout: "2025-01-31T00:00:00.000Z";
  //   rate: 210;
  //   travellers: 2;
  //   __v: 0;
  //   _id: "6798b111368c3f5478be9b66";

  return (
    <div className="my-6 flex flex-col items-center justify-center">
      <div
        className="cursor-pointer underline"
        onClick={() => {
          navigate("/admin");
        }}
      >
        Go back
      </div>
      <div className="container flex flex-col  gap-2 rounded-md p-1 shadow-[0_12px_20px_0px_rgba(39,45,77,0.2)] sm:gap-3 sm:p-2 md:gap-5 md:p-4 lg:gap-7 lg:p-5 xl:gap-9 xl:p-6 xxl:gap-10 xxl:p-7">
        <div className="flex gap-2">
          <div className="font-bold">CabinId: </div>
          <div className="font-thin">{book.cabinId}</div>
        </div>
        <div className="flex gap-2">
          <div className="font-bold">CabinName: </div>
          <div className="font-thin">{book.cabinName}</div>
        </div>
        <div className="flex gap-2">
          <div className="font-bold">Checkin: </div>
          <div className="font-thin">{book.checkin}</div>
        </div>
        <div className="flex gap-2">
          <div className="font-bold">Checkout: </div>
          <div className="font-thin">{book.checkout}</div>
        </div>
        <div className="flex gap-2">
          <div className="font-bold">Travellers: </div>
          <div className="font-thin">{book.travellers}</div>
        </div>
        <div className="flex gap-2">
          <div className="font-bold">Rate: </div>
          <div className="font-thin">{book.rate}</div>
        </div>
        <div className="flex gap-2">
          <div className="font-bold">Booked by: </div>
          <div className="font-thin"> {book.bookedBy}</div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
