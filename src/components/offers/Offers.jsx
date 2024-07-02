import "./offers.css"

const Offers = () => {
  return (
    <div className="offers">
        {/* <h1>Promotions, deals, and special offers for you</h1> */}
        <div className="mainItem">

        <div className="offersItem">
          <div>
            <h1 className="offersTitle">Planning a trip to the 2024 Summer Games?</h1>
            <span className="offersP">Brussels is a quick train ride from all the action</span>
            <button className="offersBtn">Explore Brussels</button>
          </div>
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/320647664.png?k=698a838d781fe6952e506a3856a7fa5c22056d98e571eb3cf9e448afa98eba81&o=" alt="" className="offersImg" />
        </div>
        <div className="offersItem">
          <div>
            <h1 className="offersTitle">Seize the moment!?</h1>
            <span className="offersP">Save 15% or more when you book and stay before October 1, 2024</span>
            <button className="offersBtn">Find Getaway Deals</button>
          </div>
            <img src="https://cf2.bstatic.com/xdata/images/xphoto/540x405/292056369.jpg?k=358d8cd9ede268c8a9660de4debc48b68fe5777bddce07972ac30ae28ab8b8f2&o=" alt="" className="offersImg" />         
        </div>
        </div>
        <div className="offersItem2">
          <div className="item">
            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.117.2/illustrations-traveller/FreeCancellation.png" alt="" className="imgItem" />
            <div>
            <h1 className="itemTitle">Book now, pay at the property</h1>
            <span className="itemP">FREE cancellation on most rooms</span>
            </div>
          </div>
          <div className="item">
            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.117.2/illustrations-traveller/TripsGlobe.png" alt="" className="imgItem" />
            <div>
            <h1 className="itemTitle">2+ million properties worldwide</h1>
            <span className="itemP">Hotels, guest houses, apartments, and more…</span>
            </div>
          </div>
          <div className="item">
            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.117.2/illustrations-traveller/CustomerSupport.png" alt="" className="imgItem" />
            <div>
            <h1 className="itemTitle">Trusted 24/7 customer service you can rely on</h1>
            <span className="itemP">We're always here to help</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Offers
