import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from "next/router"
import {Spinner, useToast,useDisclosure } from '@chakra-ui/react'
import PageLayout from '../components/PageLayout'
import IdeaViewPage from '../components/IdeaViewPage'
import IdeaEditForm from "../components/IdeaEditForm";
import Navbar from '../components/Navbar'

const Project = () => {
  const router = useRouter()
  const {project} = router.query;
  const [token,setToken] = useState()
  const [userId, setUserId] = useState()
  const [data,setData] = useState(null)
  const toast = useToast()
  const {
    isOpen: editIdeaIsOpen,
    onOpen: editIdeaOnOpen,
    onClose: editIdeaOnClose,
} = useDisclosure()
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

  const handleUpvote = () => {
    let config = {
      headers: {
        Authorization: "bearer" + token,
      },
    }
    let data = {
        userId,
        ideaId: project
    }
     axios.post(
      "https://ideas-iq.herokuapp.com/api/ideas/upvote",
      data,
      config
      
    )
    .then((response) => {
      toast({
        title: 'Upvoted Successfully',
        position: 'bottom-right',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    })
    .catch((err) => {console.error(err)})
  }

  const handleDownvote = () => {
    let config = {
      headers: {
        Authorization: "bearer" + token,
      },
    }
    let data = {
        userId,
        ideaId: project
    }
     axios.post(
      "https://ideas-iq.herokuapp.com/api/ideas/downvote",
      data, 
      config
    )
    .then(function (response) {
      toast({
        title: 'Downvoted Successfully',
        position: 'bottom-right',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    })
    .catch((err) => {console.error(err)})
  }

const handleDelete = () => {
  if(data.ideator._id == userId) {
    let config = {
      headers: {
        Authorization: "bearer" + token,
      },
    }
    axios.delete(`https://ideas-iq.herokuapp.com/api/ideas/${project}`,config)
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
    .catch((err) => {console.error(err)})
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
        onEdit={editIdeaOnOpen}
        onDownvote={handleDownvote}
        onDelete={handleDelete}
      />
      } 
       <IdeaEditForm 
          editIdeaIsOpen={editIdeaIsOpen}
          editIdeaOnClose={editIdeaOnClose}
          />
    </PageLayout>
  )
}

export default Project