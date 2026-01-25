import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'

import CategoryBox from '../components/CategoryBox';
import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { IoWatchOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md";

import { MdOutlineVideogameAsset } from "react-icons/md";


const Category = () => {
    return (
        <section>
            <Container>
                <SubHeading title="Categories" />
                <Heading className="pt-6 pb-[60px]" text="Browse By Category" />
                <Flex className='justify-between pb-[70px]'>
                    <CategoryBox text="Phones" icon={<SlScreenSmartphone />} />
                    <CategoryBox text="Computers" icon={<HiOutlineComputerDesktop />} />
                    <CategoryBox text="SmartWatch" icon={<IoWatchOutline />} />
                    <CategoryBox text="Camera" icon={<IoCameraOutline />
} />
                    <CategoryBox text="HeadPhones" icon={<MdOutlineHeadphones />
} />
                    <CategoryBox text="Gaming" icon={<MdOutlineVideogameAsset />
} />
                    
                </Flex>
                <hr className='mb-[70px] border-[#0000004d]'/>

            </Container>
        </section>
    )
}

export default Category
