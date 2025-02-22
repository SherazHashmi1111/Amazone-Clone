import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 margintop">
      <div className="container h-screen md:h-50 mx-auto flex flex-col md:flex-row justify-around items-center px-6">
        {/* Download App Section */}
        <div className="text-center md:text-left flex flex-col gap-2">
          <h3 className="text-lg font-semibold">DOWNLOAD OUR APP</h3>
          <p className="text-sm mt-2">Download App for Android and IOS mobile phone</p>
          <div className="flex justify-center md:justify-start gap-3 mt-3">
            <img src={google} alt="Google Play" className="h-10 cursor-pointer" />
            <img src={apple} alt="App Store" className="h-10 cursor-pointer" />
          </div>
        </div>

        {/* Brand Name & Copyright */}
        <div className="text-center mt-6 md:mt-0 flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-red-500">ECOMMERCE.</h1>
          <p className="text-xs mt-1">High Quality is our first priority</p>
          <p className="text-xs">Copyrights 2021 © MeSherazHashmi</p>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-right mt-6 md:mt-0 flex flex-col gap-2">
          <h3 className="text-lg font-semibold md:text-3xl">Follow Us</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline flex items-center gap-2"><FaInstagramSquare className='text-green-500'/>Instagram</a></li>
            <li><a href="#" className="hover:underline flex items-center gap-2 "><FaYoutube className='text-red-600'/>YouTube</a></li>
            <li><a href="#" className="hover:underline flex items-center gap-2"><CiFacebook className='text-blue-500'/>Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer