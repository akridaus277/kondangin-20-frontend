import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import useRegister from "@/hooks/auth/useRegister"

const RegisterPage = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
    loading,
  } = useRegister()

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      <Box flex="1" bg="gray.50" py={20}>
        <Container maxW="md" bg="white" p={10} boxShadow="lg" borderRadius="md">
          <Stack spacing={6}>
            <Heading size="lg" textAlign="center">Daftar Akun Baru</Heading>

            <FormControl id="name" isRequired>
              <FormLabel>Nama Lengkap</FormLabel>
              <Input
                type="text"
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="email@kondangin.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              colorScheme="teal"
              size="md"
              w="full"
              isLoading={loading}
              onClick={handleRegister}
            >
              Daftar
            </Button>

            <Text fontSize="sm" textAlign="center">
              Sudah punya akun?{" "}
              <Link color="teal.500" href="/login">
                Masuk di sini
              </Link>
            </Text>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

export default RegisterPage
