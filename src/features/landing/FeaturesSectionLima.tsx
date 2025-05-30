import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { md } from 'node-forge';

const FeaturesSectionLima = () => {
    return (
        <>
        <Box id='reseller-id'
    //   bg="#002f52"
      bg="#2b6cb0"
      borderRadius="40px"
      py={{ base: 10, md: 16 }}
      px={{ base: 6, md: 20 }}
      my={10}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        gap={10}
      >
        {/* Gambar ilustrasi */}
        <Box flex="1">
          <Image
            src="https://indoinvite.com/landing-page/images/home/join.webp"
            alt="Join Us Illustration"
            objectFit="contain"
            maxW="100%"
          />
        </Box>

        {/* Konten teks */}
        <Box flex="1" color="white">
          <Heading as="h2" size="lg" mb={4}>
            Mau jadi reseller?
          </Heading>
          <Text fontSize="md" mb={2}>
            Dapatkan keuntungan 100%
          </Text>
          <Text fontSize="md" mb={6}>
            Miliki usaha Undangan Online dengan Branding USAHA SENDIRI gratis Landing Page
          </Text>
          <Button
            colorScheme="blue"
            boxShadow="md"
            size="lg"
            px={8}
            rightIcon={<span>➔</span>}
          >
            Daftar Reseller
          </Button>
        </Box>
      </Flex>
    </Box>
        </>
    )
}

export default FeaturesSectionLima;  