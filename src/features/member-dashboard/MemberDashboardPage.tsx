import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Sidebar from "@/components/layout/MemberSidebar"

const MemberDashboardPage = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      {/* Main Content */}
      <Box flex="1" display="flex">
        <Container maxW="6xl" display="flex" flex="1">
          {/* Sidebar */}
          <Sidebar />

          {/* Content Area */}
          <Box flex="1" pl={{ base: 0, md: 10 }} pt={10}>
            <Heading size="lg" mb={4}>Dashboard Member</Heading>
            <Text fontSize="md" color="gray.600" mb={8}>
              Selamat datang kembali! Kelola undangan Anda di sini.
            </Text>

            <Stack spacing={4}>
              <Button colorScheme="teal" w="full">Buat Undangan Baru</Button>
              <Button variant="outline" w="full">Lihat Undangan Saya</Button>
              <Button variant="ghost" w="full">Edit Profil</Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

export default MemberDashboardPage
