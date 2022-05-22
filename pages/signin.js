import React, { useState, useEffect } from "react"
import axios from "axios"
import { Box, FormControl, FormLabel, Input, Image } from "@chakra-ui/react"
import CustomButton from "../components/CustomButton"
import PageLayout from "../components/PageLayout"
import FormCard from "../components/FormCard"
import { useRouter } from "next/router"


const SigninForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const [token, setToken] = useState('')

  const handleLogin = async () => {

    let response = await axios.post(
      "https://ideas-iq.herokuapp.com/api/auth/login",
      {
        email,
        password,
      }
    )
    console.log(response.data)
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "token",
        JSON.stringify(response.data.success.data.token)
      )
      localStorage.setItem(
        "userId",
        response.data.success.data.loggedInUserId
      )
      const token = localStorage.getItem('token')
      setToken(token)
    }
    
  }
  if(token){
    router.push('/dashboard')
  }
    
    
  

  return (
    <form>
      <FormControl onSubmit={handleLogin} isRequired>
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
        <Box mt="30px">
          <CustomButton label="Sign In" onClick={() => {
            handleLogin()
            }}  />
        </Box>
      </FormControl>
    </form>
  )
}

function Signin() {
  return (
    <PageLayout>
      <Box maxW="40%">
        <Image src="/Signupillustartion.png" alt="Signin Illustration" />
      </Box>
      <FormCard>
        <SigninForm />
      </FormCard>
    </PageLayout>
  )
}

export default Signin
