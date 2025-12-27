import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import  Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";




const Navbar = () => {
  return (
    <nav className='pt-10 pb-4'>
        <Container>
            <Flex>
                <div className='w-3/12'>
                <Image src={Logo}/>
                </div>
                <div className='w-5/12 '>
                <ul className='flex gap-x-12 cursor-pointer'>
                    <ListItem className="hover:underline" text="Home"/>
                    <ListItem className="hover:underline" text="Contact"/>
                    <ListItem className="hover:underline" text="About"/>
                    <ListItem className="hover:underline" text="Sign Up"/>
                </ul>
                </div>
                <div className='w-4/12 pl-10'>
                   <Flex className='items-center justify-between'>
                  <div className="relative w-[240px]">
  <input
    type="text"
    placeholder="What are you looking for?"
    className="w-full rounded-md bg-[#F5F5F5] py-2 pl-4 pr-10 text-sm placeholder:text-gray-400 focus:outline-none"
  />

  <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg cursor-pointer" />
</div>

                   <IoIosHeartEmpty  className='text-xl'/>
                   <IoCartOutline  className='text-xl'/>
                   </Flex>



                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar