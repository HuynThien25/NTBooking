import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up we'll send the best deals to you</span>
      {/* <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" className="input"/>
        <button>Subscribe</button>
      </div> */}
      <button className="listProperty">List your property</button>
      <div className="listp">
        <ul>
          <li className="lists">Mobile version</li>
          <li className="lists">Your account</li>
          <li className="lists">Make change online to your booking</li>
          <li className="lists">Customer Service Help</li>
          <li className="lists">Become an affiliate</li>
          <li className="lists">NTBooking.com for Business</li>
        </ul>
      </div>
    </div>
  )
}

export default MailList
