import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex flex-wrap justify-center sm:justify-between  text-black h-20">

            <div className="Logo px-5 italic font-semibold mt-6 sm:mt-6 sm:ml-10 sm:text-2xl">
                JV Mechanicals
            </div>

            <div>
                <ul className='flex mt-6 sm:mt-6 sm:mr-10 sm:text-2xl'>
                    <li className='px-5 hover:text-red-700 hover:cursor-pointer'>
                        <Link to="./">Home</Link>
                    </li>
                    <li className='px-5 hover:text-red-700 hover:cursor-pointer'>
                        <Link to="./about">About Us</Link>
                    </li>
                    <li className='px-5 hover:text-red-700 hover:cursor-pointer'>
                        <Link to="./contact">Contact Us</Link></li>
                </ul>
            </div>


        </div>
    )
}
export default Header;