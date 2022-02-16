import React from "react"
import { Box } from "@chakra-ui/react"

function FormCard({ children }) {
  return (
    <Box w="500px" h="40%" p="35px" bg="#D6E4DF" borderRadius="10px">
      {children}
    </Box>
  )
}

export default FormCard
