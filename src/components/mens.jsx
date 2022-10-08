import Announcement from "./announcement";
import Categorys from "./categorys";
import Footer from "./footer";
import Navbar from "./navbar";
import MensProductCard from "./productCards/mensProductCard";
import Slider from "./slider";

function Mens() {
  return (
    <>
    <Navbar />
    <Announcement />
    <Categorys />
    <Slider />
    <MensProductCard />
    <Footer />
    </>
     
  );
}

export default Mens;