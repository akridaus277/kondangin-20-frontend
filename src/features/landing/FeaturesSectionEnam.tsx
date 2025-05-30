import {
    Box,
    Heading,
    Text,
    Image,
    Link,
    HStack,
    Card,
    CardBody,
    CardFooter,
    Stack,
    Flex,
  } from "@chakra-ui/react";
  import { StarIcon } from "@chakra-ui/icons";
  import Slider from "react-slick";
  
  interface Testimonial {
    image: string;
    name: string;
    link: string;
    event: string;
    rating: number;
    review: string;
  }
  
  const testimonials: Testimonial[] = [
    {
      image: "https://indoinvite.com/landing-page/images/testi/testi7.webp",
      name: "Rifky & Destri",
      link: "#",
      event: "Pernikahan",
      rating: 5,
      review: "Prosesnya cepat, setiap revisi yang aku minta langsung ditangani dengan baik, nggak ribet sama sekali...",
    },
    {
      image: "https://indoinvite.com/landing-page/images/testi/testi1.webp",
      name: "Pande & Desak",
      link: "#",
      event: "3 Bulanan",
      rating: 5,
      review: "Pelayanan super ramah, harganya memang sangat murah, tapi hasilnya di luar ekspektasi. Suka banget sa...",
    },
    {
      image: "https://indoinvite.com/landing-page/images/testi/testi3.webp",
      name: "Eko Pujianto",
      link: "#",
      event: "Launching",
      rating: 5,
      review: "Oke, ini sudah bagus! suka sama hasil akhirnya, benar-benar sesuai ekspektasi. Desainnya terlihat pr...",
    },
    {
      image: "https://indoinvite.com/landing-page/images/testi/testi4.webp",
      name: "Dwiputra Malla",
      link: "#",
      event: "Tahbisan Imam",
      rating: 5,
      review: "Keren banget, bossku benar puas sama hasilnya. Desainnya luar biasa dengan harga yang terjangkau.",
    },
  ];
  
  const FeaturesSectionEnam = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 },
        },
      ],
    };
  
    return (
      <Box id="testimoni-id" py={8} pt={10} pb={0} px={{ base: 4, md: 8 }} position="relative">
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          mb={12}
          textAlign="center"
          color="blue.600"
        >
          Testimoni{" "}
          <Text as="span" color="cyan.300">
            Kondangin
          </Text>
        </Heading>
   

      
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <Box key={idx} px={2}>
              <Card
                borderRadius="2xl"
                overflow="hidden"
                minH="480px"
                display="flex"
                flexDirection="column"
                boxShadow="md"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height="400px"
                  width="100%"
                  objectFit="cover"
                />
                <CardBody>
                  <Stack spacing={2}>
                    <Text fontWeight="bold">
                      dari <Link color="blue.600" href={item.link}>{item.name}</Link>
                    </Text>
                    <Text fontWeight="semibold" fontSize="sm">{item.event}</Text>
                    <HStack spacing={0.5}>
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < item.rating ? "orange.400" : "gray.300"}
                            boxSize={4}
                          />
                        ))}
                    </HStack>
                    <Text fontSize="sm" color="gray.700" noOfLines={4}>
                      {item.review}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter />
              </Card>
            </Box>
          ))}
        </Slider>
   
      </Box>
    );
  };
  
  export default FeaturesSectionEnam;
  