import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <div>
      <Box
        as="section"
        color="#F7FAFC"
        bg="#6B46C1"
        pt="90px"
        pb="198px"
        px="400px"
      >
        <Heading fontWeight="800px" fontSize="48px">
          Simple pricing for your business
        </Heading>
        <Text fontWeight="400" fontSize="24px" pt="16px" pl="60px">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </div>
  );
};

export default Header;
