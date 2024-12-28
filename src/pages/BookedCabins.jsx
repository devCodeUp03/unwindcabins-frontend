import React from 'react'
import { useSelector } from 'react-redux'


const BookedCabins = () => {
    const book = useSelector((store) => store.book.value);
  return (
    <div className="container">
        {
            book?.map((el, idx) => {
                return <div className="container overflow-hidden" key={idx}>{JSON.stringify(el)}</div>
            })
        }
    </div>
  )
}

export default BookedCabins