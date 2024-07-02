import DestWeLove from "../../components/destWeLove/DestWeLove"
import ExploreList from "../../components/exploreList/ExploreList"
import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"
// import GoBackButton from "../../components/goBackBtn/GoBackBtn"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import Offers from "../../components/offers/Offers"
import PropertyList from "../../components/propertyList/PropertyList"
import TrendingDest from "../../components/trendingDest/TrendingDest"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Offers</h1>
        <Offers/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Explore Vietnam</h1>
        <ExploreList/>
        <h1 className="homeTitle">Trending destinations</h1>
        <TrendingDest/>
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties/>
        <h1 className="homeTitle">Destinations we love</h1>
        <DestWeLove/>
        <MailList/>
        {/* <GoBackButton/> */}
        <Footer/>
      </div>
    </div>
  )
}

export default Home
