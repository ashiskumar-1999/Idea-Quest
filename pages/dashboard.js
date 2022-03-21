import React, { useState, useEffect } from "react"
import { VStack } from "@chakra-ui/react"
import axios from "axios"
import { useRouter } from "next/router"
import PageLayout from "../components/PageLayout"
import Navbar from "../components/Navbar"
import IdeaviewButton from "../components/IdeaviewButton"
import SlugFormatter from "../utils/SlugFormatter"

const Dashboard = () => {
  /* let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjFiMjIxZTdmOWI2N2Q1NTZiZjdiMjAiLCJpYXQiOjE2NDYxNDc4NTR9.kcbVQDLkA8cU2xGcP8Qk9q8yP2el9Y4444MW6OGxNiY"
  */
  const [data, setData] = useState()
  
  useEffect(() => {
    let token =  JSON.parse(localStorage.getItem("token"))
    /* console.log(token) */
    const fetchData = async () => {
      let config = {
        headers: {
          Authorization: "bearer" + token,
        },
      }
      const result = await axios.get(
        "https://ideas-iq.herokuapp.com/api/ideas",
        config
      )
      setData(result.data.success.data)
    }
    fetchData()
  }, [])
  
  const slug = SlugFormatter('Idea Quest App')
  console.log('slug:', slug);/* 
  console.log("data:", data) */
  return (
    <PageLayout isDirection>
      <Navbar />
      {/* 
      <VStack spacing={4}> */}
      {data?.map((d) => (
        <IdeaviewButton
          key={d._id}
          title={d.title}
          description={d.desc}
          upvotes={d.upvotes}
          downvotes={d.downvotes}
        />
      ))}
      {/* 
      </VStack> */}
    </PageLayout>
  )
}

export default Dashboard
