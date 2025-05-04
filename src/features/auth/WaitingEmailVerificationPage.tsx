import {
    Box,
    Button,
    Container,
    Heading,
    Stack,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import Footer from "@/components/layout/Footer";
  import Navbar from "@/components/layout/Navbar";
  
  const WaitingEmailVerificationPage = () => {
    const toast = useToast();
  
    const handleResend = () => {
      // Menampilkan toast setelah pengguna mengklik tombol kirim ulang verifikasi
      toast({
        title: "Link verifikasi dikirim ulang.",
        description: "Silakan cek kembali email Anda.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    };
  
    return (
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
  
        <Box flex="1" bg="gray.50" py={20}>
          <Container maxW="md" bg="white" p={10} boxShadow="lg" borderRadius="md">
            <Stack spacing={6} textAlign="center">
              <Heading size="lg">Verifikasi Email Anda</Heading>
              <Text>
                Kami telah mengirimkan email verifikasi ke alamat email Anda.
                Silakan cek inbox dan ikuti instruksi yang diberikan untuk
                mengaktifkan akun.
              </Text>
              <Text>
                Belum menerima email? Klik tombol di bawah untuk mengirim ulang.
              </Text>
              <Button colorScheme="teal" onClick={handleResend}>
                Kirim Ulang Email Verifikasi
              </Button>
            </Stack>
          </Container>
        </Box>
  
        <Footer />
      </Box>
    );
  };
  
  export default WaitingEmailVerificationPage;
  