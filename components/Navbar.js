import React,{useState,useEffect} from "react"
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react"
import { BsPlusLg } from "react-icons/bs"
import { useRouter } from "next/router"
import Link from "next/link"
import CustomButton from "./CustomButton"
import IdeaCreateForm from "./IdeaCreateForm"

const CredentialSection = () => {
  
  return (
    <HStack>
      <Box>
        <Link href={"/signin"} passHref>
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
  const router = useRouter()
  
  const handleLogout= () => {
    if (typeof window !== "undefined") {
          localStorage.removeItem('token')
          router.push('/')
    }
  }
  return (
    <HStack spacing={8}>
      <Link href="/dashboard" passHref>
        <Button variant="link" color="#000000" fontSize="xl">Dashboard</Button>
      </Link>
      <Link href="/youridea" passHref>
        <Button variant="link" color="#000000" fontSize="xl">My idea</Button>
      </Link>
      <IconButton
        colorScheme="gray"
        aria-label="Post Your Idea"
        icon={<BsPlusLg />}
        onClick={createIdeaOnOpen}
        _focus={{ borderColor: "none" }}
      />
      <CustomButton label="Log Out" onClick={handleLogout}/>
      <IdeaCreateForm
        createIdeaIsOpen={createIdeaIsOpen}
        createIdeaOnClose={createIdeaOnClose}
      />
    </HStack>
  )
}
function Navbar() {
  const [token,setToken] = useState()
  useEffect(() => {
    let usertoken = localStorage.getItem('token')
    setToken(usertoken)
    
  },[])
  
  return (
    <Flex w="100%" direction="row" justifyContent="space-between" mb="30px">
      <HStack spacing={8}>
      <Link href="/" passHref>
      <Image src="Logo.svg" alt="logo" />
      </Link>
      </HStack>
     
{
  token ?  
  <DashboardSection />:<CredentialSection/>
}
    </Flex>
  )
}

export default Navbar
