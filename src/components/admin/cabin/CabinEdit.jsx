import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CabinEdit = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  let [fileName, setFileName] = useState("");
  let [placeName, setPlaceName] = useState("");
  let [cabinName, setCabinName] = useState("");
  let [price, setPrice] = useState("");

  let [description, setDescription] = useState("");

  let [cabin, setCabin] = useState({});

  useEffect(() => {
    let url = `http://localhost:8000/api/cabins/getCabins/one/${id}`;

    axios.get(url).then((res) => {
      let filePath = res.data.image;
      let fileName = filePath.slice(filePath.lastIndexOf("/") + 1);
      let imageName = fileName.slice(fileName.indexOf("-") + 1);
      console.log(res.data);
      setCabin(res.data);
      setFileName(imageName);
      setPlaceName(res.data.placeName);
      setCabinName(res.data.cabinName);
      setPrice(res.data.price);
      setDescription(res.data.description);
    });
  }, []);

  function handleFileChange(e) {
    setFileName(cabin.image);
  }

  function handlePlaceName(e) {
    setPlaceName(e.target.value);
  }
  function handleCabinName(e) {
    setCabinName(e.target.value);
  }

  function handleCabinPrice(e) {
    setPrice(e.target.value);
  }

  function handleCabinDescription(e) {
    setDescription(e.target.value);
  }

  function handleCabinEdit(e) {
    e.preventDefault();

    let url = `http://localhost:8000/api/cabins/cabins/editone/${id}`;
    axios
      .put(url, {
        image: fileName,
        placeName,
        cabinName,
        price,
        description,
      })
      .then((res) => {
        toast.success("cabin edited successfully");
      });
  }
  return (
    <div className="bg-[#C5FBD8] py-2">
      <div className="container flex h-[720px] flex-col items-center justify-center md:h-[800px] lg:h-[880px] xxl:h-[900px]">
        <div className="mb-10 flex justify-end">
          <Link to="/admin" className="justify-end underline">
            Go back
          </Link>
        </div>
        <div className="container mx-4 rounded-md bg-white p-4 sm:w-[400px] sm:p-5 md:w-[450px] md:p-6 lg:w-[500px] lg:p-7 xl:p-8">
          <form
            className="flex flex-col gap-4 md:gap-6"
            onSubmit={handleCabinEdit}
          >
            <div className="flex flex-col items-center">
              <p className="text-[18px] font-bold">Edit cabin here</p>
            </div>

            <div>
              <p className="mb-1">Image File</p>
              <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                <input
                  type="text"
                  className="text-box bg-[#EAEAEA]"
                  // readOnly
                  value={fileName}
                />
                <input
                  onChange={handleFileChange}
                  type="file"
                  id="profile"
                  className="hidden"
                />
                <label
                  htmlFor="profile"
                  className="text-box flex w-full cursor-pointer items-center justify-center rounded-md border bg-[#EAEAEA] text-black md:w-[160px]"
                >
                  Choose
                </label>
              </div>
            </div>

            <div>
              <p className="mb-1">Place Name:</p>
              <input
                type="text"
                placeholder="Place name"
                className="text-box bg-[#EAEAEA]"
                name="placename"
                value={placeName}
                onChange={handlePlaceName}
              />
            </div>

            <div>
              <p className="mb-1">Cabin Name:</p>
              <input
                type="text"
                placeholder="Cabin name"
                className="text-box bg-[#EAEAEA]"
                name="cabinname"
                value={cabinName}
                onChange={handleCabinName}
              />
            </div>

            <div>
              <p className="mb-1">Price: </p>
              <input
                type="number"
                placeholder="price"
                className="text-box bg-[#EAEAEA]"
                name="cabinprice"
                value={price}
                onChange={handleCabinPrice}
              />
            </div>
            <div>
              <p className="mb-1">Cabin Description: </p>
              {/* <textarea
                name="cabindescription"
                id=""
                rows="5"
                cols="48"
                className="bg-[#EAEAEA] px-2 py-1 focus:outline-none"
                value={description}
                onChange={handleCabinDescription}
              ></textarea> */}

              <textarea
                name="cabindescription"
                id="cabindescription"
                rows="5"
                className="w-full resize-none rounded-md border bg-[#EAEAEA] px-3 py-2 text-sm text-gray-800 focus:border-[#4f6456] focus:outline-none focus:ring-1 focus:ring-[#4f6456] md:text-base"
                value={description}
                onChange={handleCabinDescription}
              ></textarea>
            </div>

            <input
              type="submit"
              disabled={isLoading}
              value={isLoading ? "loading..." : "Edit"}
              className="text-box cursor-pointer bg-[#233D2C] text-white hover:bg-[#4f6456] disabled:cursor-not-allowed"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CabinEdit;
