import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from "next/router"
import { Spinner } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import PageLayout from '../components/PageLayout'
import IdeaViewPage from '../components/IdeaViewPage'
import Navbar from '../components/Navbar'

const Project = () => {
  const toast = useToast()
  const router = useRouter()
  const {project} = router.query;
  const [token,setToken] = useState()
  const [userId, setUserId] = useState()
  const [data,setData] = useState()

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
        console.log(response.data.success.data.ideator._id);
        setData(response.data.success.data)
      })
  
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
        position: 'bottom-right',
        status: 'success',
        duration: 7000,
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
      duration: 7000,
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