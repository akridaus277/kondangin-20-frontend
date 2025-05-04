import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Stack,
    Button,
    Link as ChakraLink,
  } from "@chakra-ui/react"
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
  import { Link as RouterLink } from "react-router-dom"
  
  const Links = [
    { label: "Beranda", path: "/" },
    { label: "Fitur", path: "#fitur" },
    { label: "Harga", path: "#harga" },
    { label: "Masuk", path: "/login" },
  ]
  
  const NavLink = ({ label, path }: { label: string; path: string }) => (
    <ChakraLink
      as={RouterLink}
      to={path}
      px={3}
      py={2}
      rounded="md"
      fontWeight="medium"
      _hover={{ textDecoration: "none", bg: "gray.100" }}
    >
      {label}
    </ChakraLink>
  )
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box bg="white" px={4} shadow="sm" position="sticky" top={0} zIndex={10}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box fontWeight="bold" fontSize="xl">
            Kondangin
          </Box>
  
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
  
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.path} {...link} />
            ))}
            <Button
              as={RouterLink}
              to="/member"
              colorScheme="teal"
              size="sm"
              ml={4}
            >
              Dashboard
            </Button>
          </HStack>
        </Flex>
  
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.path} {...link} />
              ))}
              <Button as={RouterLink} to="/member" colorScheme="teal" size="sm">
                Dashboard
              </Button>
            </Stack>
          </Box>
        )}
      </Box>
    )
  }
  
  export default Navbar
  