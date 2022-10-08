import Announcement from "./announcement";
import Categorys from "./categorys";
import Footer from "./footer";
import Navbar from "./navbar";
import Jordan4ProductCard from "./productCards/jordan4ProductCard";
import Slider from "./slider";

function Jordan4() {
  return (
    <>
    <Navbar />
    <Announcement />
    <Categorys />
    <Slider />
    <Jordan4ProductCard />
    <Footer />
    </>
     
  );
}

export default Jordan4;