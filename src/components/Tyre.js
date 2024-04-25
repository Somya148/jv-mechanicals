import { IMAGE_SMALL_TYRE1, IMAGE_SMALL_TYRE2, IMAGE_SMALL_TYRE3, IMAGE_SMALL_TYRE4, IMAGE_TYRE } from "../assets/images"

// const Tyre = () => {
//     return (
//         <div className="flex flex-wrap justify-center align-center">
//             <div className="flex flex-col">

// <div className="flex border-2 border-gray-900 ">
//     <div>
//         <img src={IMAGE_TYRE}></img>
//     </div>
//     <div className="p-14">
//         <h1 className="text-5xl font-bold text-blue-950">Tyre for All Seasons</h1>
//         <p className="pt-5 text-2xl">Tyre with Muscles</p>
//         <p className="text-2xl">All weather Tyres</p>
//         <p className="text-2xl">Multi purpose tyres</p>
//         <p className="bg-red-700 text-white font-semibold w-60 text-center p-2 mt-5 text-xl">Starting from Rs. 3,700</p>
//     </div>
// </div>


//                 <div className="flex flex-wrap">

//                     <div className="border-2 border-gray-900 p-10 text-center ">
//                         <img src={IMAGE_SMALL_TYRE1} alt="tyre" className="pl-10"></img>

//                         <h1 className="pt-3 text-blue-950 font-bold text-2xl">MACHOLLINE TYRE 15" BASE</h1>
//                         <h1 className="bg-red-700 text-white font-semibold w-40 text-center mt-5 text-lg ml-20">Rs.3,700</h1>
//                     </div>

//                     <div className="border-2 border-gray-900 p-10 text-center ">
//                         <img src={IMAGE_SMALL_TYRE3} alt="tyre" className="pl-10"></img>

//                         <h1 className="pt-5 text-blue-950 font-bold text-2xl">DULNOP ALL WEATHER TYRE</h1>
//                         <h1 className="bg-red-700 text-white font-semibold w-40 text-center  mt-5 text-lg ml-20">Rs.6,700</h1>
//                     </div>



//                 </div>



//             </div>



//             <div className="flex flex-col flex-wrap">

// <div className="border-2 border-gray-900 p-10 text-center">
//     <img src={IMAGE_SMALL_TYRE1} alt="tyre" className="pl-10"></img>

//     <h1 className="pt-3 text-blue-950 font-bold text-2xl">MACHOLLINE TYRE 15" BASE</h1>
//     <h1 className="bg-red-700 text-white font-semibold w-40 text-center mt-5 text-lg ml-20">Rs.3,700</h1>
// </div>

//                 <div className="border-2 border-gray-900 p-10 text-center ">
//                     <img src={IMAGE_SMALL_TYRE3} alt="tyre" className="pl-10"></img>

//                     <h1 className="pt-5 text-blue-950 font-bold text-2xl">DULNOP ALL WEATHER TYRE</h1>
//                     <h1 className="bg-red-700 text-white font-semibold w-40 text-center  mt-5 text-lg ml-20">Rs.6,700</h1>
//                 </div>



//             </div>
//         </div>
//     )
// }

// export default Tyre;

const Tyre = () => {
    return (
        <div className="bg-gray-100">

            <div className="text-center pt-52">
                <h1 className="font-bold text-5xl">Exclusive</h1>
                <h1 className="font-bold text-6xl text-red-700 pt-5">Jv Mechanicals Tyre</h1>
                <h2 className="font-semibold text-3xl pb-20 pt-5">The Tyre You Can Count On.</h2>

            </div>

            <div className="flex flex-wrap justify-center align-center ">

                <div className="flex shadow-2xl m-10 bg-white">
                    <div className="hidden sm:block">
                        <img src={IMAGE_TYRE} alt="tyre" className=""></img>
                    </div>
                    <div className="p-14">
                        <h1 className="text-5xl font-bold text-blue-950">Tyre for All Seasons</h1>
                        <p className="pt-5 text-2xl">Tyre with Muscles</p>
                        <p className="text-2xl">All weather Tyres</p>
                        <p className="text-2xl">Multi purpose tyres</p>
                        <p className="bg-red-700 text-white font-semibold w-60 text-center p-2 mt-5 text-xl">Starting from Rs. 3,700</p>
                    </div>
                </div>

                <div className="border-2 shadow-2xl p-10 text-center m-10 bg-white">
                    <img src={IMAGE_SMALL_TYRE1} alt="tyre" className="pl-10"></img>

                    <h1 className="pt-3 text-blue-950 font-bold text-2xl">MACHOLLINE TYRE 15" BASE</h1>
                    <h1 className="bg-red-700 text-white font-semibold w-40 text-center mt-5 text-lg ml-20">Rs.3,700</h1>
                </div>

            </div>




            <div className="flex flex-wrap justify-center align-center">

                <div className="border-2 shadow-2xl p-10 text-center m-10 bg-white">
                    <img src={IMAGE_SMALL_TYRE2} alt="tyre" className="pl-10"></img>

                    <h1 className="pt-3 text-blue-950 font-bold text-2xl">DULNOP ALL WEATHER TYRE</h1>
                    <h1 className="bg-red-700 text-white font-semibold w-40 text-center mt-5 text-lg ml-20">Rs.3,700</h1>
                </div>

                <div className="border-2 shadow-2xl p-10 text-center m-10 bg-white">
                    <img src={IMAGE_SMALL_TYRE3} alt="tyre" className="pl-10 pb-8"></img>

                    <h1 className="pt-3 text-blue-950 font-bold text-2xl">ENERGY SAVING TYRE</h1>
                    <h1 className="bg-red-700 text-white font-semibold w-40 text-center mt-5 text-lg ml-20">Rs.3,700</h1>
                </div>

                <div className="border-2 shadow-2xl p-10 text-center m-10 bg-white">
                    <img src={IMAGE_SMALL_TYRE4} alt="tyre" className="pl-10"></img>

                    <h1 className="pt-3 text-blue-950 font-bold text-2xl">GIGA TYRE XLD</h1>
                    <h1 className="bg-red-700 text-white font-semibold w-40 text-center mt-5 text-lg ml-12">Rs.3,700</h1>
                </div>

            </div>



        </div>
    )
}
export default Tyre;