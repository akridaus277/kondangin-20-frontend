import React, { useState, useEffect, Suspense, useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image as ChakraImage,
  Container,
  Skeleton,
  chakra,
  shouldForwardProp
} from '@chakra-ui/react';
import Navbar from '@/components/layout/Navbar';
import NavbarNew from '@/components/layout/NavbarNew';
import { isValidMotionProp, motion, AnimatePresence, MotionProps } from "framer-motion";
import FeaturesSectionSatu from './FeaturesSectionSatu';
import FeaturesSectionDua from './FeaturesSectionDua';
import FeaturesSectionTiga from './FeaturesSectionTiga';
import FeaturesSectionEmpat from './FeaturesSectionEmpat';
import FeaturesSectionLima from './FeaturesSectionLima';
import FeaturesSectionEnam from './FeaturesSectionEnam';
import FloatingWhatsappButton from './FloatingWhatsappButton';
import AutoFakeNotif from './AutoFakeNotif';
import FeaturesSectionTuju from './FeaturesSectionTuju';
import FeaturesSectionDelapan from './FeaturesSectionDelapan';

const FeaturesSection = React.lazy(() => import('./FeaturesSectionSatu'));

const MotionSpan = chakra(motion.span, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});



const LandingPageNew = React.memo(() => {

  const keywords: string[] = [
    'Pernikahan',
    'Aqiqah',
    'Ulang Tahun',
    'Syukuran',
    'Wisuda',
    'Acara Keagamaan',
    'Acara Formal',
    'Reuni Sekolah',
  ];

  const [imgLoaded, setImgLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  

  {/* Untuk Animasi tulisan pernikahan */ }
  useEffect(() => {
    const currentWord = keywords[currentWordIndex];
    let typingSpeed = 100;

    if (isDeleting) {
      typingSpeed /= 2;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prevText) => {
        if (!isDeleting) {
          const next = currentWord.slice(0, prevText.length + 1);
          if (next === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
          return next;
        } else {
          const next = currentWord.slice(0, prevText.length - 1);
          if (next === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % keywords.length);
          }
          return next;
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <>
      <NavbarNew />
      <Box id='landing-id' bg="white" minH="100vh" py={{ base: 10, md: 20 }} bgImage={"url('https://inveet.id/landing/v3/images/digital/home-bg.png')"} bgRepeat={"no-repeat"} bgSize={"auto"}>
        <Container maxW="container.xl">
          {/* Hero Section */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            mb={16}
          >
            {/* Image */}
            <Box
              flex="1"
              order={{ base: 0, md: 1 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={{ base: 10, md: 0 }}
            >
              <Box
                borderRadius="full"
                objectFit="cover"
                overflow="hidden"
                // boxShadow="0 8px 30px rgba(66, 153, 225, 0.35)"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'scale(1.03)',
                  boxShadow: '0 12px 40px rgba(66, 153, 225, 0.5)',
                }}
                width="100%"
                maxW="500px"
              >
                <Skeleton isLoaded={imgLoaded}>
                  <Box
                    // bgImage="url('https://inveet.id/landing/v3/images/digital/home-bg.png')"
                    bgRepeat={"repeat"} bgSize={"cover"}
                  >
                    <ChakraImage
                      src="https://i.imgur.com/0HsLkxp.png"
                      alt="Creative Work"
                      loading="lazy"
                      shadow={"md"}
                      onLoad={() => setImgLoaded(true)}
                      borderRadius="xl"
                      width="100%"
                      height="auto"
                    />
                  </Box>
                </Skeleton>
              </Box>
            </Box>

            {/* Content Hero Section */}
            <Box flex="1" order={{ base: 1, md: 0 }} pr={{ md: 10 }} >
              <Heading
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight="bold"
                mb={4}
                color="blue.600"
              >
                Undangan {' '} <AnimatePresence >
                  <MotionSpan
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    {...({
                      transition: { duration: 0.1 },
                    } as any)}
                    style={{ display: 'inline-block', paddingRight: '3px' }}
                    color="cyan.300"
                  >
                    {displayedText}
                  </MotionSpan>
                </AnimatePresence>{' '} Online
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" mb={6}>
                Rayakan hari istimewamu dengan undangan yang indah, praktis, dan berkesan.
              </Text>
              <Box
                display={{ base: 'flex', md: 'block' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                <Button colorScheme="blue" size="lg" borderRadius="full">
                  Buat Undangan
                </Button>
              </Box>
            </Box>
          </Flex>

          {/* Features Section Mengapa Pilih Kami? */}
          <Suspense fallback={<Text align="center">Memuat fitur...</Text>}>
            <FeaturesSectionSatu />
          </Suspense>
          <Suspense fallback={<Text align="center">Memuat fitur...</Text>}>
            <FeaturesSectionDua />
          </Suspense>
          <Suspense fallback={<Text align="center">Memuat fitur...</Text>}>
            <FeaturesSectionTiga />
          </Suspense>
          <Suspense fallback={<Text align="center">Memuat fitur...</Text>}>
            <FeaturesSectionEmpat />
          </Suspense>
          <Suspense fallback={<Text align="center">Memuat fitur...</Text>}>
            <FeaturesSectionLima />
          </Suspense>
          <Suspense fallback={<Text align="center">Memuat fitur...</Text>}>
            <FeaturesSectionEnam />
          </Suspense>
          <Suspense fallback={<Text align="center">Memuat fitur...</Text>}>
            <FeaturesSectionTuju />
          </Suspense>
          <Suspense fallback={<Text align="center">Memuat fitur...</Text>}>
            <FeaturesSectionDelapan />
          </Suspense>
          
          <FloatingWhatsappButton></FloatingWhatsappButton>
          {/* <AutoFakeNotif></AutoFakeNotif> */}
        </Container>


      </Box>
    </>
  );
});

export default LandingPageNew;


