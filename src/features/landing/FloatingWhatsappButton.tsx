import React ,{ComponentType, useState} from 'react';
import { IconButton, Link, Box, Icon } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { WhatsAppChatPopup } from './WhatsAppChatPopup';

const FloatingWhatsappButton = () => {
    const WhatsappIcon = FaWhatsapp as ComponentType;
    const [showPopup, setShowPopup] = useState(false);
  return (
    <>
    <Box position="fixed"
    bottom="8"
    right="8"
    zIndex="999"
    animation="pulse 2s infinite"
    // definisi animasi pulse di bawah
    sx={{
      '@keyframes pulse': {
        '0%, 100%': {
          transform: 'scale(1)',
        //   boxShadow: '0 0 0 0 rgba(72, 187, 120, 0.7)',
        },
        '50%': {
          transform: 'scale(1.1)',
        //   boxShadow: '0 0 10px 10px rgba(72, 187, 120, 0)',
        },
      },
    }}
    
    >
  
        <IconButton
          icon={<Icon as={WhatsappIcon} w={9} h={9} />}
          rounded="full"
          size="lg"
          boxSize="60px" 
          bg="blue.500"
          color="white"
          _hover={{ bg: 'blue.700' }}
          aria-label="Chat via WhatsApp"
          shadow="md"
          onClick={() => setShowPopup(true)}
        />
  
    </Box>
    {/* Popup WA */}
    {showPopup && <WhatsAppChatPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default FloatingWhatsappButton;
