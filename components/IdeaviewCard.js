import React, { useState, useEffect } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import { MdOutlineKeyboardArrowUp } from "react-icons"
import Button from "../components/Button"

const IdeaviewCard = ({ heading, description, count }) => {
  return (
    <Box
      w="100%"
      h="50px"
      p="30px"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="10px"
      borderColor="#F6EFEF"
      boxShadow="md"
    >
      <Heading fontSize="2xl">{heading}</Heading>
      <Text fontSize="lg" isTruncated>
        {description}
      </Text>

      <Button>
        <MdOutlineKeyboardArrowUp />
        {count}
      </Button>
    </Box>
  )
}

export default IdeaviewCard
