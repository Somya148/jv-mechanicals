import { IMAGE_TOP1, IMAGE_TOP2, IMAGE_TOP3, IMAGE_TOP4 } from "../assets/images"

const TopRated = () => {
    return (
        <div>
            <div>
                <h2 className="text-center text-4xl mt-32 mb-5 font-semibold">Explore Our</h2>
                <h1 className="text-center text-5xl mb-20 font-semibold text-red-700">Top Rated Products</h1>
            </div>
            <div className="flex flex-wrap justify-center align-center mb-40">



                <div className="flex flex-col items-center border-2 border-gray-400 p-5 m-12 hover:shadow-xl">
                    <div>
                        <img src={IMAGE_TOP1} alt="top1"></img>
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold">Front axle</h1>
                        <h2 className="font-semibold">Rs. 500</h2>
                        <p>⭐⭐⭐⭐</p>
                        <p><span className="text-gray-700 font-semibold">Application:</span> Automobile industries</p>

                        <p><span className="text-gray-700 font-semibold">Color:</span> Black, silver</p>
                        <p className="text-red-700 font-bold hover:cursor-pointer">Buy now...</p>
                    </div>
                </div>



                <div className="flex flex-col items-center border-2 border-gray-400 p-5 m-12 hover:shadow-xl">
                    <div>
                        <img src={IMAGE_TOP2} alt="top1"></img>
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold">Steering Parts</h1>
                        <h2 className="font-semibold">Rs. 1500</h2>
                        <p>⭐⭐⭐⭐</p>
                        <p><span className="text-gray-700 font-semibold">Application:</span> Automobile industries</p>

                        <p><span className="text-gray-700 font-semibold">Color:</span> Black, silver</p>
                        <p className="text-red-700 font-bold hover:cursor-pointer">Buy now...</p>
                    </div>
                </div>

                <div className="flex flex-col items-center border-2 border-gray-400 p-5 m-12 hover:shadow-xl">
                    <div>
                        <img src={IMAGE_TOP3} alt="top1"></img>
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold">Car Suspensions</h1>
                        <h2 className="font-semibold">Rs. 2500</h2>
                        <p>⭐⭐⭐⭐</p>
                        <p><span className="text-gray-700 font-semibold">Application:</span> Automobile industries</p>

                        <p><span className="text-gray-700 font-semibold">Color:</span> Black, silver</p>
                        <p className="text-red-700 font-bold hover:cursor-pointer">Buy now...</p>
                    </div>
                </div>

                <div className="flex flex-col items-center border-2 border-gray-400 p-5 m-12 hover:shadow-xl">
                    <div>
                        <img src={IMAGE_TOP4} alt="top1"></img>
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold">Truck Suspension Kit</h1>
                        <h2 className="font-semibold">Rs. 5100</h2>
                        <p>⭐⭐⭐⭐</p>
                        <p><span className="text-gray-700 font-semibold">Application:</span> Automobile industries</p>

                        <p><span className="text-gray-700 font-semibold">Color:</span> Black, silver</p>
                        <p className="text-red-700 font-bold hover:cursor-pointer">Buy now...</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default TopRated;