import Announcement from "./components/announcement";
import Categorys from "./components/categorys";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Pictures from "./components/Pictures";
import MostPopularProductCard from "./components/productCards/mostPopular";
import NewReleasesProductCard from "./components/productCards/newReleases";
import Slider from "./components/slider";

function App() {
  return (
    <>
    
    <Navbar />
    <Announcement />
    <Categorys />
    <Slider />
    <Pictures />
    <MostPopularProductCard />
    <NewReleasesProductCard />
    <Footer />

    </>
     
  );
}

export default App;
