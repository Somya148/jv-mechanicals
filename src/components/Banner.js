// import { IMAGE_BANNER } from "../assets/images";

// const Banner = () => {
//     return (
//         <div>
//             <div className="h-60 mt-20 mb-20 relative flex justify-center items-center">
//                 <img src={IMAGE_BANNER} alt="banner-image" className="w-full h-full object-cover"></img>

//                 <div className="absolute top-0 left-0 sm:top-5 sm:left-80  bg-black bg-opacity-50 p-4 text-white w-8/12">
//                     <h1 className="tracking-wider font-bold sm:text-4xl sm:pl-40 ">Upgrade Your Ride with Premium Car Parts</h1>

//                 </div>

//                 <button className="absolute top-56 left-0 sm:top-40  bg-red-600 text-white w-36 h-12 hover:bg-red-700">Buy Now</button>
//             </div>

//         </div>
//     )
// }
// export default Banner;

import { IMAGE_BANNER } from "../assets/images";

const Banner = () => {
    return (
        <div>
            <div className="h-60 mt-20 mb-40 relative flex justify-center items-center ">
                <img src={IMAGE_BANNER} alt="banner-image" className="w-full h-full object-cover"></img>

                <div className="absolute top-auto left-auto sm:top-5 sm:left-auto bg-black bg-opacity-50 p-4 text-white w-9/12">
                    <h1 className="text-center font-bold sm:text-5xl">Upgrade Your Ride with Premium Car Parts</h1>
                </div>

                <button className="absolute top-44 left-auto sm:top-40 sm:left-auto bg-red-600 text-white w-36 h-12 hover:bg-red-700">
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default Banner;
