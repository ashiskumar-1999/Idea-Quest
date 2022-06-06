import React, { useState } from "react"
import { Box, FormControl, FormLabel, Input, Image, useToast } from "@chakra-ui/react"
import FormCard from "../components/FormCard"
import PageLayout from "../components/PageLayout"
import CustomButton from "../components/CustomButton"
import { handleErrorToasts } from "../utils/error.utils"
import axios from "axios"
import {useRouter} from 'next/router'
import { useEffect } from "react/cjs/react.production.min"

const SignupForm = () => {
  const [email, setEmail] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  /*  const [role, setRole] = useState("") */
  const [password, setPassword] = useState("")
  const toast = useToast()
  const router = useRouter()
  
  const handleSignup = () => {
      axios.post(
      "https://ideas-iq.herokuapp.com/api/auth/signup",
      {
        email,
        firstname,
        lastname,
        password,
      }
    )
    .then((response)=> {
      response.data.success.statusCode &&
        toast({
          title: 'User created Successfully',
          position: 'bottom-right',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
         router.push('/signin')
    })
    .catch((axiosError) =>{ console.log(axiosError.response.data.error.msg)
        handleErrorToasts(axiosError.response.data.error, toast)
    }
    )
  }
    
  return (
    <form>
      <FormControl isRequired>
        <FormLabel htmlFor="email" fontWeight="bold">
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          bg="#ffffff"
          borderRadius="none"
          placeholder="Example@gmail.com"
          boxShadow="base"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel htmlFor="email" fontWeight="bold">
          First Name
        </FormLabel>
        <Input
          id="name"
          type="text"
          bg="#ffffff"
          borderRadius="none"
          placeholder="Mike North"
          boxShadow="base"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <FormLabel htmlFor="email" fontWeight="bold">
          Last Name
        </FormLabel>
        <Input
          id="name"
          type="text"
          bg="#ffffff"
          borderRadius="none"
          placeholder="Mike North"
          boxShadow="base"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        {/* 
        <FormLabel htmlFor="email" fontWeight="bold">
          Background
        </FormLabel>
        <Input
          id="background"
          type="text"
          bg="#ffffff"
          borderRadius="none"
          placeholder="e.g Front-end Developer"
          boxShadow="base"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        /> */}
        <FormLabel htmlFor="email" fontWeight="bold">
          Password
        </FormLabel>
        <Input
          id="password"
          type="password"
          bg="#ffffff"
          borderRadius="none"
          placeholder="*******"
          boxShadow="base"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* 
        <FormLabel htmlFor="email" fontWeight="bold">
          Confirm Password
        </FormLabel>
        <Input
          id="password"
          type="password"
          bg="#ffffff"
          borderRadius="none"
          placeholder="*******"
          boxShadow="base"
        /> */}
      </FormControl>
      <Box mt="30px">
        <CustomButton label="Sign up" onClick={handleSignup} />
      </Box>
    </form>
  )
}

const Signup = () => {
  return (
    <PageLayout>
      <Box maxW="40%">
        <Image src="/Signupillustartion.png" alt="Signup Illustration" />
      </Box>
      <FormCard>
        <SignupForm />
      </FormCard>
    </PageLayout>
  )
}

export default Signup
