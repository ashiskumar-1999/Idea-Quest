import React, { useState } from "react"
import { Box, FormControl, FormLabel, Input, Image } from "@chakra-ui/react"
import FormCard from "../components/FormCard"
import Button from "../components/Button"
import PageLayout from "../components/PageLayout"

const SignupForm = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
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
          Your Name
        </FormLabel>
        <Input
          id="name"
          type="text"
          bg="#ffffff"
          borderRadius="none"
          placeholder="Mike North"
          boxShadow="base"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        />
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
        />
      </FormControl>
      <Box mt="30px">
        <Button label="Sign up" onClick />
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
