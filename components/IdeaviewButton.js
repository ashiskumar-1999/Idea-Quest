import React, { useState, useEffect } from "react"
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"

const IdeaviewButton = ({ title, description, upvotes, downvotes }) => {
  /* const [upvotes, setUpvote] = useState(0)
  const [downvotes, setDownvote] = useState(0)

  const IncreaseCount = () => setUpvote((c) => c + 1)
  const DecreaseCount = () => setDownvote((e) => e + 1) */

  return (
    <Button
      w="100%"
      h="50px"
      p="30px"
      mt="30px"
      justifyContent="space-between"
      alignItems="center"
      bg="#ffffff"
      borderRadius="10px"
      borderColor="#F6EFEF"
      boxShadow="md"
      _hover={{ bg: "#ffffff" }}
      _focus={{ bg: "none", borderColor: "none" }}
    >
      <Box textAlign="left">
        <Heading fontSize={["lg", "lg", "xl", "xl", "2xl"]}>{title}</Heading>
        <Text
          fontSize={["md", "md", "lg", "lg", "lg"]}
          fontWeight="normal"
          isTruncated
        >
          {description}
        </Text>
      </Box>
      <HStack>
        {/* <Button
          bg="#ffffff"
          borderRadius="5px"
          _hover={{ bg: "#ffffff" }}
          _focus={{ bg: "none", borderColor: "none" }}
          onClick={IncreaseCount}
        > */}
        <VStack>
          <IoIosArrowUp />
          <Text fontWeight="bold">{upvotes}</Text>
        </VStack>
        {/*  </Button>
        <Button
          bg="#ffffff"
          borderRadius="5px"
          _hover={{ bg: "#ffffff" }}
          _focus={{ bg: "none", borderColor: "none" }}
          onClick={DecreaseCount}
        > */}
        <VStack>
          <IoIosArrowDown />
          <Text fontWeight="bold">{downvotes}</Text>
        </VStack>
        {/* </Button> */}
      </HStack>
    </Button>
  )
}

export default IdeaviewButton
