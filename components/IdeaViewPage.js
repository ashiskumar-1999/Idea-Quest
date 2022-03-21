import React from "react";
import {
  Flex,
  Box,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import PageLayout from "./PageLayout";
import CustomButton from "./CustomButton";

const IdeaViewPage = ({
  title,
  description,
  solvedProblem,
  upvotes,
  downvotes,
}) => {
  return (
    <PageLayout
      isDirection
      w="100%"
      px="10px"
      py="30px"
      border="1px"
      borderColor="#D6E4DF"
      borderRadius="10px"
      /* bg="#D6E4DF" */
      /* 
      bgGradient="linear(to-t, #ffffff, #D6E4DF)" */
    >
      <HStack spacing={900} p="10px">
        <Box>
          <Heading fontSize={["2xl", "2xl", "3xl", "3xl", "4xl"]}>
            Title
          </Heading>
        </Box>
        <HStack spacing={6}>
          <CustomButton label="upvotes" />
          <CustomButton bg="#FD4242" label="downvotes" />
        </HStack>
      </HStack>
      <Divider orientation="horizontal" />
      <Box w="100%" textAlign="left" py="20px">
        <Heading fontSize={["lg", "xl", "2xl", "2xl", "3xl"]}>
          Description
        </Heading>
        <Text textAlign="left">{description}</Text>
      </Box>
      <Box w="100%" textAlign="left" py="20px">
        <Heading fontSize={["lg", "lg", "xl", "xl", "2xl"]} textAlign="left">
          Problems that you are trying to solve?
        </Heading>
        <Text textAlign="left">{solvedProblem}</Text>
      </Box>
    </PageLayout>
  );
};

export default IdeaViewPage;