
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
  
  
export default function SummaryListFeature() {

  return (
    <Box bg="white" py={20}>
          <Container maxW="7xl">
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="space-between"
              gap={10}
            >
              {/* Gambar Fitur */}
              <Box flex="1">
                <Image
                  src={KondanginLogo}
                  alt="Fitur Unggulan"
                  borderRadius="lg"
                  boxShadow="lg"
                  w="full"
                  objectFit="cover"
                />
              </Box>

              {/* Text dan List Fitur */}
              <Box flex="1">
                <Heading size="lg" mb={4}>
                  Semua Fitur Lengkap dalam Satu Undangan
                </Heading>
                <Text fontSize="lg" color="gray.600" mb={6}>
                  Nikmati berbagai fitur premium di setiap undangan digital dari Kondangin.org. Kamu bebas kustomisasi, sebar, dan kelola undangan sesuka hati.
                </Text>

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
                  {[
                    "Bebas Ganti Ke Semua Tema",
                    "Ubah Nama Tamu Unlimited",
                    "Tanpa Masa Aktif",
                    "RSVP & Ucapan",
                    "Terintegrasi Google Maps",
                    "Sebar Ke Unlimited Penerima",
                    "Countdown Menuju Hari-H",
                    "Pengingat Google Calendar",
                    "Foto Galery & Video",
                    "Rekening Titip Hadiah",
                    "Titip Kado Fisik Ke Acara",
                    "Gift Virtual Di Undangan",
                    "Ratusan Music Bisa Custom",
                    "Terima Beres Dibuatin Admin",
                    "Link Live Streaming",
                    "Fitur Auto Scroll",
                    "Ubah Font dan Warna Tulisan",
                    "Kostumisasi Tema Undangan",
                    "QRCode Buku Tamu",
                    "Layar Sapa & Check-in Tamu",
                    "Love Story & Susunan Acara",
                    "Fitur Turut Mengundang",
                    "Laporan Statistik Sebar",
                    "Embed Map Lokasi Acara",
                    "Balas Ucapan Tamu",
                    "Unlimited Revisi Sepuasnya",
                    "Ubah Susunan Komponen",
                    "Request Tema Baru"
                  ].map((fitur, idx) => (
                    <HStack key={idx} align="start">
                      <Box boxSize={2} mt={2} bg="teal.400" borderRadius="full" />
                      <Text>{fitur}</Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Box>
            </Flex>
          </Container>
        </Box>
  );
}
  