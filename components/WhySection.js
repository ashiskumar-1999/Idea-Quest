import React from "react";
import { FLex, Text, Heading, Flex } from "@chakra-ui/react";

const WhySection = () => {
  return (
    <Flex
      my="50px"
      p="30px"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      bgGradient="linear(to-t, #ffffff, #D6E4DF)"
    >
      <Heading
        fontSize={["2xl", "3xl", "3xl", "5xl", "5xl"]}
        textAlign="center"
      >
        Why IdeaQuest?
      </Heading>
      <Text fontSize={["md", "lg", "lg", "xl", "xl"]}>
        Every Product needs a perfect user and demand to be built successfully.
        Evaluation of idea would be a tough for any developers or founders. You
        can use this platform as place where a network of some awesome people
        will validate your idea and from this you can understand where your
        product actually stands in.
      </Text>
    </Flex>
  );
};

export default WhySection;