import React, { ComponentType, useRef } from 'react';
import {
    Box,
    Flex,
    Text,
    Stack,
    Icon,
    Button,
    VStack,
    useColorModeValue,
    Divider,
    Heading
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

type Plan = {
    title: string;
    subtitle: string;
    price: string;
    features: { label: string; included: boolean }[];
};

const plans: Plan[] = [
    {
        title: 'Gold',
        subtitle: 'Tanpa musik, titip hadiah dan foto',
        price: 'Rp. 90.000',
        features: [
            { label: 'Akses Seluruh Tema', included: true },
            { label: 'Ubah Nama Tamu', included: true },
            { label: 'Tanpa Masa Aktif', included: true },
            { label: 'RSVP & Ucapan', included: true },
            { label: 'Lokasi Maps', included: true },
            { label: 'Unlimited Penerima', included: true },
            { label: 'Countdown & Save To Calendar', included: true },
            { label: 'Foto Gallery', included: false },
        ],
    },
    {
        title: 'Platinum',
        subtitle: 'Tanpa galery dan titip hadiah',
        price: 'Rp. 150.000',
        features: [
            { label: 'Akses Seluruh Tema', included: true },
            { label: 'Ubah Nama Tamu', included: true },
            { label: 'Tanpa Masa Aktif', included: true },
            { label: 'RSVP & Ucapan', included: true },
            { label: 'Lokasi Maps', included: true },
            { label: 'Unlimited Penerima', included: true },
            { label: 'Countdown & Save To Calendar', included: true },
            { label: 'Foto Gallery', included: false },
        ],
    },
    {
        title: 'Diamond',
        subtitle: 'Bisa foto galery dan titip hadiah',
        price: 'Rp. 190.000',
        features: [
            { label: 'Akses Seluruh Tema', included: true },
            { label: 'Ubah Nama Tamu', included: true },
            { label: 'Tanpa Masa Aktif', included: true },
            { label: 'RSVP & Ucapan', included: true },
            { label: 'Lokasi Maps', included: true },
            { label: 'Unlimited Penerima', included: true },
            { label: 'Countdown & Save To Calendar', included: true },
            { label: 'Foto Gallery', included: true },
        ],
    },
];


const FeaturesSectionEmpat = () => {
    return (
        <>
            <Box id='harga-id' mt={5} pt={20} pb={0} py={10} px={4}>
                <Heading
                    fontSize={{ base: '2xl', md: '4xl' }}
                    fontWeight="bold"
                    mb={12}
                    textAlign="center"
                    color="blue.600"
                >
                    Harga Terbaik{' '}
                    <Text as="span" color="cyan.300">
                        Kondangin
                    </Text>
                </Heading>
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="center"
                    gap={3}
                    wrap="wrap"
                >
                    {plans.map((plan, index) => (
                        <Box
                            key={index}
                            bg="white"
                            boxShadow="lg"
                            rounded="xl"
                            w={{ base: 'full', md: 'sm' }}
                            p={6}
                        >
                            <VStack spacing={2} mb={4}>
                                <Text fontSize="2xl" fontWeight="bold">{plan.title}</Text>
                                <Text fontSize="sm" color="gray.500" textAlign="center">
                                    {plan.subtitle}
                                </Text>
                                <Text fontSize="3xl" color="blue.500" fontWeight="bold">
                                    {plan.price}
                                </Text>
                            </VStack>
                            <Divider my={4} />
                            <Stack spacing={3}>
                                {plan.features.map((feature, i) => (
                                    <Flex key={i} align="center">
                                        <Icon
                                            as={feature.included ? CheckIcon : CloseIcon}
                                            color={feature.included ? 'green.400' : 'red.400'}
                                            boxSize={4}
                                            mr={2}
                                        />
                                        <Text fontSize="sm">{feature.label}</Text>
                                    </Flex>
                                ))}
                            </Stack>
                            <Button
                                mt={6}
                                colorScheme="blue"
                                width="full"
                                rounded="md"
                            >
                                Pilih Paket
                            </Button>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </>
    )
}

export default FeaturesSectionEmpat;