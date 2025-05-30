// components/WhatsAppChatPopup.tsx
import React, { useState, ComponentType } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Input,
  InputGroup,
  useColorModeValue,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface WhatsAppChatPopupProps {
  onClose: () => void;
}

const MotionBox = motion(Box);

export const WhatsAppChatPopup: React.FC<WhatsAppChatPopupProps> = ({ onClose }) => {
 const WhatsappIcon = FaWhatsapp as any;
  const [message, setMessage] = useState("");

  const bgColor = useColorModeValue("white", "gray.700");
  const textBg = useColorModeValue("white", "gray.600");
  const headerBg = useColorModeValue("blue.500", "cyan.500");

  const openWhatsApp = () => {
    const phone = "6289679048560"; // Ganti dengan nomor kamu
    const encodedMessage = encodeURIComponent(message || "Halo kak, saya butuh mau pesan undangan digital");
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      position="fixed"
      bottom="110px"
      right="40px"
      bg={bgColor}
      boxShadow="lg"
      borderRadius="md"
      width="300px"
    //   height="350px"
      zIndex={1000}
      overflow="hidden"
    >
      {/* Header */}
      <Flex bg={headerBg} color="white" p={3} justify="space-between" align="center">
        <Flex align="center" gap={2}>
          {/* Bisa tambahkan Avatar di sini */}
          <Box position="relative">
  <Avatar
    size="md"
    bg="white"
    name="WhatsApp Support"
    src="/logo.png"
  />
  <Box
    position="absolute"
    bottom="0"
    right="0"
    boxSize="10px"
    bg="green.400"
    border="2px solid white"
    borderRadius="full"
  />
</Box>
          <Box>
            <Text fontWeight="bold" fontSize="sm">Butuh bantuan? Chat Kami</Text>
            <Text fontSize="xs">Support Kondangin</Text>
          </Box>
        </Flex>
        <IconButton
          size="sm"
          variant="ghost"
          color="white"
          aria-label="Tutup"
          icon={<CloseIcon boxSize={3} />}
          onClick={onClose}
        />
      </Flex>

      {/* Isi pesan */}
      <Box bg={useColorModeValue("gray.50", "gray.800")} p={4}>
        <Box
          bg={textBg}
          p={3}
          borderRadius="md"
          boxShadow="sm"
          maxW="240px"
          mb={8}
        >
          <Text fontSize="sm">Hi Kak 😊</Text>
          <Text fontSize="sm">Ada yang bisa Kami bantu?</Text>
        </Box>
      </Box>

      {/* Input dan tombol kirim */}
      <Box px={3} pb={3}>
        <InputGroup size="sm">
          <Input
            placeholder="Ketik pesan..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            bg={useColorModeValue("gray.100", "gray.600")}
            borderRadius="md"
            height={"60px"}
          />
        </InputGroup>
        <Button
          mt={2}
          size="sm"
          width="100%"
          colorScheme="blue"
          onClick={openWhatsApp}
          leftIcon={WhatsappIcon}
        >
          <Text color={"white"}>Kirim</Text>
        </Button>
      </Box>
    </MotionBox>
    </>
  );
};
