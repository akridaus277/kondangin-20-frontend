
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
  
  
export default function HeroComponent() {

  return (
    <Container maxW="7xl">
              <Flex
                direction={{ base: 'column-reverse', md: 'row' }}
                align="center" // sejajarkan tengah secara vertikal
                justify="space-between"
                gap={{ base: 10, md: 16 }}
                minH="500px"
              >
                {/* Text Section */}
                <Stack
                  spacing={6}
                  flex={1}
                  maxW={{ base: '100%', md: 'lg' }}
                  justify="center"
                  h="100%"
                  py={{ base: 4, md: 0 }}
                >
                  <Heading
                    as="h1"
                    fontSize={{ base: '2xl', md: '5xl' }}
                    lineHeight="short"
                    fontWeight="bold"
                  >
                    Buat Undangan Digitalmu <br />
                    <Text as="span" color="teal.500">Lebih Praktis & Elegan</Text>
                  </Heading>
                  <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.600">
                    Dengan Kondangin.org, kamu bisa membuat undangan digital pernikahan, ulang tahun, dan event lainnya hanya dalam hitungan menit.
                  </Text>
                  <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                    <Button
                      as={Link}
                      to="/register"
                      colorScheme="teal"
                      size="lg"
                      px={8}
                      py={6}
                    >
                      Daftar Gratis
                    </Button>
                    <Button
                      as={Link}
                      to="/login"
                      variant="outline"
                      colorScheme="teal"
                      size="lg"
                      px={8}
                      py={6}
                    >
                      Login
                    </Button>
                  </Stack>
                </Stack>
    
                {/* Image Section */}
                <Box flex={1} display="flex" justifyContent="center" alignItems="center" h="100%">
                  <Image
                    src="https://illustrations.popsy.co/sky/shopping-cart.svg"
                    alt="Ilustrasi undangan digital"
                    maxW={{ base: '60%', md: '80%' }} // ukuran lebih kecil dari sebelumnya
                    maxH="600px"
                    objectFit="contain"
                  />
                </Box>
              </Flex>
            </Container>
  );
}
  