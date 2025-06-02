import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { unsetReduxBook } from "../redux/slice/bookSlice";
import { MdOutlineDoneAll } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import rootUrl from "../url";
const BookedCabin = (props) => {
  let el = props.cabin;
  const [bookingErrors, setBookingErrors] = useState(null);
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.value);

  let [bookedResponse, setBookedResponse] = useState(null);
  async function bookCabin(e, cabin) {
    const bookUrl = `${rootUrl}/api/orders/book/`;

    let formData = {
      cabinId: cabin._id,
      rate: cabin.price,
      cabinName: cabin.cabinName,
      checkin: new Date(e.target.checkin.value),
      checkout: new Date(e.target.checkout.value),
      bookedBy: user.user._id,
      travellers: e.target.travellers.value,
    };

    await axios
      .post(bookUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setBookedResponse(res.data);
        setBookingErrors(null);
        toast.success("booked succesfully");
      })
      .catch((err) => {
        setBookingErrors(err.response.data);
        toast.error("failed to book");
      });
  }

  function cancelBook() {
    const cancelUrl = `${rootUrl}/api/orders/book/cancel/${el._id}`;
    let id = el._id;

    axios
      .delete(cancelUrl)
      .then((res) => {
        res.data.status ? setBookedResponse(false) : setBookedResponse(true);
        toast.success("cancelled succesfully");
        togglePopup();
      })
      .catch((err) => {
        console.log(err);
        toast.error("failed to cancel");
      });
  }

  const togglePopup = () => {
    setPopup((x) => !x);
  };
  return (
    <div>
      {popup && (
        <div>
          <div
            onClick={togglePopup}
            className="fixed left-0 top-0 z-10 h-full w-full bg-black opacity-20"
          ></div>

          <div className="fixed right-1/2 top-1/2 z-20 -translate-y-1/2 translate-x-1/2">
            <div className="rounded-md bg-white  py-3 px-2 md:p-10 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
              <div className="mb-4 text-[20px] font-bold">Confirm Action</div>

              <div className="mb-2 font-thin">
                Are you sure you want to do this?
              </div>
              <div className="flex gap-2">
                <button
                  className="border bg-slate-300 px-3 py-2 font-bold text-black"
                  onClick={togglePopup}
                >
                  No
                </button>
                <button
                  className="bg-blue-700 px-3 py-2 font-bold text-white"
                  onClick={async (e) => {
                    e.preventDefault();
                    cancelBook();
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mb-10" key={el._id}>
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
              toast.success("cabin removed");
            }}
          />
          <div className="container mb-4 flex flex-col justify-center md:flex-row">
            <img src={el.image} alt={el.cabinName} />
            <img src={`${rootUrl}${el.image}`} alt="" />
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
          <div className="container flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-6 lg:gap-[120px] xl:gap-[200px]">
              <div className="flex items-center justify-between gap-2 md:gap-4 lg:gap-[110px] xl:gap-[200px]">
                <div>
                  <input type="date" name="checkin" />
                  <br />
                  <span className="text-red-500">
                    {bookingErrors?.errors?.checkin?.msg
                      ? bookingErrors.errors.checkin.msg
                      : null}
                  </span>
                </div>

                <div>
                  <input type="date" name="checkout" />
                  <br />
                  <span className="text-red-500">
                    {bookingErrors?.errors?.checkout?.msg
                      ? bookingErrors.errors.checkout.msg
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
                    ? bookingErrors.errors.travellers.msg
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
                  // cancelBook(el);
                  togglePopup();
                }}
                className="text-box cursor-pointer bg-[#D9534F] text-[14px] text-white hover:bg-[#C9302C] md:w-[120px] md:rounded-md lg:w-[140px] xl:text-[15px] xxl:text-[16px]"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookedCabin;
