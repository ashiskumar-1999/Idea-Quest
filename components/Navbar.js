import React from "react"
import {
  Box,
  Flex,
  HStack,
  Image,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react"
import { BsPlusLg } from "react-icons/Bs"
import Link from "next/link"
import CustomButton from "./CustomButton"
import IdeaCreateForm from "./IdeaCreateForm"

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

const DashboardSection = () => {
  const {
    isOpen: createIdeaIsOpen,
    onOpen: createIdeaOnOpen,
    onClose: createIdeaOnClose,
  } = useDisclosure()

  return (
    <HStack>
      <IconButton
        colorScheme="gray"
        aria-label="Post Your Idea"
        icon={<BsPlusLg />}
        onClick={createIdeaOnOpen}
        _focus={{ borderColor: "none" }}
      />
      <IdeaCreateForm
        createIdeaIsOpen={createIdeaIsOpen}
        createIdeaOnClose={createIdeaOnClose}
      />
    </HStack>
  )
}
function Navbar() {
  return (
    <Flex w="100%" direction="row" justifyContent="space-between" mb="30px">
      <Image src="Logo.svg" alt="logo" />

      <DashboardSection />
    </Flex>
  )
}

export default Navbar
