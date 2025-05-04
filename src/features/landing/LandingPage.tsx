import {
    Box,
    Button,
    Container,
    Heading,
    Stack,
    Text,
  } from "@chakra-ui/react"
  import Navbar from "@/components/layout/Navbar"
  import Footer from "@/components/layout/Footer"
  
  const LandingPage = () => {
    return (
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box flex="1" bg="gray.50" py={20}>
          <Container maxW="6xl" textAlign="center">
            <Heading as="h1" size="2xl" color="brand.500">
              Buat Undangan Digital dengan Mudah
            </Heading>
            <Text fontSize="xl" mt={4} color="gray.600">
              Elegan, cepat, dan praktis untuk semua jenis acara.
            </Text>
            <Stack direction="row" justify="center" mt={8}>
              <Button colorScheme="teal" size="lg">
                Mulai Sekarang
              </Button>
              <Button variant="outline" size="lg">
                Lihat Contoh
              </Button>
            </Stack>
          </Container>
        </Box>
        <Footer/>
      </Box>
    )
  }
  
  export default LandingPage
  