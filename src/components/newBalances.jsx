import Announcement from "./announcement";
import Categorys from "./categorys";
import Footer from "./footer";
import Navbar from "./navbar";
import NewBalanceProductCard from "./productCards/newBalanceProductCard";
import Slider from "./slider";

function NewBalances() {
  return (
    <>
    <Navbar />
    <Announcement />
    <Categorys />
    <Slider />
    <NewBalanceProductCard />
    <Footer />
    </>
     
  );
}

export default NewBalances;