import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Stack,
    Text,
    Link as ChakraLink,
    Icon
  } from '@chakra-ui/react';
  import { RxHamburgerMenu } from "react-icons/rx"
  import { IoClose } from "react-icons/io5";
  import { Link as RouterLink } from 'react-router-dom';
  
  const Links = [
    { label: 'Home', to: '/' },
    { label: 'Harga', to: '/harga' },
    { label: 'Template', to: '/template' },
    { label: 'Tutorial', to: '/tutorial' },
    { label: 'Artikel', to: '/artikel' },
  ];
  
  const NavLink = ({ to, children }) => (
    <ChakraLink
      as={RouterLink}
      px={3}
      py={2}
      rounded="md"
      _hover={{ textDecoration: 'none', bg: 'teal.100' }}
      to={to}
    >
      {children}
    </ChakraLink>
  );
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box bg="white" px={4} shadow="sm" position="sticky" top={0} zIndex={10}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Text as={RouterLink} to="/" fontWeight="bold" fontSize="xl" color="teal.500">
            Kondangin
          </Text>
  
          {/* Hamburger */}
          <IconButton
            size="md"
            icon={isOpen ? <IoClose /> : <RxHamburgerMenu />}
            aria-label="Toggle Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
  
          {/* Desktop Menu */}
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
            ))}
            <Button
              as={RouterLink}
              to="/register"
              colorScheme="teal"
              size="sm"
              ml={4}
            >
              Daftar Gratis
            </Button>
          </HStack>
        </Flex>
  
        {/* Mobile Menu */}
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack spacing={3}>
              {Links.map((link) => (
                <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
              ))}
              <Button as={RouterLink} to="/register" colorScheme="teal" size="sm">
                Daftar Gratis
              </Button>
            </Stack>
          </Box>
        )}
      </Box>
    );
  }
  