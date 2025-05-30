import React, { ComponentType } from 'react';
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Icon,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    FiUsers,
    FiBookOpen,
    FiGift,
    FiMapPin,
    FiImage,
    FiMusic,
    FiEdit,
    FiHeart,
    FiCalendar,
    FiVideo,
    FiClipboard,
    FiSend,
    FiMap,
    FiChevronDown,
    FiCheckCircle,
    FiMessageCircle, FiBell,
    FiClock,
    FiType
} from 'react-icons/fi';
import { FaInfinity } from 'react-icons/fa';

const features = [
    {
        icon: FiUsers,
        title: "Nama Tamu",
        description: "Menampilkan nama tamu yang diundang agar terasa lebih dekat",
    },
    {
        icon: FiEdit,
        title: "Edit Nama Tamu Unlimited",
        description: "Dapat mengubah nama tamu yang diundang tanpa batasan edit",
    },
    {
        icon: FiBookOpen,
        title: "Buku Tamu",
        description: "Dapat menerima ucapan dan doa serta status kehadiran dari tamu undangan",
    },
    {
        icon: FiGift,
        title: "Amplop Digital",
        description: "Tamu dapat memberikan amplop langsung secara digital",
    },
    {
        icon: FiMapPin,
        title: "Penunjuk Lokasi",
        description: "Menunjukkan dan mengarahkan tamu ke lokasi acara",
    },
    {
        icon: FiImage,
        title: "Galeri Foto",
        description: "Bagikan momen bahagia Kamu kepada tamu undangan",
    },
    {
        icon: FiHeart,
        title: "Love Story",
        description: "Bagikan kisah cinta secara personal dan menarik kepada tamu undangan",
    },
    {
        icon: FiCalendar,
        title: "Susunan Acara",
        description: "Menampilkan jadwal acara secara jelas dan mudah diakses oleh tamu",
    },
    {
        icon: FiMusic,
        title: "Background Musik",
        description: "Hiasi undangan pernikahan online dengan musik kesukaanmu",
    },
    {
        icon: FiVideo,
        title: "Live Streaming",
        description: "Siaran langsung acara pernikahan yang bisa diakses tamu dari mana pun",
    },
    {
        icon: FiClipboard,
        title: "Check-in Tamu",
        description: "Pencatatan kehadiran tamu secara digital",
    },
    {
        icon: FiSend,
        title: "Unlimited Invite Sharing",
        description: "Bagikan undangan Anda ke tamu tanpa batas",
    },
    {
        icon: FiMap,
        title: "Lokasi Acara",
        description: "Tampilkan lokasi pernikahan Anda secara akurat melalui Google Maps",
    },
    {
        icon: FiChevronDown,
        title: "Auto Scroll",
        description: "Fitur ini secara otomatis menggulirkan halaman ke bagian undangan saat dibuka",
    },
    {
        icon: FiCheckCircle,
        title: "RSVP Kehadiran",
        description: "Tamu dapat dengan mudah mengonfirmasi kehadiran secara online langsung dari undangan digital.",
    },
    {
        icon: FiMessageCircle,
        title: "Ucapan & Doa",
        description: "Tamu bisa mengirimkan ucapan dan doa terbaik untuk pasangan pengantin melalui fitur interaktif yang tersedia.",
    },
    {
        icon: FiBell,
        title: "Pengingat Otomatis",
        description: "Dengan satu klik, tamu dapat menambahkan jadwal ke Google Calendar dan mendapatkan notifikasi sebelum acara dimulai.",
    },
    {
        icon: FiClock,
        title: "Countdown Acara",
        description: "Tampilkan waktu yang tersisa menuju hari bahagia, agar tamu ikut merasakan semangat menuju momen spesial.",
    },
    {
        icon: FiType,
        title: "Ubah Font & Warna",
        description: "Sesuaikan gaya tulisan undangan sesuai keinginan — pilih jenis huruf dan warna untuk tampilan yang lebih unik dan personal.",
    },
    {
        icon: FaInfinity,
        title: "Akses Selamanya",
        description: "Undangan digital Kamu tidak memiliki batas waktu—dapat diakses kapan pun tanpa masa aktif.",
    },
    {
        icon: FiVideo,
        title: "Video Prewedding",
        description: "Tampilkan momen prewedding Kamu dalam bentuk video yang dapat dinikmati langsung oleh para tamu.",
    }
    
    
];

const FeaturesSectionDua = () => {
    const cardBg = useColorModeValue('white', 'gray.800');

    return (
        <Box id='fitur-id' pt={20} pb={0} position="relative" px={{ base: 4, md: 8 }}>
            <Heading
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight="bold"
                mb={16}
                textAlign="center"
                color="blue.600"
            >
                Fitur Terbaik{' '}
                <Text as="span" color="cyan.300">
                    Kondangin
                </Text>
            </Heading>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
                {features.map((feature, index) => (
                    <Box
                        key={index}
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg={cardBg}
                        transition="all 0.3s"
                        _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                    >
                        <VStack spacing={4}>
                            <Icon  as={feature.icon as ComponentType<any>} w={8} h={8} color="blue.500" />
                            <Text fontWeight="bold" fontSize="lg">
                                {feature.title}
                            </Text>
                            <Text fontSize="sm" color="gray.600" textAlign="center">
                                {feature.description}
                            </Text>
                        </VStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default React.memo(FeaturesSectionDua);
