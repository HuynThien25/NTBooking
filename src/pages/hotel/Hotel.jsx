import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

import "./hotel.css";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const photos = [
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/279140818.jpg?k=e188e61efc66b258151be0e5a2af7dc3dbf268b5fb618e3560201ede8d17ea9e&o=&hp=1",
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/279134316.jpg?k=fb9dcfd771f47126fcde8cf3b97138d66e221e276b770a0d325c67eb08b374f2&o=&hp=1",
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/279134318.jpg?k=fffbd37c8d69a9072a086a9d0ae2126acfc2404c024ad8a0d1623dc07814df50&o=&hp=1",
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/279138116.jpg?k=85aea2c3e483fc9eadcd0296ef9ccc5c26178d5114d4054d898b9021e48667e1&o=&hp=1",
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/279134337.jpg?k=43ff20188c6f78eea22492d5d0ad6070fd1f569e5e087c853f2262f28c99e88c&o=&hp=1",
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/279134335.jpg?k=341488f6f4dc7bc8d6232b06730e304ed655bd4a944b1a90eb2ab81ac92a0568&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "l") {
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSliderNumber);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[sliderNumber].src}
                alt=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}

        <div className="hotelWrapper">
          <h1 className="hotelTitle">Hotel La Place Roma</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Piazza di San Lorenzo in Lucina 35, Spagna, 00186 Rome, Italy
            </span>
          </div>
          <span className="hotelDistance">Excellent location – show map</span>
          <span className="hotelPriceHighlight">
            Book a stay over 114$ at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <button className="bookNow">Reserve</button>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                <span >Located in Rome and with Trevi Fountain reachable within a 8-minute walk, Hotel La Place Roma provides express check-in and check-out, allergy-free rooms, a restaurant, free WiFi throughout the property and a garden. With a terrace, the property also features a bar, as well as a shared lounge. The property has a 24-hour front desk, room service and organizing tours for guests.<br/></span>
                <span>At the hotel, every room is equipped with a closet. Complete with a private bathroom equipped with a bidet and bathrobes, guest rooms at Hotel La Place Roma have a flat-screen TV and air conditioning, and selected rooms come with a seating area. At the accommodation each room has bed linen and towels.<br/></span>
                <span>An à la carte, Full English/Irish or Italian breakfast is served at the property.<br/></span>
                <span>Popular points of interest near Hotel La Place Roma include Piazza Navona, Piazza Barberini and Spanish Steps. The nearest airport is Rome Ciampino, 10 miles from the hotel, and the property offers a paid airport shuttle service.<br/></span>
                <span>Couples in particular like the location – they rated it 9.8 for a two-person trip.<br/></span>
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>
                Located in the heart of Rome, this hotel has an excellent
                location score of 9.8
              </span>
              <h1>Breakfast Info</h1>
              <span>Italian, Full English/Irish, Vegetarian, Gluten-free, American, Breakfast to go</span>
              <h1>Rooms with:</h1>
              <span>City view<br/>
              Landmark view</span>
              <h2>
                <b>945$</b> (9 nights)
              </h2>
              <button>Reserve</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
