import React from 'react'
import Listitem from '../components/ListItem';
import Image from '../components/Image';
import Qrcode from '../assets/qrcode.png';
import playstore from '../assets/playstore.png';
import appstore from '../assets/appstore.png';
import Footarlogo from '../assets/footarlogo.png'
import { SlSocialFacebook } from "react-icons/sl";
import { LuTwitter } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-container mx-auto px-4 py-16">
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          
          <div>
            <h3 className="text-xl font-semibold mb-6"><Image src={Footarlogo} /></h3>
            <p className="text-sm mb-4">Subscribe</p>
            <p className="text-sm mb-4">Get 10% off your first order</p>

            <div className="flex items-center border border-white rounded px-3 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-sm w-full"
              />
              <span className="ml-2 cursor-pointer">➤</span>
            </div>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <Listitem text="111 Bijoy sarani, Dhaka," />
              <Listitem text="DH 1515, Bangladesh." />
              <Listitem text="exclusive@gmail.com" />
              <Listitem text="+88015-88888-9999" />
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-6">Account</h3>
            <ul className="space-y-3">
              <Listitem text="My Account" />
              <Listitem text="Login / Register" />
              <Listitem text="Cart" />
              <Listitem text="Wishlist" />
              <Listitem text="Shop" />
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              <Listitem text="Privacy Policy" />
              <Listitem text="Terms Of Use" />
              <Listitem text="FAQ" />
              <Listitem text="Contact" />
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-6">Download App</h3>
            <p className="text-xs text-gray-400 mb-4">
              Save $3 with App New User Only
            </p>

            <div className="flex gap-3 mb-4">
              <div className="w-20 h-20  rounded flex items-center justify-center text-black text-xs">
              <Image src={Qrcode} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-28 h-10  rounded text-black text-xs flex items-center justify-center">
                 <Image src={playstore} />
                </div>
                <div className="w-28 h-10  rounded text-black text-xs flex items-center justify-center">
                  <Image src={appstore} />
                </div>
              </div>
            </div>

            <div className="flex justify-between text-lg">
              <span><SlSocialFacebook /></span>
              <span><LuTwitter /></span>
              <span><IoLogoInstagram /></span>
              <span><FaLinkedinIn /></span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 py-4 text-center text-base text-gray-400">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
