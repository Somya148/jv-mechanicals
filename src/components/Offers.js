import { IMAGE_1, IMAGE_2 } from "../assets/images"

const Offers = () => {
    return (
        <div className="flex flex-auto h-96 mt-40 mb-40">


            <div className="w-6/12 ml-10 mr-5 relative">
                <img src={IMAGE_1} alt="tire-image" className="w-full h-full object-cover"></img>

                <div className="absolute top-0 left-0 sm:top-5 sm:left-5  bg-black bg-opacity-50 p-4 text-white">
                    <h1 className=" font-bold sm:text-2xl">Exclusive Auto tyre Sale !</h1>
                    <p>Make your rides more smoother</p>
                    <p>with our polymer tyres</p>

                </div>

                <button className="absolute top-56 left-0 sm:top-40 sm:left-5 bg-red-600 text-white w-24 h-12 hover:bg-red-700">Buy Now</button>
            </div>

            {/* div 2 */}
            <div className="w-6/12 mr-10 ml-5 relative">
                <img src={IMAGE_2} alt="light-image" className="w-full h-full object-cover"></img>

                <div className="absolute top-0 left-0 sm:top-5 sm:left-5  bg-black bg-opacity-50 p-4 text-white">
                    <h1 className=" font-bold sm:text-2xl">Empower your vehicle with our Headlights !</h1>
                    <p>Headlight 110W With Drl,High Beam</p>
                    <p>Latest 2023 Cree/Osram Led|Korean Chip</p>

                </div>

                <button className="absolute  top-64 left-0 sm:top-40 sm:left-5 bg-red-600 text-white w-28 h-12 hover:bg-red-700">Explore More</button>


            </div>


        </div>
    )
}
export default Offers;