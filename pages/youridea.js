import React, { useState, useEffect} from 'react'
import { Box,SimpleGrid,Heading } from '@chakra-ui/react'
import {useRouter} from "next/router"
import axios from 'axios'
import PageLayout from '../components/PageLayout'
import Navbar from '../components/Navbar'
import IdeaviewButton from '../components/IdeaviewButton'

const YourIdea = () => {
    const [data, setData] = useState([])
    const [userId, setUserId] = useState()
    const router = useRouter()
    useEffect(() => {
    setUserId(localStorage.getItem("userId"))
    console.log(userId)
    const fetchData = () => {
        
       axios.get(
        `https://ideas-iq.herokuapp.com/api/ideas/my/${userId}`,
      )
      .then(function (response) {
        console.log("My idea:",response.data.success.data)
         setData(response.data.success.data)
      })
      .catch((err) => {console.error(err)})
  
    }
    fetchData()
    },[userId])
  return (
    <PageLayout isDirection>
      <Navbar />
      <SimpleGrid columns={[1,1,2,2,3]} spacing={10}>
      {data.length === 0 ? <Box w="100vw" textAlign="center" m="15px"><Heading fontSize="3xl"> You have not created any ideas yet.</Heading></Box> : 
       data.map((d) => (
          <IdeaviewButton key={d._id} title={d.title} description={d.desc}  upvotes={d.upvotes}
          downvotes={d.downvotes} onClick={() => {router.push(d._id)}}/>
      ))}
      </SimpleGrid>
    </PageLayout>
    )
}

export default YourIdea