// src/pages/UndanganPage.tsx
import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  
  const UndanganPage = () => {
    const [namaTamu, setNamaTamu] = useState("");
  
    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const kpd = params.get("kpd");
      if (kpd) {
        setNamaTamu(decodeURIComponent(kpd));
      }
    }, []);
  
    return (
      <Box bg="gray.50" minH="100vh" py={10}>
        <Container maxW="lg" bg="white" p={6} borderRadius="md" boxShadow="md">
          <VStack spacing={4} textAlign="center">
            <Heading size="lg">Undangan Pernikahan</Heading>
            <Text fontSize="md">
              Kepada Yth. Bapak/Ibu/Saudara/i {namaTamu || "Tamu Undangan"}
            </Text>
            <Text fontSize="md">
              Dengan hormat, kami mengundang Anda untuk menghadiri acara
              pernikahan kami:
            </Text>
            <Text fontWeight="bold">Arga & Nisa</Text>
            <Text>Tanggal: 12 Desember 2025</Text>
            <Text>Waktu: 10.00 WIB</Text>
            <Text>Tempat: Gedung Serbaguna, Jakarta</Text>
            <Image
              src="https://via.placeholder.com/400x200"
              alt="Foto Mempelai"
              borderRadius="md"
            />
            <Button colorScheme="teal" mt={4}>
              Konfirmasi Kehadiran
            </Button>
          </VStack>
        </Container>
      </Box>
    );
  };
  
  export default UndanganPage;
  