
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
  import { FaCheckCircle } from "react-icons/fa";


export default function ResellerProgramSection() {
    return (
      <Box bg="white" py={20}>
        <Container maxW="7xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={10}>
            {/* Gambar / Ilustrasi */}
            <Box flex="1" display="flex" justifyContent="center">
              <Image
                src={KondanginLogo}
                alt="Program Reseller"
                borderRadius="lg"
                boxShadow="lg"
                w={{ base: "80%", md: "100%" }}
                maxW="350px"
                objectFit="contain"
              />
            </Box>
  
            {/* Konten Teks */}
            <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
              <Heading size="xl" mb={4}>
                Bergabunglah dalam Program Reseller Kondangin
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={6}>
                Dapatkan penghasilan tambahan dengan memasarkan produk undangan digital Kondangin. Nikmati komisi menarik, pelatihan gratis, dan dukungan penuh dari tim kami.
              </Text>
  
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
                <HStack align="start">
                  <FaCheckCircle />
                  <Text>Komisi hingga 30% per penjualan</Text>
                </HStack>
                <HStack align="start">
                  <FaCheckCircle />
                  <Text>Akses dashboard reseller eksklusif</Text>
                </HStack>
                <HStack align="start">
                  <FaCheckCircle />
                  <Text>Materi promosi disediakan</Text>
                </HStack>
                <HStack align="start">
                  <FaCheckCircle />
                  <Text>Tanpa biaya pendaftaran</Text>
                </HStack>
              </SimpleGrid>
  
              <Button as={Link} to="/reseller" colorScheme="teal" size="lg">
                Daftar Sekarang
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    );
  }
  