import { BRAKE_IMAGE, IMAGE_ACCESSORIES, IMAGE_ELECTRICAL, IMAGE_ENGINE, IMAGE_EXHAUST, IMAGE_FUELSYSTEM, IMAGE_SUSPENSION, IMAGE_WHEELS } from "../assets/images"

const PopularCategories = () => {
    return (
        <div className="flex flex-wrap justify-center">

            <div className="flex w-96 h-48 m-10 shadow-lg hover:shadow-2xl">

                <div className="p-3">
                    <img src={IMAGE_SUSPENSION} alt="image"></img>
                </div>

                <div className="p-3">
                    <h1 className="font-semibold text-2xl">SUSPENSION</h1>
                    <p>Strut Assemblies </p>
                    <p>Shock absorbers Spring</p>
                    <p className="text-red-600 hover:text-red-700 hover:cursor-pointer">See more..</p>
                </div>

            </div>

            <div className="flex w-96 h-48 m-10 shadow-lg hover:shadow-2xl">

                <div className="p-3 mt-7">
                    <img src={BRAKE_IMAGE} alt="image"></img>
                </div>

                <div className="p-3">
                    <h1 className="font-semibold text-2xl">BRAKES</h1>
                    <p>Brake Pads </p>
                    <p>Brake Rotors</p>
                    <p>Brake Suspensions</p>
                    <p className="text-red-600 hover:text-red-700 hover:cursor-pointer">See more..</p>

                </div>

            </div>

            <div className="flex w-96 h-48 m-10 shadow-lg hover:shadow-2xl">

                <div className="p-3 mt-7">
                    <img src={IMAGE_EXHAUST} alt="image"></img>
                </div>

                <div className="p-3">
                    <h1 className="font-semibold text-2xl">EXHAUST</h1>
                    <p>Muffers </p>
                    <p>Exhaust Systems</p>
                    <p>Cataylic Convertors</p>
                    <p className="text-red-600 hover:text-red-700 hover:cursor-pointer">See more..</p>
                </div>

            </div>
            <div className="flex w-96 h-48 m-10 shadow-lg hover:shadow-2xl">

                <div className="p-3 mt-7">
                    <img src={IMAGE_ENGINE} alt="image"></img>
                </div>

                <div className="p-3">
                    <h1 className="font-semibold text-2xl">ENGINE</h1>
                    <p>Air Intake Systems </p>
                    <p>Oil Filters</p>
                    <p>Performance Chip</p>
                    <p className="text-red-600 hover:text-red-700 hover:cursor-pointer">See more..</p>
                </div>

            </div>

            <div className="flex w-96 h-48 m-10 shadow-lg hover:shadow-2xl">
                <div className="p-3 mt-7">
                    <img src={IMAGE_ELECTRICAL} alt="image"></img>
                </div>

                <div className="p-3">
                    <h1 className="font-semibold text-2xl">ELECTRICALS</h1>
                    <p>Batteries</p>
                    <p>Alternator</p>
                    <p>Starters</p>
                    <p className="text-red-600 hover:text-red-700 hover:cursor-pointer">See more..</p>
                </div>

            </div>

            <div className="flex w-96 h-48 m-10 shadow-lg hover:shadow-2xl">

                <div className="p-3 mt-7 w-40">
                    <img src={IMAGE_WHEELS} alt="image"></img>
                </div>

                <div className="p-3">
                    <h1 className="font-semibold text-2xl">TYRES</h1>
                    <p>All Season Tires</p>
                    <p>Performance Tires</p>
                    <p>Winter Tires</p>

                    <p className="text-red-600 hover:text-red-700 hover:cursor-pointer">See more..</p>
                </div>

            </div>


            <div className="flex w-96 h-48 m-10 shadow-lg hover:shadow-2xl">

                <div className="p-3 mt-7 w-40">
                    <img src={IMAGE_ELECTRICAL} alt="image"></img>
                </div>

                <div className="p-3">
                    <h1 className="font-semibold text-2xl">ELECTRICALS</h1>
                    <p>All types</p>
                    <p>Performance </p>
                    <p>Premium Quality</p>

                    <p className="text-red-600 hover:text-red-700 hover:cursor-pointer">See more..</p>
                </div>

            </div>


            <div className="flex w-96 h-48 m-10 shadow-lg hover:shadow-2xl">

                <div className="p-3 mt-7 w-40">
                    <img src={IMAGE_ACCESSORIES} alt="image"></img>
                </div>

                <div className="p-3">
                    <h1 className="font-semibold text-2xl">ACCESSORIES</h1>
                    <p></p>
                    <p>Performance Tyres</p>
                    <p>Winter Tyres</p>

                    <p className="text-red-600 hover:text-red-700 hover:cursor-pointer">See more..</p>
                </div>

            </div>


            <div className="flex w-96 h-48 m-10 shadow-lg hover:shadow-2xl">

                <div className="p-3 mt-7 w-40">
                    <img src={IMAGE_FUELSYSTEM} alt="image"></img>
                </div>

                <div className="p-3">
                    <h1 className="font-semibold text-2xl">FUEL SYSTEM</h1>
                    <p>All Season Tyres</p>
                    <p>Performance Tyres</p>
                    <p>Winter Tyres</p>

                    <p className="text-red-600 hover:text-red-700 hover:cursor-pointer">See more..</p>
                </div>

            </div>


        </div>
    )
}
export default PopularCategories;