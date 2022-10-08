import Announcement from "./announcement";
import Categorys from "./categorys";
import Footer from "./footer";
import Navbar from "./navbar";
import AirForce1ProductCard from "./productCards/airForce1ProductCard";
import Slider from "./slider";

function AirForce1() {
  return (
    <>
    <Navbar />
    <Announcement />
    <Categorys />
    <Slider />
    <AirForce1ProductCard />
    <Footer />
    </>
     
  );
}

export default AirForce1;