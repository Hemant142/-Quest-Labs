import React from 'react';
import { Box, Flex, Spacer, Icon, Stack } from '@chakra-ui/react';
import { MdExpandMore as ChevronDownIcon } from 'react-icons/md';
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons'; // Import EmailIcon and ArrowForwardIcon
import { Button } from '@chakra-ui/react'; // Correct import for Button from Chakra UI

const Nav1 = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#00264d"
      color="white"
      position="fixed"  
      width="100%"     
    //   zIndex="1000"
    >
      <Box as="a" href="#" fontSize="2xl" fontWeight="bold">
      
        Logo
      </Box>

      <Spacer />

      <Box
        display={{ base: 'block', md: 'none' }}
        onClick={() => console.log('Toggle menu')}
        fontSize="2xl"
      >
        ☰
      </Box>

      <Box
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Box as="a" href="#" mr="4" fontSize="xl" fontWeight="bold">
          Products <Icon as={ChevronDownIcon} boxSize={6} />
        </Box>
        <Box as="a" href="#" mr="4" fontSize="xl" fontWeight="bold">
          Resources <Icon as={ChevronDownIcon} boxSize={6} />
        </Box>
        <Box as="a" href="#" mr="4" fontSize="xl" fontWeight="bold">
          Customer
        </Box>
        <Box as="a" href="#" fontSize="xl" fontWeight="bold">
          Pricing
        </Box>
        <Stack direction="row" spacing={10} marginLeft={'200px'}>
          <Button colorScheme="blue" variant="solid" borderRadius={"20px"}>
            Start free trial
          </Button>
          <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline">
            View demo
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Nav1;