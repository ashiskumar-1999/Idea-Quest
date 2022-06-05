import React, { useState, useEffect } from "react"
import { Box, Button, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"

const IdeaviewButton = ({ title, description, upvotes, downvotes,onClick }) => {
  /* const [upvotes, setUpvote] = useState(0)
  const [downvotes, setDownvote] = useState(0)

  const IncreaseCount = () => setUpvote((c) => c + 1)
  const DecreaseCount = () => setDownvote((e) => e + 1) */

  return (
    <Box
      w="100%"
      h={["300px","300px","320px","300px","300px"]}
      p={["20px","20px","30px","30px","30px"]}
      mt={["20px","20px","30px","30px","30px"]}
      
      alignItems="baseline"
      borderRadius="10px"
      borderColor="#F6EFEF"
      boxShadow="md"
      _focus={{ borderColor: "none" }}
      _active={{ bg: "none" }}
      onClick={onClick}
    >
      <Flex direction="column" textAlign="left" w={"100%"}>
        <HStack justifyContent="space-between">
        <Heading fontSize={["2xl", "2xl", "3xl", "3xl", "3xl"]} color="#15DB95">{title}</Heading>
        <HStack>
        <VStack>
          <IoIosArrowUp color="#15DB95" />
          <Text fontWeight="bold" color="#15DB95">
            {upvotes}
          </Text>
        </VStack>

        <VStack>
          <IoIosArrowDown color="#FD4242" />
          <Text fontWeight="bold" color="#FD4242">
            {downvotes}
          </Text>
        </VStack>
      </HStack>
        </HStack>
        <Box w="90%" h="100px" pt="20px" >
        <Text
          fontSize={["lg", "xl", "xl", "xl", "xl"]}
          fontWeight="medium"
          textAlign={"justify"}
          noOfLines={6}
        >
          {description}
        </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default IdeaviewButton
