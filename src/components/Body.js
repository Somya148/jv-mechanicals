import Services from "./Services";
import Offers from "./Offers";
import PopularCategories from "./PopularCategories";
import NewlyAdded from "./NewlyAdded";
import Banner from "./Banner";
import TopRated from "./TopRated";
import Tyre from "./Tyre";
import Footer from "./Footer";
import Hero from "./Hero";
const Body = () => {
    return (
        <div>

            <Hero />
            <div className="ml-5 text-xl mt-20 sm:text-center sm:text-2xl sm:mt-60">
                <p>Explore our curated selection of premium car parts design and enhance your driving experience.</p>
                <p>From brakes to exhaust systems, find the best for your vehicles.</p>
            </div>


            <Services />
            <Offers />
            <h1 className="text-center mt-60 mb-32 font-semibold text-6xl">Popular Categories</h1>
            <PopularCategories />

            <TopRated />

            <NewlyAdded />
            <Tyre />
            <Banner />



        </div>


    )
}
export default Body;