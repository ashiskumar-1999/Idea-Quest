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
      _focus={{ borderColor: "none" }}
      _active={{ bg: "none" }}
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
    </Button>
  )
}

export default IdeaviewButton
