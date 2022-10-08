import Announcement from "./announcement";
import Categorys from "./categorys";
import Footer from "./footer";
import Navbar from "./navbar";
import HoodiesProductCard from "./productCards/hoodiesProductCard";
import Slider from "./slider";

function Hoodies() {
  return (
    <>
    <Navbar />
    <Announcement />
    <Categorys />
    <Slider />
    <HoodiesProductCard />
    <Footer />
    </>
     
  );
}

export default Hoodies;