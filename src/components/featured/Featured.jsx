import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://lp-cms-production.imgix.net/2021-10/National%20Botanic%20Gardens%20brian%20morrison%20tourism%20ireland.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://lp-cms-production.imgix.net/2023-03/Austin%20woman%20riding%20scooter%20shutterstock_1570686892.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://a.cdn-hotels.com/gdcs/production29/d1870/6a5ec560-bb25-11e8-970b-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>London</h1>
            <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://www.telegraph.co.uk/content/dam/Travel/hotels/2023/july/Berlin%20Brandenburg%20gate%20getty.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Berlin</h1>
            <h2>533 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
