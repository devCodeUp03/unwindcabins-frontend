import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BookedCabin from "../components/BookedCabin";

const BookedCabins = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const book = useSelector((store) => store.book.value);

  // let [cancelResponse, setCancelResponse] = useState(null);

  // const [bookingErrors, setBookingErrors] = useState(null);

  // async function bookCabin(e, cabin) {
  //   let [bookedResponse, setBookedResponse] = useState(null);
  //   const bookUrl = `http://localhost:8000/api/orders/book/`;

  //   let formData = {
  //     cabinId: cabin._id,
  //     rate: cabin.price,
  //     cabinName: cabin.cabinName,
  //     checkin: e.target.checkin.value,
  //     checkout: e.target.checkout.value,
  //     bookedBy: user.user._id,
  //     travellers: e.target.travellers.value,
  //   };

  //   await axios
  //     .post(bookUrl, formData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((res) => {
  //       setBookedResponse(res.data);
  //       toast.success("booked succesfully");
  //     })
  //     .catch((err) => {
  //       setBookingErrors(err.response.data);
  //       toast.error("failed to book");
  //     });
  // }

  // function cancelBook(cabin) {
  //   const cancelUrl = `http://localhost:8000/api/orders/book/cancel/${cabin._id}`;
  //   let id = cabin._id;

  //   axios
  //     .delete(cancelUrl)
  //     .then((res) => {
  //       res.data.status ? setBookedResponse(false) : setBookedResponse(true);
  //       toast.error("cancelled succesfully");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error("failed to cancel");
  //     });
  // }

  return (
    <div>
      <div className="container w-full">
        {/* {JSON.stringify(book)} */}
        {
          <div className="mb-10 flex justify-end">
            <Link to="/" className="justify-end underline">
              Go back
            </Link>
          </div>
        }

        {book.length === 0 ? (
          <div className="flex w-full items-center justify-center p-10 text-[20px] md:text-[28px]">
            No Cabin in Booking List yet.
          </div>
        ) : (
          <>
            {book.map((el) => {
              return (
                <div key={el._id}>
                  <BookedCabin cabin={el} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default BookedCabins;

{
  /* <div className="container mb-10" key={el._id}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      bookCabin(e, el);
                    }}
                    className="relative rounded-md bg-[#ffffff] px-2 py-6 shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                  >
                    <IoCloseCircleOutline
                      className="absolute right-[-10px] top-[-10px] cursor-pointer text-[28px] text-red-600"
                      onClick={() => {
                        dispatch(unsetReduxBook(el));
                        localStorage.removeItem("likedCabins");
                        toast.error("cabin removed");
                      }}
                    />
                    <div className="container mb-4 flex flex-col justify-center md:flex-row">
                      <img src={el.image} alt={el.cabinName} />
                      <img src={`http://localhost:8000${el.image}`} alt="" />
                      <div className="flex flex-col gap-[20px] rounded-sm bg-[#2B3030] px-[18px] py-[12px] text-white md:rounded-none">
                        <p>82 reviews</p>
                        <p>£{el.price}pp</p>
                        <p>{el.description}</p>
                        <p>{el.placeName}</p>
                        <p>{el.cabinName}</p>
                      </div>
                    </div>
                    <div className="mb-4 text-center font-semibold underline md:text-[20px]">
                      Reservations
                    </div>
                    <div className="container flex flex-col gap-4 md:flex-row md:justify-between">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-6 lg:gap-[120px] xl:gap-[200px]">
                        <div className="flex items-center justify-between gap-2 md:gap-4 lg:gap-[110px] xl:gap-[200px]">
                          <div>
                            <input type="date" name="checkin" />
                            <br />
                            <span className="inline-block text-red-500">
                              {bookingErrors?.errors?.checkin?.msg
                                ? "checkin needed"
                                : null}
                            </span>
                          </div>

                          <div>
                            <input type="date" name="checkout" />
                            <br />
                            <span className="inline-block text-red-500">
                              {bookingErrors?.errors?.checkout?.msg
                                ? "checkout needed"
                                : null}
                            </span>
                          </div>
                        </div>

                        <div>
                          <input
                            type="number"
                            className="text-box bg-[#EAEAEA]"
                            placeholder="Travellers"
                            name="travellers"
                          />
                          <br />
                          <span className="text-red-500">
                            {bookingErrors?.errors?.travellers?.msg
                              ? "at least 1 traveller"
                              : null}
                          </span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={bookedResponse} // Disable button once booked
                        className="text-box cursor-pointer bg-[#233D2C] text-[14px] text-white hover:bg-[#4f6456] disabled:cursor-not-allowed md:w-[120px] md:rounded-md lg:w-[140px] xl:text-[15px] xxl:text-[16px]"
                      >
                        {bookedResponse ? (
                          <>
                            Booked{" "}
                            <MdOutlineDoneAll className="inline-block text-[20px]" />
                          </>
                        ) : (
                          "Book Now"
                        )}
                      </button>
                      {bookedResponse && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            cancelBook(el);
                          }}
                          className="text-box cursor-pointer bg-[#D9534F] text-[14px] text-white hover:bg-[#C9302C] md:w-[120px] md:rounded-md lg:w-[140px] xl:text-[15px] xxl:text-[16px]"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>
                </div> */
}
