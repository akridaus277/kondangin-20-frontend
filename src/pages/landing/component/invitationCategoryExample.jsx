
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
import Slider from "react-slick";
import KondanginLogo from '@/assets/kondangin-logo.webp';
import { Link } from 'react-router-dom';
  
  
export default function InvitationCategoryExampleComponent() {

  return (
    <Box bg="white" py={20}>
              <Container maxW="7xl">
                <VStack spacing={6} mb={10}>
                  <Heading textAlign="center">Sudah {`>`}10.000 Undangan Digital Dibuat</Heading>
                  <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
                    Undangan digital buatan pengguna di Kondangin.org dari berbagai kategori dan desain menarik.
                  </Text>
                </VStack>
    
                <Box overflow="hidden">
                  <Slider
                    dots={false}
                    infinite={true}
                    speed={500}
                    slidesToShow={4}
                    slidesToScroll={1}
                    arrows={false}
                    swipeToSlide={true}
                    responsive={[
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                        }
                      },
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 2,
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1,
                        }
                      }
                    ]}
                  >
                    {[...Array(6)].map((_, idx) => (
                      <Box key={idx} px={3}>
                        <Box
                          borderWidth="1px"
                          borderRadius="lg"
                          overflow="hidden"
                          bg="gray.50"
                          w="full"
                          maxW="300px"
                          mx="auto"
                          shadow="md"
                        >
                          <Image
                            src={KondanginLogo}
                            alt={`Undangan ${idx + 1}`}
                            objectFit="cover"
                            w="100%"
                            h="200px"
                          />
                          <Box p={4}>
                            <Text fontWeight="bold" textAlign="center">Undangan {idx + 1}</Text>
                            <VStack justify="center" gap={1} p={4} pt={3} >
                              <Button colorScheme="teal" variant="outline" size="sm" w="100%">Preview</Button>
                              <Button colorScheme="teal" size="sm" w="100%">Gunakan Tema</Button>
                            </VStack>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Slider>
    
                </Box>
              </Container>
            </Box>
  );
}
  