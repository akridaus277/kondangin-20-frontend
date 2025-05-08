
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  Select,
  HStack
} from '@chakra-ui/react';

import KondanginLogo from '@/assets/kondangin-logo.webp';
import { Link } from 'react-router-dom';
  
  
export default function FeaturedFeature() {

  return (
    <Box bg="gray.50" py={20}>
              <Container maxW="7xl">
                <VStack spacing={12} align="stretch">
                  {[...Array(3)].map((_, idx) => {
                    const isImageLeft = idx % 2 === 0;
                    return (
                      <Flex
                        key={idx}
                        direction={{ base: 'column', md: 'row' }}
                        align="center"
                        justify="space-between"
                        gap={10}
                        flexDirection={isImageLeft ? { base: 'column', md: 'row' } : { base: 'column', md: 'row-reverse' }}
                      >
                        {/* Gambar Fitur */}
                        <Box flex="1">
                          <Image
                            src={KondanginLogo}
                            alt={`Fitur ${idx + 1}`}
                            borderRadius="lg"
                            boxShadow="md"
                            w="full"
                            maxH="250px"
                            objectFit="cover"
                          />
                        </Box>
    
                        {/* Text Fitur */}
                        <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
                          <Heading size="lg" mb={4}>
                            Judul Fitur {idx + 1}
                          </Heading>
                          <Text fontSize="lg" color="gray.600">
                            Ini adalah deskripsi fitur ke-{idx + 1}. Jelaskan bagaimana fitur ini membantu pengguna
                            dan mengapa fitur ini penting.
                          </Text>
                        </Box>
                      </Flex>
                    );
                  })}
                </VStack>
              </Container>
            </Box>
  );
}
  