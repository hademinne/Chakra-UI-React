import { Box, Flex, Text } from "@chakra-ui/react";
import { BiDollarCircle, BiSolidPurchaseTag } from "react-icons/bi";
import { FiRotateCcw } from "react-icons/fi";

const Features = () => {
  const iconStyles = {
    color: "#6B46C1", // Set the icon color to purple
    fontSize: "32px", // Set the icon size to 32 pixels
    marginRight: "10px", // Add some margin to separate icon and text
  };

  return (
    <Box ml="350px" mt="60px">
      <Flex alignItems="center" w="900px">
        <Box display="flex" alignItems="center" mr="2">
          <BiDollarCircle style={iconStyles} />
          <Text as="b" ml="2">
            days money back guarantee
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mr="2">
          <BiSolidPurchaseTag style={iconStyles} />
          <Text as="b" ml="2">
            No setup fees 100% hassle-free
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <FiRotateCcw style={iconStyles} />
          <Text as="b" ml="2">
            No monthly subscription pay once and for all
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Features;
