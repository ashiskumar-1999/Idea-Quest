import React, { useState } from "react"
import { Box, FormControl, FormLabel, Input, Image } from "@chakra-ui/react"
import Button from "../components/Button"
import PageLayout from "../components/PageLayout"
import FormCard from "../components/FormCard"

const SigninForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
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
      </FormControl>

      <Box mt="30px">
        <Button label="Sign up" onClick />
      </Box>
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
