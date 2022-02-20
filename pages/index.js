import React from "react"
import FormCard from "../components/FormCard"
import PageLayout from "../components/PageLayout"
import { Text } from "@chakra-ui/react"
import IdeaviewCard from "../components/IdeaviewCard"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <PageLayout isDirection>
        <Navbar />
        <IdeaviewCard
          heading="Scrumbble"
          description="Scrumbble is a platform where a user can create profile and connect with tech industry people,write blogs."
        />
      </PageLayout>
    </>
  )
}
