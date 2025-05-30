// components/AutoFakeNotif.tsx
import React, { useEffect, ComponentType } from "react";
import { useToast, Box, Text, Flex, Icon } from "@chakra-ui/react";
import { FaBox } from "react-icons/fa";

const names = ["Budi", "Siti", "Andi", "Dewi", "Joko", "Ayu"];
const locations = ["Jakarta", "Bandung", "Surabaya", "Medan", "Bali", "Yogyakarta"];
const packages = ["Gold", "Platinum", "Diamond"];

function getRandomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const AutoFakeNotif: React.FC = () => {
    const Fabox = FaBox as ComponentType;
  const toast = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      const buyerName = getRandomItem(names);
      const location = getRandomItem(locations);
      const packageName = getRandomItem(packages);
      const timestamp = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "long",
        timeStyle: "short",
      }).format(new Date());

      toast({
        position: "top-right",
        duration: 3000,
        isClosable: true,
        render: () => (
          <Box
            p={4}
             mt="14"
            bg="blue.50"
            borderLeft="6px solid #3182ce"
            borderRadius="md"
            boxShadow="lg"
            maxW={{ base: "90vw", sm: "80vw", md: "sm" }}
          >
            <Flex align="center" mb={2}>
              <Icon as={Fabox} boxSize={5} color="blue.500" mr={2} />
              <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>Transaksi Baru</Text>
            </Flex>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              📦 Paket <strong>{packageName}</strong> dibeli oleh{" "}
              <strong>{buyerName}</strong> dari <strong>{location}</strong> pada{" "}
              <strong>{timestamp}</strong>.
            </Text>
          </Box>
        ),
      });
    }, 10000); // setiap 30 detik

    return () => clearInterval(interval);
  }, [toast]);

  return null; // Tidak perlu render apa pun
};

export default AutoFakeNotif;
