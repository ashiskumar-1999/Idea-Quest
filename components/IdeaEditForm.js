import React, { useState,useRef, useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"
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
import { handleErrorToasts } from "../utils/error.utils"
import CustomButton from "./CustomButton"


const IdeaEditForm = ({ editIdeaIsOpen, editIdeaOnClose }) => {
  const initialRef = useRef()
  const finalRef = useRef()
  const toast = useToast()
  const router = useRouter()
  const {project} = router.query;
  const [token, setToken] = useState()
  const [data,setData] = useState(null)
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [solvedProblem, setSolvedProblem] = useState()

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")))
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
        setTitle(response.data.success.data.title)
        setDesc(response.data.success.data.desc)
        setSolvedProblem(response.data.success.data.solvedProblem)
      })
      .catch((err) => {console.error(err)})
    }
    fetchData()
  }, [project, token])

  const handleEdit =() => {
      console.log('TOken',token)
    let config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }
    let data = {
        title: title,
        desc: desc,
        solvedProblem: solvedProblem,
    }
     axios.put(
        `https://ideas-iq.herokuapp.com/api/ideas/${project}`,
      data,
      config
    ) .then((response) =>
response.data.success.statusCode &&
        toast({
          title: 'Updated Successfully',
          position: 'bottom-right',
          status: 'success',
          duration: 2000,
          isClosable: true,
        }))
      .then(() => {
      editIdeaOnClose()
      router.push('/dashboard')})
      .catch((axiosError) =>{
        handleErrorToasts(axiosError.response.data.error, toast)
    }
    )
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={editIdeaIsOpen}
        onClose={editIdeaOnClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your Idea</ModalHeader>
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
            <Button onClick={editIdeaOnClose}>Cancel</Button>
            <CustomButton label="Update" onClick={handleEdit}/>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default IdeaEditForm