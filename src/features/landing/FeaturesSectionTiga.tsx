import React, { ComponentType, useRef } from 'react';
import {
    Box,
    Heading,
    Text,
    Image, Card,
    CardBody,
    CardFooter,
    Button,
    Stack,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Center,
    IconButton
} from '@chakra-ui/react';

import { ChevronLeftIcon, ChevronRightIcon, ViewIcon } from "@chakra-ui/icons";
import Slider from "react-slick";

const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next"
        position="absolute"
        top="50%"
        right="-16px"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={onClick}
        bg="white"
        boxShadow="md"
        _hover={{ bg: "gray.100" }}
    />
);

const SamplePrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous"
        position="absolute"
        top="50%"
        left="-16px"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={onClick}
        bg="white"
        boxShadow="md"
        _hover={{ bg: "gray.100" }}
    />
);

const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const CardSlider = () => {
    const sliderRef = useRef<Slider | null>(null);

    return (
        <Box w="full" mt={4} position="relative" px={{ base: 0, md: 6 }}>
            <Slider ref={sliderRef} {...sliderSettings}>
                {[...Array(8)].map((_, i) => (
                    <Box key={i} px={3} width="100%" aspectRatio={4 / 3}>
                        <Card
                            maxW="sm"
                            overflow="hidden"
                            transition="all 0.3s ease-in-out"
                            boxShadow="md"
                            _hover={{
                                transform: "scale(1.03)",
                                boxShadow: "xl",
                                cursor: "pointer",
                            }}
                        >
                            <Image
                                src="https://indoinvite.com/landing-page/images/home/nikah.webp"
                                alt="Green double couch with wooden legs"
                                height="550px"
                                width="100%"
                                objectFit="cover"
                            />
                            <CardBody>
                                <Stack spacing="2">
                                    <Heading size="md">Tema  {i + 1}</Heading>
                                </Stack>
                            </CardBody>
                            <CardFooter gap="2">
                                <Button variant="solid" colorScheme="blue" leftIcon={<ViewIcon />}>
                                    Lihat
                                </Button>
                                <Button variant="ghost">Pesan Sekarang</Button>
                            </CardFooter>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

const FeaturesSectionTiga = () => {
    return (
        <>
            <Box pt={20} pb={0} position="relative" px={{ base: 4, md: 8 }} id='design-id'>
                <Heading
                    fontSize={{ base: '2xl', md: '4xl' }}
                    fontWeight="bold"
                    mb={16}
                    textAlign="center"
                    color="blue.600"
                >
                    Design Terbaik{' '}
                    <Text as="span" color="cyan.300">
                        Kondangin
                    </Text>
                </Heading>
                <Center>
                    <Tabs variant="enclosed" maxW="7xl" isFitted w="100%">
                        <TabList>
                            <Tab><b>Paket Gold</b></Tab>
                            <Tab><b>Paket Platinum</b></Tab>
                            <Tab><b>Paket Diamond</b></Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <CardSlider />
                            </TabPanel>

                            <TabPanel>
                                <CardSlider />
                            </TabPanel>

                            <TabPanel>
                                <CardSlider />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Center>




            </Box>
        </>
    );
};

export default FeaturesSectionTiga; 