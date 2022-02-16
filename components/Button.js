import React from "react"
import { Box } from "@chakra-ui/react"

const Button = ({ label, onClick }) => {
  return (
    <Box
      as="button"
      w="150px"
      h="40px"
      bg="#15DB95"
      color="#ffffff"
      borderRadius="10px"
      fontSize="18px"
      fontWeight="bold"
      onClick={onClick}
    >
      {label}
    </Box>
  )
}

export default Button
