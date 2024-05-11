import { Box, Container, Flex, Heading, IconButton, Image, Input, InputGroup, InputRightElement, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Header */}
        <Box bg="teal.500" p={4} color="white">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              Artisan Alley Nashville
            </Heading>
            <InputGroup w="300px">
              <Input placeholder="Search artworks, artists..." />
              <InputRightElement children={<IconButton aria-label="Search" icon={<FaSearch />} />} />
            </InputGroup>
            <Flex>
              <IconButton aria-label="Favorites" icon={<FaHeart />} m={1} />
              <IconButton aria-label="Cart" icon={<FaShoppingCart />} m={1} />
            </Flex>
          </Flex>
        </Box>

        {/* Main Content */}
        <Flex flex="1" p={4} direction="column" overflowY="auto">
          <Heading as="h2" size="md" mb={4}>
            Featured Artists
          </Heading>
          <SimpleGrid columns={3} spacing={4}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Box key={index} boxShadow="md" p={4} rounded="md">
                <Image src={`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBwb3J0cmFpdCUyMCUyNCU3QmluZGV4JTIwJTJCJTIwMSU3RHxlbnwwfHx8fDE3MTUzOTc1OTh8MA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Artist ${index + 1}`} />
                <Text mt={2} fontSize="lg" fontWeight="bold">
                  Artist {index + 1}
                </Text>
                <Text fontSize="sm">Contemporary Art</Text>
              </Box>
            ))}
          </SimpleGrid>
          <Heading as="h2" size="md" mt={10} mb={4}>
            Browse Artworks
          </Heading>
          <SimpleGrid columns={4} spacing={4}>
            {Array.from({ length: 8 }).map((_, index) => (
              <VStack key={index} boxShadow="md" p={4} rounded="md">
                <Image src={`https://images.unsplash.com/photo-1621379282411-62964e75a502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnR3b3JrJTIwJTI0JTdCaW5kZXglMjAlMkIlMjAxJTdEfGVufDB8fHx8MTcxNTM5NzU5OHww&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Artwork ${index + 1}`} />
                <Text mt={2} fontSize="lg" fontWeight="bold">
                  Artwork {index + 1}
                </Text>
                <Text fontSize="sm">$200</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Flex>

        {/* Footer */}
        <Box bg="teal.600" color="white" p={4}>
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Artisan Alley Nashville</Text>
            <Text>Connect with us!</Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
