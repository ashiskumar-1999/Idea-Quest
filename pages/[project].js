import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from "next/router"
import PageLayout from '../components/PageLayout'
import IdeaViewPage from '../components/IdeaViewPage'
import Navbar from '../components/Navbar'

const Project = () => {
  const [data,setData] = useState([])
  const router = useRouter()
  const {project} = router.query;
 

  useEffect(() => {
    let token =  JSON.parse(localStorage.getItem("token"))
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
  }, [project])
  return (
    <PageLayout isDirection>
      <Navbar/>
        <IdeaViewPage key={data._id} title={data.title} desc={data.desc} solvedProblem={data.solvedProblem}/>
    </PageLayout>
  )
}

export default Project