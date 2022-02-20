import React from "react"
import { Box, Flex, HStack, Image } from "@chakra-ui/react"
import Link from "next/link"
import CustomButton from "./CustomButton"

const CredentialSection = () => {
  return (
    <HStack>
      <Box>
        <Link href="/signin" passHref>
          <CustomButton label="Sign in" />
        </Link>
      </Box>
      <Box>
        <Link href="/signup" passHref>
          <CustomButton label="Register" />
        </Link>
      </Box>
    </HStack>
  )
}

function Navbar() {
  return (
    <Flex w="100%" direction="row" justifyContent="space-between" mb="30px">
      <Image src="Logo.svg" alt="logo" />
      <CredentialSection />
    </Flex>
  )
}

export default Navbar
