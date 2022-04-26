import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from "next/router"
import PageLayout from '../components/PageLayout'
import IdeaViewPage from '../components/IdeaViewPage'
import Navbar from '../components/Navbar'

const Project = () => {
  const [data,setData] = useState(null)
  const [token,setToken] = useState()
  const [userId, setUserId] = useState()
  const router = useRouter()
  const {project} = router.query;
 

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")))
    setUserId(localStorage.getItem("userId"))
    console.log(token)
    const fetchData = async () => {
      let config = {
        headers: {
          Authorization: "bearer" + token,
        },
      }
      const result = await axios.get(
        `https://ideas-iq.herokuapp.com/api/ideas/${project}`,
        config
      )
      
  setData(result.data.success.data)
    }
    fetchData()
  }, [project, token])

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

  return (
    <PageLayout isDirection>
      <Navbar/>
      { !data ? "Data is loading" : <IdeaViewPage key={data._id} title={data.title} desc={data.desc} solvedProblem={data.solvedProblem} onUpvote={handleUpvote} onDownvote={handleDownvote}/>
      }
    </PageLayout>
  )
}

export default Project