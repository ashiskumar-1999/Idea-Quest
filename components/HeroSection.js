import React from 'react'
import {Flex,Box, Image,Heading,Text, VStack} from '@chakra-ui/react'
import PageLayout from './PageLayout'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
      <>
      
      <Navbar/>
          <Flex w="100%" direction={["column","column","row","row","row"]} justifyContent="space-between"  alignItems="center" >
                  <Heading maxW="450px" fontSize={["3xl","3xl","4xl","5xl","5xl"]} color="#15DB95">Social Network for Startup Ideas</Heading>
              
              
                  <Image src="/MainIllustration.svg" alt="Hero Illustration"/>
             
          </Flex>
      </>
  )
}

export default HeroSection