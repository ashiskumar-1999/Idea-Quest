import React, { useState, useEffect } from "react"
import axios from "axios"
import {useRouter} from "next/router"
import { Link } from "next/link"
import PageLayout from "../components/PageLayout"
import Navbar from "../components/Navbar"
import IdeaviewButton from "../components/IdeaviewButton"


const Dashboard = () => {
  const [data, setData] = useState()
  const router = useRouter()

    useEffect(() => {
    let token =  JSON.parse(localStorage.getItem("token"))
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
  }, [data])

  

  return (
    <PageLayout isDirection>
      <Navbar />
      {data?.map((d) => (
        <IdeaviewButton
          key={d._id}
          title={d.title}
          description={d.desc}
          upvotes={d.upvotes}
          downvotes={d.downvotes}
          onClick={() => {router.push(d._id)}}
        />
      ))}
    </PageLayout>
  )
}

export default Dashboard
