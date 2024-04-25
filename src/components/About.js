import { IMAGE_ABOUT2, IMAGE_GOAL1, IMAGE_GOAL2, IMAGE_GOAL3, IMAGE_GOAL4, IMAGE_GOAL5 } from "../assets/images";

const About = () => {
    return (
        <div>

            <div className="flex flex-wrap justify-center mt-10">

                <div className="ml-14">
                    <img src={IMAGE_ABOUT2} className="max-w-full h-auto"></img>
                </div>

                <div className="p-5 sm:text-center mb-28 sm:pt-20 sm:mb-52">
                    <h1 className="font-bold text-xl sm:text-6xl">About Us</h1>

                    <p className="font-thin text-sm sm:text-2xl mt-5 sm:mt-10"><span className="text-red-700">JV Mechanicals</span> was created in 1998 to secure India's global leadership in advanced </p>

                    <p className="font-thin text-sm sm:text-2xl">manufacturing by connecting people, ideas, and technology.</p>

                    <p className="font-thin text-sm sm:text-2xl"> JV Mechanicals institutes convene business competitors, academic institutions,</p>

                    <p className="font-thin text-sm sm:text-2xl"> and other stakeholders to test applications of new technology, create new products, </p>

                    <p className="font-thin text-sm sm:text-2xl">reduce cost and risk, and enable the manufacturing workforce with the skills of the future.</p>
                </div>
            </div>






            <div className="h-60 sm:mt-20 sm:mb-40 relative flex justify-center items-center ">
                <img src={IMAGE_GOAL1} alt="banner-image" className="w-full h-full object-cover"></img>

                <div className="absolute top-auto left-auto sm:top-5 sm:left-auto bg-black bg-opacity-50 p-4 text-white w-9/12 sm:mt-8">
                    <h1 className="text-center font-bold sm:text-6xl">Taking manufacturing to the next level.</h1>
                </div>
            </div>

            <div className="flex justify-center text-center align-center">
                <div className="m-20">
                    <h1 className="text-6xl font-semibold text-red-700">Our Mission</h1>
                    <p className="text-3xl font-thin mt-10">We are committed to enhancing our customer's success with responsiveness, quality and service that sets the industry standard. Francis Manufacturing Company understands the value of continual improvement and commitment to our most valuable asset, our people.</p>
                </div>
            </div>



            <div className="flex justify-center m-10 text-6xl text-red-700 font-semibold">
                <h1>Our Four Major Goals</h1>
            </div>

            <div className="flex flex-wrap justify-center">

                <div className="relative w-6/12">
                    <img src={IMAGE_GOAL5} alt="tire-image" className="w-full h-full object-cover"></img>

                    <div className="absolute top-0 left-0 sm:top-5 sm:left-5  bg-black bg-opacity-50 p-4 text-white">
                        <h1 className=" font-bold sm:text-2xl">Produce High Quality Products.</h1>
                        <p>The machines and materials are up to date and of excellent quality.</p>


                    </div>
                </div>


                <div className="relative w-6/12">
                    <img src={IMAGE_GOAL2} alt="tire-image" className="w-full h-full object-cover"></img>

                    <div className="absolute top-0 left-0 sm:top-5 sm:left-5  bg-black bg-opacity-50 p-4 text-white">
                        <h1 className=" font-bold sm:text-2xl">Excellent Suppliers</h1>
                        <p>The quality of our products directly stems from the quality of the suppliers you buy from.</p>


                    </div>
                </div>


            </div>


            <div className="flex flex-wrap justify-center">

                <div className="relative w-1/2">
                    <img src={IMAGE_GOAL3} alt="tire-image" className="w-full h-full object-cover"></img>

                    <div className="absolute top-0 left-0 sm:top-5 sm:left-5  bg-black bg-opacity-50 p-4 text-white">
                        <h1 className=" font-bold sm:text-2xl">A Safe Workplace</h1>
                        <p>Our number one priority is the safety of the workplace</p>


                    </div>
                </div>


                <div className="relative w-1/2">
                    <img src={IMAGE_GOAL4} alt="tire-image" className="w-full h-full object-cover"></img>

                    <div className="absolute top-0 left-0 sm:top-5 sm:left-5  bg-black bg-opacity-50 p-4 text-white">
                        <h1 className=" font-bold sm:text-2xl">Green Practices</h1>
                        <p>Use recyclable materials</p>
                        <p>Choose greener facilities</p>


                    </div>
                </div>


            </div>


            <div className="flex flex-wrap justify-center mt-20 mb-40 bg-red-700 text-white">
                <div className="p-10">
                    <h1 className="text-3xl font-semibold text-black">Subscribe to our Newsletter</h1>
                    <p>Be the first to receive exclusive promotion updates and product announcements
                    </p>
                    <p>Subscribe to our mailing list now !</p>
                </div>

                <div className="p-10">
                    <h1 className="text-3xl font-semibold text-black">Email Address</h1>
                    <input className="rounded-lg p-1 w-80" type="text" id="gmail" name="gmail" placeholder="Enter Your mail..">
                    </input>
                </div>

            </div>



        </div >
    );
};

export default About;