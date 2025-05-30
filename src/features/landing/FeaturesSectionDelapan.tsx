
import {
    Box,
    Flex,
    Grid,
    IconButton,
    Image,
    Link,
    Stack,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";
// import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaTelegram } from "react-icons/fa";

const FeaturesSectionDelapan = () => {
    
    return (
        <>
            <Box pt={20} pb={0} position="relative" px={{ base: 4, md: 8 }}>
                <Grid templateColumns={{ base: "1fr", md: "1.5fr 1.5fr 1fr" }} gap={10}>
                    {/* Logo dan Deskripsi */}
                    <Stack spacing={4}>
                        <Flex align="center" gap={2}>
                            <Image src="/logo.png" alt="Logo" boxSize="50px" />
                            <Text fontSize="2xl" fontWeight="bold" color={"blue.600"}>Kondangin</Text>
                        </Flex>
                        <Text fontSize="sm">
                            Kondangin, mitra kreatif untuk Anda merancang dan berbagi undangan digital yang memukau.
                            Jelajahi koleksi template siap pakai, sesuaikan dengan alat desain intuitif, manfaatkan fitur canggih,
                            dan bagikan undangan Anda dengan mudah.
                        </Text>

                        <Text fontSize="md" fontWeight="bold" color={"blue.600"}>CV. Kondangin Tech Infinity</Text>
                        <Text fontSize="sm">&copy; {new Date().getFullYear()} Kondangin. All rights reserved.</Text>
                    </Stack>

                    {/* Support Pembayaran */}
                    <Stack spacing={4}>
                        <Text fontWeight="bold" fontSize={"lg"} color={"blue.600"}>Support{''}   <Text as="span" color="cyan.300">
                            Pembayaran
                        </Text></Text>
                        <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                            {[
                                "https://indoinvite.com/landing-page/images/metodePembayaran/bca.webp",
                                "https://indoinvite.com/landing-page/images/metodePembayaran/bni.webp", "https://indoinvite.com/landing-page/images/metodePembayaran/mandiri.webp", "https://indoinvite.com/landing-page/images/metodePembayaran/bri.webp",
                                "https://indoinvite.com/landing-page/images/metodePembayaran/qris.webp",

                            ].map((src, i) => (
                                <Box
                                    key={i}
                                    p={2}
                                    border="0.5px solid"

                                    borderRadius="md"
                                    borderColor="blue.400"
                                    boxShadow="md"

                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    bg="white"
                                >
                                    <Image src={src} alt="payment" boxSize="30px" width={"70%"} objectFit="contain" />
                                </Box>
                            ))}
                        </Grid>
                    </Stack>

                    {/* Kontak & Media */}
                    <Stack spacing={4}>
                        <Text fontWeight="bold" fontSize={"lg"} color={"blue.600"}>Liputan{''} <Text as="span" color="cyan.300">
                            Media Nasional
                        </Text></Text>
                        {/* <Flex wrap="wrap" gap={2}>
                            {["/tribun.png", "/liputan6.png", "/merdeka.png", "/kontan.png"].map((src, i) => (
                                <Image key={i} src={src} alt="media" boxSize="100px" objectFit="contain" />
                            ))}
                        </Flex> */}

                        <Flex align="center" gap={2}>
                            {/* <FaMapMarkerAlt /> */}
                            <Text fontSize="sm">Tangerang Selatan, Indonesia</Text>
                        </Flex>

                        <Flex align="center" gap={2}>
                            {/* <FaEnvelope /> */}
                            <Link href="mailto:info@indoinvite.com" fontSize="sm">info@kondangin.org</Link>
                        </Flex>

                        <Text fontSize="sm">V.2</Text>
                    </Stack>
                </Grid>

                {/* Footer Bottom Bar */}
                {/* <Flex justify="space-between" mt={1} align="center" flexDir={{ base: "column", md: "row" }} gap={4}>
                    <Text fontSize="sm">&copy; {new Date().getFullYear()} Kondangin. All rights reserved.</Text>
                    <Flex gap={4}>
                        <IconButton icon={<FaFacebook />}  aria-label="Facebook" variant="ghost" />
          <IconButton icon={<FaInstagram />} aria-label="Instagram" variant="ghost" />
          <IconButton icon={<FaTiktok />} aria-label="Tiktok" variant="ghost" />
          <IconButton icon={<FaTelegram />} aria-label="Telegram" variant="ghost" />
                    </Flex>
                </Flex> */}

                {/* WhatsApp Floating Button */}
                {/* {!isMobile && (
                    <Box position="fixed" bottom="30px" right="30px" zIndex={10}>
                        <Link href="https://wa.me/6281234567890" isExternal>
                            <Image src="/whatsapp.png" alt="WhatsApp" boxSize="60px" />
                        </Link>
                    </Box>
                )} */}
            </Box>
        </>
    )
}

export default FeaturesSectionDelapan;