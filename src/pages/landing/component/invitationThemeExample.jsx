
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
  
  
export default function InvitationThemeExampleComponent() {

  return (
    <Box bg="gray.50" py={20}>
              <Container maxW="7xl">
                <Heading textAlign="center" mb={6}>Pilih Template Undangan Sesuai Kategori</Heading>
    
                {/* Kategori Carousel */}
                <Flex
                  wrap="wrap"
                  justify="center"
                  gap={6}
                  mb={10}
                  align="center"
                >
                  {/* Card Kategori */}
                  {['Pernikahan', 'Ulang Tahun', 'Khitanan', 'Acara Lainnya'].map((kategori, idx) => (
                    <Box
                      key={idx}
                      borderWidth="1px"
                      borderRadius="lg"
                      bg="white"
                      shadow="md"
                      width="250px"
                      p={4}
                      cursor="pointer"
                      _hover={{ bg: 'teal.50', transform: 'scale(1.05)', transition: '0.3s' }}
                      onClick={() => alert(`Kategori Terpilih: ${kategori}`)} // Aksi saat memilih kategori
                    >
                      <Heading size="md" textAlign="center">{kategori}</Heading>
                    </Box>
                  ))}
                </Flex>
    
                {/* Grid Template Undangan */}
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
                  {[...Array(12)].map((_, idx) => (
                    <Box
                      key={idx}
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      bg="white"
                      shadow="md"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      mx={2} my={2}
                    >
                      <Image
                        src={KondanginLogo}
                        alt={`Template ${idx + 1}`}
                        objectFit="cover"
                        w="100%"
                        h="200px"
                      />
                      <Box p={4} textAlign="center">
                        <Text color="gray.600" fontSize="sm" mb={1}>Rp {10000 + idx * 500}</Text>
                        <Text fontWeight="semibold" fontSize="lg">Template {idx + 1}</Text>
                        <Text fontSize="sm" color="gray.500" mt={1}>⭐ 4.{idx % 5 + 1} (123 testimoni)</Text>
                      </Box>
                      <Flex justify="center" gap={4} p={4} pt={0}>
                        <Button colorScheme="teal" variant="outline" size="sm">Preview</Button>
                        <Button colorScheme="teal" size="sm">Gunakan Tema</Button>
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
    
              </Container>
            </Box>
  );
}
  