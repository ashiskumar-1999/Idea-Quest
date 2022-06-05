import React, { useState,useRef, useEffect } from "react"
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast
} from "@chakra-ui/react"
import CustomButton from "./CustomButton"
import axios from "axios"

const IdeaCreateForm = ({ createIdeaIsOpen, createIdeaOnClose }) => {
  const initialRef = useRef()
  const finalRef = useRef()
  const toast = useToast()
  const [token,setToken] = useState()
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [solvedProblem, setSolvedProblem] = useState()
  const [ideator, setIdeator] = useState()

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")))
    setIdeator(localStorage.getItem("userId"))
  }, [])

  const HandleCreate = () => {
    let  data= {
      title,
      desc,
      solvedProblem,
      ideator,
     }
    let config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }
     axios.post(
      "https://ideas-iq.herokuapp.com/api/ideas",
      data,
      config
    ) 
    .then((response) =>
    response.data.success.statusCode ?
        toast({
          title: 'Created Successfully',
          description: 'You have successfully created the Idea',
          position: 'bottom-right',
          status: 'success',
          duration: 2000,
          isClosable: true,
        }):
      toast({
        title: 'Error while Creating the idea.',
        description: "You are not autherized to delete this Idea",
        position: 'bottom-right',
        status: 'error',
        duration: 2000,
        isClosable: true,
      }) )
      .then(() => {
        createIdeaOnClose()
        router.push('/dashboard')})
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={createIdeaIsOpen}
        onClose={createIdeaOnClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Idea</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Problems that you are trying to solve</FormLabel>
              <Textarea
                value={solvedProblem}
                onChange={(e) => setSolvedProblem(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button onClick={createIdeaOnClose}>Cancel</Button>
            <CustomButton label="Post Your Idea" onClick={HandleCreate} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default IdeaCreateForm
