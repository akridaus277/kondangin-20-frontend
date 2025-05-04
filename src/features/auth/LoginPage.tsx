import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Heading, Text } from "@chakra-ui/react"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import useLogin from "@/hooks/auth/useLogin"

const LoginPage = () => {
  const { email, setEmail, password, setPassword, handleLogin, loading } = useLogin()

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      <Box flex="1" bg="gray.50" py={20}>
        <Container maxW="md" bg="white" p={10} boxShadow="lg" borderRadius="md">
          <Stack spacing={6}>
            <Heading size="lg" textAlign="center">Masuk ke Akun Anda</Heading>

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
              onClick={handleLogin}
              isLoading={loading}
              loadingText="Logging in..."
            >
              Masuk
            </Button>

            <Text fontSize="sm" textAlign="center">
              Belum punya akun?{" "}
              <Text color="teal.500" as="span" onClick={() => window.location.href = '/register'}>
                Daftar sekarang
              </Text>
            </Text>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

export default LoginPage
