import { IMAGE_ADDESHIVE, IMAGE_ADESHIVE, IMAGE_BRAKE_FLUID, IMAGE_ENGINEOIL, IMAGE_LUBRICANTS, IMAGE_OIL_ADDITIVES, IMAGE_POWER_OIL, IMAGE_TRANSMISSION_OIL } from "../assets/images"

const NewlyAdded = () => {
    return (
        <div className="bg-gray-100">
            <div className="text-center  p-10 mt-20">
                <h1 className="font-semibold text-4xl">Newly added</h1>
                <h1 className="font-semibold text-red-700 text-6xl">Oils and Fluids</h1>
            </div>
            <div className="flex flex-wrap justify-center ">

                <div className="bg-white w-52 h-64 m-5 rounded-xl hover:shadow-lg">
                    <img src={IMAGE_ENGINEOIL} className="mt-4 ml-8 mb-5"></img>
                    <h1 className="ml-10">Engine Oil</h1>
                    <p className="ml-8">⭐⭐⭐⭐</p>
                    <p className="ml-10">Rs.740</p>
                    <p className="text-red-700 font-semibold ml-10 hover:cursor-pointer">Buy now...</p>
                </div>

                <div className="bg-white w-52 h-64 m-5 rounded-xl hover:shadow-lg">
                    <img src={IMAGE_LUBRICANTS} className="mt-4 ml-8 mb-5"></img>
                    <h1 className="ml-10">Lubricants</h1>
                    <p className="ml-8">⭐⭐⭐⭐</p>
                    <p className="ml-10">Rs.740</p>
                    <p className="text-red-700 font-semibold ml-10 hover:cursor-pointer">Buy now...</p>
                </div>

                <div className="bg-white w-52 h-64 m-5 rounded-xl hover:shadow-lg">
                    <img src={IMAGE_TRANSMISSION_OIL} className="mt-4 ml-8 mb-5"></img>
                    <h1 className="ml-10">Transmission Oil</h1>
                    <p className="ml-8">⭐⭐⭐⭐</p>
                    <p className="ml-10">Rs.740</p>
                    <p className="text-red-700 font-semibold ml-10 hover:cursor-pointer">Buy now...</p>
                </div>


                <div className="bg-white w-52 h-64 m-5 rounded-xl hover:shadow-lg">
                    <img src={IMAGE_ADESHIVE} className="mt-4 ml-8 mb-5"></img>
                    <h1 className="ml-10">Adeshive and Sealents</h1>
                    <p className="ml-8">⭐⭐⭐⭐</p>
                    <p className="ml-10">Rs.740</p>
                    <p className="text-red-700 font-semibold ml-10 hover:cursor-pointer">Buy now...</p>
                </div>


                <div className="bg-white w-52 h-64 m-5 rounded-xl hover:shadow-lg">
                    <img src={IMAGE_POWER_OIL} className="mt-4 ml-8 mb-5"></img>
                    <h1 className="ml-10">Power Steering Oil</h1>
                    <p className="ml-8">⭐⭐⭐⭐</p>
                    <p className="ml-10">Rs.740</p>
                    <p className="text-red-700 font-semibold ml-10 hover:cursor-pointer">Buy now...</p>
                </div>


                <div className="bg-white w-52 h-64 m-5 rounded-xl hover:shadow-lg">
                    <img src={IMAGE_OIL_ADDITIVES} className="mt-4 ml-8 mb-5"></img>
                    <h1 className="ml-10">Oil Additives</h1>
                    <p className="ml-8">⭐⭐⭐⭐</p>
                    <p className="ml-10">Rs.740</p>
                    <p className="text-red-700 font-semibold ml-10 hover:cursor-pointer">Buy now...</p>
                </div>





            </div>
        </div>
    )
}
export default NewlyAdded;