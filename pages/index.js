import React,{useState,useEffect} from "react"
import PageLayout from "../components/PageLayout"
import IdeaviewButton from "../components/IdeaviewButton"
import Navbar from "../components/Navbar"
import { useRouter } from "next/router"
import HeroSection from "../components/HeroSection"

export default function Home() {
  const router = useRouter()
  const [token,setToken] = useState()

  useEffect(() => {
    let token = localStorage.getItem('token')
    setToken(token)
    
  },[])
  return (
    <>
      <PageLayout isDirection>{/* 
        {token? router.push('/dashboard'): <Navbar />} */}
        <HeroSection/>
      </PageLayout>
    </>
  )
}
