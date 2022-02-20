import React, { useState, useEffect } from "react"
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react"
import { IoIosArrowUp } from "react-icons/io"

const IdeaviewCard = ({ heading, description }) => {
  return (
    <Button
      w="100%"
      h="50px"
      p="30px"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="10px"
      borderColor="#F6EFEF"
      boxShadow="md"
    >
      <Box textAlign="left">
        <Heading fontSize={["lg", "lg", "xl", "xl", "2xl"]}>{heading}</Heading>
        <Text
          fontSize={["md", "md", "lg", "lg", "lg"]}
          fontWeight="normal"
          isTruncated
        >
          {description}
        </Text>
      </Box>
      <Button>
        <VStack>
          <IoIosArrowUp />
          <Text fontWeight="bold">100</Text>
        </VStack>
      </Button>
    </Button>
  )
}

export default IdeaviewCard
