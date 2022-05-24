import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from "next/router"
import {Spinner, useToast } from '@chakra-ui/react'
import PageLayout from '../components/PageLayout'
import IdeaViewPage from '../components/IdeaViewPage'
import Navbar from '../components/Navbar'

const Project = () => {
  const router = useRouter()
  const {project} = router.query;
  const [token,setToken] = useState()
  const [userId, setUserId] = useState()
  const [data,setData] = useState(null)
  const toast = useToast()
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")))
    setUserId(localStorage.getItem("userId"))
    const fetchData = () => {
      let config = {
        headers: {
          Authorization: "bearer" + token,
        },
      }
       axios.get(
        `https://ideas-iq.herokuapp.com/api/ideas/${project}`,
        config
      )
      .then(function (response) {
        setData(response.data.success.data)
      })
      .catch((err) => {console.error(err)})
  
    }
    fetchData()
  }, [ project, token])

  const handleUpvote = async () => {
    let data = {
        userId,
        ideaId: project
    }
    const upvoteData = await axios.post(
      "https://ideas-iq.herokuapp.com/api/ideas/upvote",
      data
    )
    console.log(upvoteData)
  }

  const handleDownvote = async () => {
    let data = {
        userId,
        ideaId: project
    }
    const downvoteData = await axios.post(
      "https://ideas-iq.herokuapp.com/api/ideas/downvote",
      data
    )
    console.log(downvoteData)
  }

const handleDelete = () => {
  if(data.ideator._id == userId) {
    axios.delete(`https://ideas-iq.herokuapp.com/api/ideas/${project}`)
    .then((response) => 
    {
      console.log(response.data)
      toast({
        title: 'Deleted Successfully',
        
      description: "Your idea has been successfully deleted",
        position: 'bottom-right',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    })
    .then(() => {router.push('/dashboard')}) 
  }
  else{
    toast({
      title: 'Error while deleting the idea.',
      description: "You are not autherized to delete this Idea",
      position: 'bottom-right',
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
  }
}
  return (
    <PageLayout isDirection>
      <Navbar/>
      { !data ? 
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='#15DB95'
        size='xl'
      /> 
      : 
      <IdeaViewPage
        key={data._id}
        title={data.title}
        desc={data.desc}
        solvedProblem={data.solvedProblem}
        Ideator={data.Ideator}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
        onDelete={handleDelete}
      />
      } 
    </PageLayout>
  )
}

export default Project