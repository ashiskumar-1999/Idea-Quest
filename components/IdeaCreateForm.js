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
} from "@chakra-ui/react"
import CustomButton from "./CustomButton"
import axios from "axios"

const IdeaCreateForm = ({ createIdeaIsOpen, createIdeaOnClose }) => {
  const initialRef = useRef()
  const finalRef = useRef()
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [solvedProblem, setSolvedProblem] = useState()
  const [ideator, setIdeator] = useState()

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    
    setIdeator(userId);
    console.log('ideator:', ideator);
  }, [ideator]);

  const data = JSON.stringify({
    title: title,
    desc: desc,
    solvedProblem: solvedProblem,
    ideator: ideator,
  });

  const HandleCreate = async () => {
    let config = {
      headers: {
        'Content-Type': 'application/json', // 
        'Content-Length': 100,
      },
      // data: {
      //   title,
      //   desc,
      //   solvedProblem,
      //   ideator,
      // },
    }
    let response = await axios.post(
      "https://ideas-iq.herokuapp.com/api/ideas",
      data,
      config
    ) .then((res) => res.json())
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
          <ModalHeader>Create your account</ModalHeader>
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
            <CustomButton label="Post Your Idea" onClick={() =>{
            HandleCreate
            createIdeaOnClose()
          }} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default IdeaCreateForm
