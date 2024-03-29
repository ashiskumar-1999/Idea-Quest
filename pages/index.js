import React,{useState,useEffect} from "react"
import PageLayout from "../components/PageLayout"
import IdeaviewButton from "../components/IdeaviewButton"
import Navbar from "../components/Navbar"
import { useRouter } from "next/router"
import HeroSection from "../components/HeroSection"
import WhySection from "../components/WhySection"
import IdeaViewPage from "../components/IdeaViewPage"
import axios from "axios"
axios.defaults.baseURL = "https://ideas-iq.herokuapp.com/api"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    let token = localStorage.getItem('token')
    token && router.push('/dashboard')
  },[router])
  return (
    <>
      <PageLayout isDirection>
        <HeroSection/>
        <WhySection/>
      </PageLayout>
    </>
  )
}
