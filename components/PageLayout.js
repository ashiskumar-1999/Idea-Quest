import React from "react"
import { Flex } from "@chakra-ui/react"

const PageLayout = ({ children, isDirection,...props }) => {
  return (
    <Flex 
      direction={isDirection ? "column" : "row"}
      justifyContent="space-around"
      alignItems="center"
      mx={["60px", "80px", "80px", "100px", "100px"]}
      my="50px"
      {...props}
    >
      {children}
    </Flex>
  )
}

export default PageLayout
