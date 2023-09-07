import {
  Button,
  Flex,
  Box,
  Text,
  VStack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Pricing = () => {
  return (
    <Box
      maxW="994px"
      margin="auto"
      marginTop="-170px"
      borderRadius={15}
      overflow="hidden"
      boxShadow="dark-lg"
      rounded="md"
      bg="white"
    >
      <Flex dir="center">
        <Box bg="#F0EAFB" p="60px">
          <Text fontSize="24px" fontWeight="800">
            Premium PRO
          </Text>
          <Heading as="h3" fontSize="60px" mt="16px">
            $329
          </Heading>
          <Text color="#171923" fontSize="18px" fontWeight="500px" mt="8px">
            Pilled just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="8px">
            Get Started
          </Button>
        </Box>
        <Box alignSelf="center" pl="40px" pb="100px " bgColor="white">
          <Text mt="50px" pb="20px" fontSize="18px" fontWeight="500px">
            Access these features when you get this pricing package for your
            business
          </Text>
          <VStack alignItems="flex-start">
            <Text
              fontSize="18px"
              fontWeight="500px"
              alignSelf="flex-start"
              textAlign="left"
            >
              <CheckCircleIcon color="#6B46C1" alignSelf="flex-start" mr={3} />{" "}
              International calling and messaging API
            </Text>
            <Text
              fontSize="18px"
              fontWeight="500px"
              alignSelf="flex-start"
              textAlign="left"
            >
              <CheckCircleIcon color="#6B46C1" alignSelf="flex-start" mr={3} />{" "}
              Additional phone numbers
            </Text>
            <Text
              fontSize="18px"
              fontWeight="500px"
              alignSelf="flex-start"
              textAlign="left"
            >
              <CheckCircleIcon color="#6B46C1" alignSelf="flex-start" mr={3} />{" "}
              Automated messages via Zapier
            </Text>
            <Text
              fontSize="18px"
              fontWeight="500px"
              alignSelf="flex-start"
              textAlign="left"
              mr={3}
            >
              <CheckCircleIcon color="#6B46C1" alignSelf="flex-start" mr={3} />{" "}
              24/7 support and consulting
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
