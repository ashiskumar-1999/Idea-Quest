import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from "next/router"
import PageLayout from '../components/PageLayout'
import IdeaViewPage from '../components/IdeaViewPage'

const ProjectId = () => {
  const [data,setData] = useState()
  const router = useRouter()
  const {project} = router.query;
  console.log(router.query)

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
      console.log(result.data.success.data)
    }
    fetchData()
  }, [project]) 
  return (
    <PageLayout>
      {data?.map((d) => {
        <IdeaViewPage key={d._id} title={d.title} desc={d.desc} solvedProblem={d.solvedProblem}/>
      })}
    </PageLayout>
  )
}

export default ProjectId