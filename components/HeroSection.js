import React from 'react'
import {Flex,Box, Image,Heading,Text, VStack} from '@chakra-ui/react'
import PageLayout from './PageLayout'
import Navbar from './Navbar'

const HeroSection = () => {
  return (<>
    <Navbar />
    <Flex
      w="100%"
      direction={["column", "column", "row", "row", "row"]}
      justifyContent="space-between"
      alignItems="center"
    >
      <VStack my="30px">
        <Heading
          maxW={["", "", "400px", "450px", "450px"]}
          fontSize={["2xl", "3xl", "3xl", "5xl", "5xl"]}
          color="#15DB95"
        >
          Social Network for Startup Ideas
        </Heading>
        <Text
          maxW={["", "", "400px", "450px", "450px"]}
          fontSize={["lg", "xl", "xl", "2xl", "2xl"]}
        >
          Verify feasibility of an idea with a network of awesome People.
        </Text>
      </VStack>
      <Box>
        <Image src="/MainIllustration.svg" alt="Hero Illustration" />
      </Box>
    </Flex>
  </>
  
  )
}

export default HeroSection