import Announcement from "./announcement";
import Categorys from "./categorys";
import Footer from "./footer";
import Navbar from "./navbar";
import WomensProductCard from "./productCards/womensProductCard";

import Slider from "./slider";

function Womens() {
  return (
    <>
    <Navbar />
    <Announcement />
    <Categorys />
    <Slider />
    <WomensProductCard />
    <Footer />
    </>
     
  );
}

export default Womens;