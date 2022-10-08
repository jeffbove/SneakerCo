import Announcement from "./announcement";
import Categorys from "./categorys";
import Footer from "./footer";
import Navbar from "./navbar";
import KidsProductCard from "./productCards/kidsProductCard";
import Slider from "./slider";

function Kids() {
  return (
    <>
    <Navbar />
    <Announcement />
    <Categorys />
    <Slider />
    <KidsProductCard />
    <Footer />
    </>
     
  );
}

export default Kids;