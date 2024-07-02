import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hotels</li>
          <li className="fListItem">Guest Houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay</li>
          <li className="fListItem">All destinations</li>
          <li className="fListItem">All flight destinations</li>
          <li className="fListItem">All car rental locations</li>
          <li className="fListItem">All vacation destionatons</li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Discover monthly stays</li>
          <li className="fListItem">Travel article</li>
          <li className="fListItem">Seasonal and holiday deals</li>
          <li className="fListItem">Traveller Review Awards</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental</li>
          <li className="fListItem">Flight finder</li>
          <li className="fListItem">Restaurant reservations</li>
          <li className="fListItem">NTBooking.com for travel Agents</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Coronavirus (COVID-19) FAQs</li>
          <li className="fListItem">Abput NTBooking.com</li>
          <li className="fListItem">Customer service help</li>
          <li className="fListItem">Partner help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety resource center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & Conditions</li>
          <li className="fListItem">Partner dispute</li>
          <li className="fListItem">How we work</li>
          <li className="fListItem">Privacy & cookie statement</li>
          <li className="fListItem">MSA statement</li>
        </ul>
      </div>
      <div className="fText">
        Copyright © 2023–2024 NTBooking.com™. All rights reserved.
      </div>
      <div className="footer_priceline_list">
        <p>
          NTBooking.com is part of Booking Holdings Inc., the world leader in
          online travel and related services.
        </p>
        <ul>
          {/* <li>
      <img
        src="https://cf2.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"
        title="Booking.com"
        alt="Booking.com"
        height={26}
        width={91}
      />
    </li> */}
          <li>
            <img
              src="https://cf2.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png"
              title="Priceline"
              alt="Priceline"
              height={26}
              width={91}
            />
          </li>
          <li>
            <img
              src="https://cf2.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png"
              title="Kayak"
              alt="Kayak"
              height={26}
              width={79}
            />
          </li>
          <li>
            <img
              src="https://cf2.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png"
              title="Agoda"
              alt="Agoda"
              height={26}
              width={70}
            />
          </li>
          <li>
            <img
              src="https://cf2.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"
              title="OpenTable"
              alt="OpenTable"
              height={26}
              width={95}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
