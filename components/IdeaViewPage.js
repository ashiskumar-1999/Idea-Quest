import React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import {MdDelete, MdModeEdit} from 'react-icons/md'
import CustomButton from "./CustomButton";

const IdeaViewPage = ({
  title,
  desc,
  solvedProblem,
  onUpvote, 
  onEdit,
  onDownvote,onDelete
}) => {
  return (
    <Box
      w="100%"
      h={["300px","300px","320px","300px","100%"]}
      p={["20px","20px","30px","30px","30px"]}
      mt={["20px","20px","30px","30px","30px"]}
      
      alignItems="baseline"
      borderRadius="10px"
      borderColor="#F6EFEF"
      boxShadow="md"
      _focus={{ borderColor: "none" }}
      _active={{ bg: "none" }}
    >
      <Flex direction="row" textAlign="left" w={"100%"} justifyContent="space-between" mb="10px">
        <Box>
          <Heading fontSize={["2xl", "2xl", "3xl", "3xl", "4xl"]}>
            {title}
          </Heading>
        </Box>
        <HStack spacing={4}>
          <CustomButton label="Upvote" onClick={onUpvote} />
          <CustomButton bg="#FD4242" label="Downvote" onClick={onDownvote}/>
          <IconButton
            variant="ghost"
            size="lg"
            colorScheme="red"
            aria-label="Send email"
            icon={<MdDelete />}
            onClick={onDelete}
          />
           <IconButton
            variant="ghost"
            size="lg"
            colorScheme="#15DB95"
            aria-label="Send email"
            icon={<MdModeEdit />}
            onClick={onEdit}
          />
        </HStack>
      </Flex>
      <Divider orientation="horizontal" />
      <Box w="100%" textAlign="left" py="20px">
        <Heading fontSize={["lg", "xl", "2xl", "3xl", "3xl"]}>
          Description
        </Heading>
        <Text textAlign="left" fontSize={["lg", "xl", "xl", "xl", "xl"]}>{desc}</Text>
      </Box>
      {solvedProblem? 
      <Box w="100%" textAlign="left" py="20px">
        <Heading fontSize={["lg", "xl", "2xl", "3xl", "3xl"]} textAlign="left">
          Problems that you are trying to solve?
        </Heading>
        <Text textAlign="left" fontSize={["lg", "xl", "xl", "xl", "xl"]}>{solvedProblem}</Text> 
      </Box>
      : null}
    </Box>
  );
};

export default IdeaViewPage;
