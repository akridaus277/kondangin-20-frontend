import React, { ComponentType } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Image, Stack
} from '@chakra-ui/react';
import {
  MdCheckCircle,
  MdSupportAgent,
  MdAttachMoney,
  MdSpeed
} from 'react-icons/md';

const features = [
  {
    icon: MdCheckCircle,
    title: 'Fitur Lengkap',
    desc: 'Fitur yang dapat diandalkan mulai dari proses pembuatan undangan hingga proses membagikan undangan.',
  },
  {
    icon: MdSpeed,
    title: 'Proses Cepat',
    desc: 'Proses pembuatan undangan hanya memerlukan waktu 5 menit serta dapat diubah kapanpun.',
  },
  {
    icon: MdAttachMoney,
    title: 'Harga Kompetitif',
    desc: 'Buat undangan digital tidak pernah semudah dan semurah ini.',
  },
  {
    icon: MdSupportAgent,
    title: 'Support Terbaik',
    desc: 'Perlu bantuan? Tenang, tim support kami selalu bisa diandalkan.',
  },


];

const FeaturesSectionSatu = () => {
  return (
    <>
      <Box pt={10} pb={0} position="relative">
        <Heading
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="bold"
          mb={20}
          textAlign="center"
          color="blue.600"
        >
          Kenapa Memilih{''}  <Text as="span" color="cyan.300">
            Kondangin
          </Text>?
        </Heading>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="center"
          wrap="wrap"
          w="100%"
        >

          {/* Left Image */}
          <Box
            w={{ base: '100%', md: '33.3333%' }}
            textAlign={{ base: 'center', md: 'right' }}
            mb={{ base: 10, md: 0 }}
            pr={{ md: 8 }}
            minW="0"
          >
            <Image
              src="https://inveet.id/landing/v3/images/illustrator/Mobile_notification_SVG.svg"
              alt="Mobile Notification"
              mx="auto"
              height="auto"
              maxW={{ base: '200px', md: '250px' }}
              objectFit="contain"

            />
          </Box>
          <Box
            w={{ base: '100%', md: '66.6666%' }}
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {features.map((feature, idx) => (
                <Flex key={idx} py={4}>
                  <Flex
                    align="center"
                    justify="center"
                    bg="blue.50"
                    rounded="full"
                    boxSize={12}
                    color="blue.500"
                    mr={4}
                    shadow="md"
                    aspectRatio={1}

                  >
                    <Icon as={feature.icon as ComponentType<any>} boxSize={6} />
                  </Flex>
                  <Stack spacing={1}>
                    <Heading fontSize="lg">{feature.title}</Heading>
                    <Text fontSize="sm" color="gray.600">
                      {feature.desc}
                    </Text>
                  </Stack>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>


        </Flex>
      </Box>
    </>
  );
};

export default React.memo(FeaturesSectionSatu);
