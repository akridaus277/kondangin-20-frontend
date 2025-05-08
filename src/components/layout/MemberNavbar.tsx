import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useBreakpointValue,
  Text,
  Icon,
} from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"
import { ComponentType } from "react"
import MemberSidebar from "./MemberSidebar" // Import komponen sidebar baru
import { useNavigate } from "react-router-dom"

const MemberNavigation = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  return (
    <>
      {/* Top Navbar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={4}
        py={3}
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.200"
        position="sticky"
        top="0"
        zIndex="1000"
      >
        <Flex align="center">
          {isMobile && (
            <IconButton
              icon={<Icon as={FaBars as ComponentType<any>} boxSize={4} />}
              aria-label="Open menu"
              onClick={onOpen}
              mr={2}
              colorScheme="teal"
              variant="outline"
            />
          )}
          <Text fontSize="xl" fontWeight="bold" color="teal.600">
            Kondangin
          </Text>
        </Flex>

        {/* Avatar Menu */}
        <Menu>
          <MenuButton>
            <Avatar size="sm" name="Nama User" />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => navigate("/member/profile")}>Edit Profil</MenuItem>
            <MenuItem onClick={() => alert("Logout")}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* Sidebar untuk Desktop */}
      {!isMobile && (
        <Box
          position="fixed"
          left={0}
          top="60px"
          w="250px"
          h="calc(100vh - 60px)"
          p={6}
          bg="gray.50"
          borderRight="1px solid #e2e8f0"
        >
          <MemberSidebar />
        </Box>
      )}

      {/* Drawer untuk Mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <MemberSidebar onItemClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MemberNavigation
