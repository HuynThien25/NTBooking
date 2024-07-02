import "./searchItem.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const SearchItem = () => {
  const [destionaton,setDestination]= useState("")

  const navigate= useNavigate()

  const handleSee=()=>{
    navigate("/hotels/:id",{state:{destionaton}})
}

// làm trang luôn nằm ở đầu
// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);


  return (
    <div className="searchItem">
      <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/279134335.webp?k=96eb88ad3fdffb03551960507fed51699a4569afc0ec080ea399ed4d4aa2dc18&o=" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Hotel La Place Roma</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxix</span>
        <span className="siSubtitle">
            Studio Apartment with Air condition
        </span>
        <span className="siFeatues">
            Entire studio · 1 bathroom · 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so look in this great price today!
        </span>  
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">123$</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={handleSee} onChange={e=>setDestination(e.target.value)}>See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
