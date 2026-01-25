import React from 'react'
import Container from './../components/Container';
import Flex from './../components/Flex';

const Productdetails = () => {
  
  return (
    <section>
      <Container>
        <Flex className='py-20'>
          <h1 className='text-sm text-gray-400 font-pop'>Account <span className='px-2'> /</span></h1>
          <h2 className='text-sm text-gray-400 font-pop'>Gaming <span className='px-2'> /</span></h2>
          <p className='text-sm text-black font-pop'>Havic HV G-92 Gamepad</p>

        </Flex>
        
      </Container>
    </section>
  )
}

export default Productdetails