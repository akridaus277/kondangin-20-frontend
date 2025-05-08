import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  Switch,
  HStack,
  VStack,
  Stack,
  Icon,
  Button,
  List
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { FaCheckCircle } from "react-icons/fa";
import KondanginLogo from '@/assets/kondangin-logo.webp';
import { LuCircleCheck, LuCircleDashed } from "react-icons/lu"

// const packages = {
//   satuan: [
//     {
//       title: 'Paket Hemat',
//       description: 'Cocok untuk undangan sederhana',
//       price: 'Rp 49.000',
//       features: [
//         '1 Tema Pilihan',
//         'Tanpa Masa Aktif',
//         'Link Undangan',
//         'RSVP & Ucapan',
//       ],
//     },
//     {
//       title: 'Paket Lengkap',
//       description: 'Semua fitur dasar & tambahan',
//       price: 'Rp 89.000',
//       features: [
//         'Bebas Ganti Tema',
//         'Google Maps',
//         'Countdown & Calendar',
//         'Titip Hadiah & Kado',
//       ],
//     },
//   ],
//   berlangganan: [
//     {
//       title: 'Langganan Bulanan',
//       description: 'Buat & kelola undangan sepuasnya tiap bulan',
//       price: 'Rp 199.000/bulan',
//       features: [
//         'Unlimited Undangan',
//         'Kostumisasi Tema',
//         'Auto Scroll & QR Check-in',
//         'Laporan Statistik',
//       ],
//     },
//     {
//       title: 'Langganan Tahunan',
//       description: 'Paket hemat untuk kebutuhan setahun',
//       price: 'Rp 1.500.000/tahun',
//       features: [
//         'Semua Fitur Premium',
//         'Priority Support',
//         'Request Tema Baru',
//         'Unlimited Revisi',
//       ],
//     },
//   ],
// };

export default function PriceList() {
  const [isSubscription, setIsSubscription] = useState(false);
  // const currentPackages = isSubscription ? packages.berlangganan : packages.satuan;


  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="7xl">
        <VStack spacing={4} mb={10}>
          <Heading textAlign="center">Pilih Paket Sesuai Kebutuhan</Heading>
          <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
            Kamu bisa pilih paket satuan untuk satu kali undangan atau langganan untuk kemudahan tanpa batas.
          </Text>
          <HStack spacing={4} mt={4}>
            <Switch.Root
              checked={isSubscription}
              onCheckedChange={(e) => setIsSubscription(e.checked)}
            >
              <Switch.HiddenInput />
              <Switch.Label>Satuan</Switch.Label>
              <Switch.Control> 
                <Switch.Thumb />
              </Switch.Control>
              <Switch.Label>Berlangganan</Switch.Label>
            </Switch.Root>
          </HStack>
        </VStack>

        <Slider
                    dots={false}
                    infinite={true}
                    speed={500}
                    slidesToShow={4}
                    slidesToScroll={1}
                    arrows={false}
                    swipeToSlide={true}
                    responsive={[
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                        }
                      },
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 2,
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1,
                        }
                      }
                    ]}
                  >
                    {[...Array(6)].map((_, idx) => (
                      <Box key={idx} px={3}>
                        <Box
                          borderWidth="1px"
                          borderRadius="lg"
                          overflow="hidden"
                          bg="gray.50"
                          w="full"
                          maxW="300px"
                          mx="auto"
                          shadow="md"
                          p={4}
                        >
                        
                        <VStack spacing={4} align="stretch">
                                <Text fontSize="xl" fontWeight="bold" textAlign="center">
                                  {`Judul Paket`}
                                </Text>
                                <Text fontSize="sm" color="gray.600" textAlign="center">
                                  {`paket ini adalah hemet`}
                                </Text>
                                <Text fontSize="2xl" color="teal.500" fontWeight="bold" textAlign="center">
                                  {`Rp. 10.000`}
                                </Text>


                                <List.Root gap="2" variant="plain" align="center">
                                  <List.Item>
                                    <List.Indicator asChild color="green.500">
                                      <LuCircleCheck />
                                    </List.Indicator>
                                    Lorem ipsum dolor sit amet
                                  </List.Item>
                                  <List.Item>
                                    <List.Indicator asChild color="green.500">
                                      <LuCircleCheck />
                                    </List.Indicator>
                                    Assumenda, quia temporibus
                                  </List.Item>
                                  <List.Item>
                                    <List.Indicator asChild color="green.500">
                                      <LuCircleDashed />
                                    </List.Indicator>
                                    Quidem, ipsam illum quis 
                                  </List.Item>
                                </List.Root>
                              </VStack>
                       

                        </Box>
                      </Box>
                    ))}
                  </Slider>
      </Container>
    </Box>
  );
}
