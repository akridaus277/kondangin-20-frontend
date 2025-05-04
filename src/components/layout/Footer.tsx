import { Box, Container, SimpleGrid, Stack, Text, Link, Icon } from "@chakra-ui/react"
import { ComponentType } from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"

const socialLinks: { icon: ComponentType<any>; url: string; label: string }[] = [
  { icon: FaFacebookF as ComponentType<any>, url: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter as ComponentType<any>, url: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram as ComponentType<any>, url: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn as ComponentType<any>, url: "https://linkedin.com", label: "LinkedIn" },
]

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Kolom 1: Info */}
          <Stack align="start">
            <Text fontSize="xl" fontWeight="bold">
              Kondangin
            </Text>
            <Text fontSize="sm">
              Platform undangan digital profesional & praktis.
            </Text>
          </Stack>

          {/* Kolom 2: Navigasi */}
          <Stack align="start">
            <Text fontSize="lg" fontWeight="semibold">
              Navigasi
            </Text>
            <Link href="/" color="whiteAlpha.800" _hover={{ color: "white" }}>Beranda</Link>
            <Link href="#fitur" color="whiteAlpha.800" _hover={{ color: "white" }}>Fitur</Link>
            <Link href="#harga" color="whiteAlpha.800" _hover={{ color: "white" }}>Harga</Link>
            <Link href="/contact" color="whiteAlpha.800" _hover={{ color: "white" }}>Kontak</Link>
          </Stack>

          {/* Kolom 3: Sosial Media */}
          <Stack align="start">
            <Text fontSize="lg" fontWeight="semibold">
              Ikuti Kami
            </Text>
            <Stack direction="row" spacing={4}>
              {socialLinks.map(({ icon, url, label }) => (
                <Link key={label} href={url} isExternal aria-label={label}>
                  <Icon as={icon} w={6} h={6} _hover={{ color: "blue.400" }} />
                </Link>
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box mt={10} textAlign="center" borderTop="1px" borderColor="gray.700" pt={6}>
        <Text fontSize="sm">© 2025 Kondangin. All Rights Reserved.</Text>
      </Box>
    </Box>
  )
}

export default Footer
