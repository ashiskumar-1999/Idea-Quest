import React from "react"
import { Button } from "@chakra-ui/react"

const CustomButton = ({ label, onClick }) => {
  return (
    <Button
      w="150px"
      h="40px"
      bg="#15DB95"
      color="#ffffff"
      borderRadius="10px"
      fontSize="18px"
      fontWeight="bold"
      _hover={{ bg: "#15DB95" }}
      _focus={{ borderColor: "none" }}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default CustomButton
