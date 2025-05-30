// NavbarNew.tsx
import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Stack,
  useDisclosure, Link as ChakraLink,
  chakra
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";

// ----------------------
// Tipe data props
// ----------------------
interface NavLinkProps {
  label: string;
  path?: string;

}


// ----------------------
// Daftar link navigasi
// ----------------------
const Links: NavLinkProps[] = [
  { label: "Beranda", path: "/" },
  { label: "Design", path: "#design-id" },
  { label: "Fitur", path: "/tentang" },
  { label: "Harga", path: "/tentang" },
  { label: "Testimoni", path: "/tentang" },
  { label: "Tentang Kami", path: "/kontak" },
];

// ----------------------
// Komponen NavLink
// ----------------------
const NavLink: React.FC<NavLinkProps> = ({ label, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Box
      as={RouterLink}
      to={path}
      px={3}
      py={2}
      borderRadius="md"
      fontWeight={isActive ? "bold" : "medium"}
      bg={isActive ? "blue.50" : "transparent"}
      color={isActive ? "blue.600" : "gray.700"}
      _hover={{
        textDecoration: "none",
        bg: "blue.100",
        color: "blue.700",
      }}
    >
      {label}
    </Box>
  );
};
const ALink = chakra("a");
// ----------------------
// Komponen Navbar
// ----------------------
const NavbarNew: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="white"
      boxShadow="md"
      borderBottom="1px solid #eee"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 2, md: 6 }}
      >
        {/* Logo */}
        <Box fontSize="2xl" fontWeight="bold" color="blue.600">
          Kondangin
        </Box>

        {/* Desktop Menu */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
        <ALink href="#landing-id" color="black">
        Beranda</ALink>
        <ALink href="#fitur-id" color="black">
        Fitur</ALink>
        <ALink href="#design-id" color="black">
        Design</ALink>
        <ALink href="#harga-id" color="black">
        Harga</ALink>
        <ALink href="#reseller-id" color="black">
        Reseller</ALink>
        <ALink href="#testimoni-id" color="black">
        Testimoni</ALink>
          <Button
            as={RouterLink}
            to="/member"
            colorScheme="blue"
            size="md"
            borderRadius="full"
          >
            Buat Undangan
          </Button>
 

        </HStack>

        {/* Mobile Toggle */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ base: "flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box px={{ base: 4, md: 8 }} pb={4} display={{ md: "none" }}>
          <Stack spacing={3}>
            {Links.map((link) => (
              <NavLink key={link.path} {...link} />
            ))}
            <Button
              as={RouterLink}
              to="/member"
              colorScheme="blue"
              size="md"
              borderRadius="full"
              w="full"
            >
              Buat Undangan
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default NavbarNew;
