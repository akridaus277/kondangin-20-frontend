import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    VStack,
    useDisclosure,
    useBreakpointValue,
    IconButton,
    Text,
    HStack,
    useColorModeValue,
    Icon,
  } from "@chakra-ui/react"
  import { ComponentType, FC } from "react"
  import { FaHome, FaCogs, FaFileAlt, FaUserAlt, FaBars } from "react-icons/fa"
  
  const MemberSidebar: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const displaySidebar = useBreakpointValue({ base: "none", md: "block" })
    const bgSidebar = useColorModeValue("gray.800", "gray.900")
    const textColor = useColorModeValue("white", "gray.200")
  
    const sidebarItems = [
      { icon: FaHome as ComponentType<any>, label: "Dashboard", link: "/member/dashboard" },
      { icon: FaFileAlt as ComponentType<any>, label: "Buat Undangan", link: "/member/create-invitation" },
      { icon: FaCogs as ComponentType<any>, label: "Pengaturan", link: "/member/settings" },
      { icon: FaUserAlt as ComponentType<any>, label: "Profil", link: "/member/profile" },
    ]
  
    return (
      <>
        {/* Sidebar Trigger (Button for Mobile) */}
        <IconButton
          display={{ base: "block", md: "none" }}
          aria-label="Open Sidebar"
          icon={<Icon as={FaBars as ComponentType<any>} />}
          onClick={onOpen}
          colorScheme="teal"
          variant="outline"
          m={4}
        />
  
        {/* Sidebar Drawer for Mobile */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg={bgSidebar}>
              <DrawerCloseButton color={textColor} />
              <DrawerHeader color={textColor}>Dashboard Member</DrawerHeader>
  
              <DrawerBody>
                <VStack align="start" spacing={6}>
                  {sidebarItems.map(({ icon, label, link }) => (
                    <Button
                      key={label}
                      w="full"
                      variant="ghost"
                      color={textColor}
                      leftIcon={<Box as={icon} />}
                      justifyContent="start"
                      onClick={() => {
                        // Implement navigation here
                        onClose()
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
  
        {/* Sidebar Content for Desktop */}
        <Box
          display={displaySidebar}
          w="250px"
          bg={bgSidebar}
          color={textColor}
          p={6}
          position="sticky"
          top={0}
          height="100vh"
          borderRight="1px solid #ccc"
          boxShadow="md"
          borderRadius={"2xl"}
          mb={3}
        >
          <HStack justify="space-between" align="center" mb={8}>
            <Text fontSize="xl" fontWeight="bold">
              Kondangin
            </Text>
          </HStack>
  
          <VStack align="start" spacing={4}>
            {sidebarItems.map(({ icon, label, link }) => (
              <Button
                key={label}
                w="full"
                variant="ghost"
                color={textColor}
                leftIcon={<Box as={icon} />}
                justifyContent="start"
                _hover={{ bg: "teal.600" }}
                onClick={() => {
                  // Implement navigation here
                }}
              >
                {label}
              </Button>
            ))}
          </VStack>
        </Box>
      </>
    )
  }
  
  export default MemberSidebar
  