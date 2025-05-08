import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Spinner,
  Alert,
  AlertIcon,
  useBreakpointValue,
  VStack,
  HStack,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
  useDisclosure 
} from "@chakra-ui/react"
import MemberNavbar from "@/components/layout/MemberNavbar"
import Footer from "@/components/layout/Footer"
import Sidebar from "@/components/layout/MemberSidebar"
import { useDashboard } from "@/hooks/member-dashboard/useDashboard" // ⬅️ Import hook
import { FiMoreVertical } from "react-icons/fi"
import { ComponentType, useEffect, useRef } from "react"
import CreateInvitationModal from "@/features/member-dashboard/CreateInvitationModal"

const MemberDashboardPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { invitations, loading, error, fetchInvitations } = useDashboard()

  const fetchedRef = useRef(false)

  useEffect(() => {
    if (!fetchedRef.current) {
      fetchInvitations()
      fetchedRef.current = true
    }
  }, [fetchInvitations])

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <MemberNavbar />


      <Flex flex="1" direction="row" position="relative" ml={{ base: 0, md: "250px" }}>

        <Container maxW="6xl" flex="1" py={10} px={{ base: 4, md: 10 }}>
          <Heading size="lg" mb={2}>
            Dashboard Member
          </Heading>
          <Text fontSize="md" color="gray.600" mb={8}>
            Selamat datang kembali! Kelola undangan Anda di sini.
          </Text>

          <Stack spacing={4} direction={{ base: "column", sm: "row" }} mb={8}>
            <Button colorScheme="teal" flex={1} onClick={onOpen}>
              Buat Undangan Baru
            </Button>

          </Stack>

          <Heading size="md" mb={4}>
            Undangan Anda
          </Heading>

          {loading ? (
            <Spinner size="lg" />
          ) : error ? (
            <Alert status="error" mb={6}>
              <AlertIcon />
              {error}
            </Alert>
          ) : (
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
              {invitations.map((invite, index) => (
                <Box
                key={index}
                borderWidth="1px"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              >
                <Image
                  src={invite.coverPhoto}
                  alt={invite.title}
                  objectFit="cover"
                  height="200px"
                  width="100%"
                />
              
                <Box p={4}>
                  <VStack align="start" spacing={2}>
                    <HStack width="100%">
                      <Box>
                        <Text fontWeight="bold" fontSize="lg">
                          {invite.title}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          {invite.mainEventDate}
                        </Text>
                        <HStack>
                          <Text
                            fontSize="sm"
                            color="gray.500"
                          >
                            Status:
                          </Text>
                          <Text
                            fontSize="sm"
                            color={invite.status === "active" ? "green.500" : "red.500"}
                          >
                            {invite.status.toUpperCase()}
                          </Text>
                        </HStack>
                        <HStack>
                          <Text fontSize="sm" color="gray.500">
                            Owner:
                          </Text>
                          <Text fontSize="sm" color="gray.500">
                            {invite.owner || "Belum ditentukan"}
                          </Text>
                        </HStack>
                        
                        
                      </Box>
              
                      <Spacer />
              
                      {/* Menu Tindakan Lain */}
                      <Menu>
                        <MenuButton
                          as={IconButton}
                          aria-label="Options"
                          icon={<Icon as={FiMoreVertical as ComponentType<any>} />}
                          variant="ghost"
                          size="sm"
                        />
                        <MenuList>
                          <MenuItem>Salin Link Undangan</MenuItem>
                          <MenuItem>Hapus Undangan</MenuItem>
                        </MenuList>
                      </Menu>
                    </HStack>
              
                    {/* Tombol Aksi */}
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={2} pt={2} w="100%">
                      <Button
                        size="sm"
                        colorScheme="blue"
                        w="100%"
                        onClick={() => console.log("Preview", invite.subdomain)}
                      >
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        colorScheme="teal"
                        variant="outline"
                        w="100%"
                        onClick={() => console.log("Edit", invite.subdomain)}
                      >
                        Edit
                      </Button>
                      {invite.status !== "active" && (
                        <Button
                          size="sm"
                          colorScheme="green"
                          w="100%"
                          onClick={() => console.log("Aktifkan", invite.subdomain)}
                        >
                          Aktifkan
                        </Button>
                      )}
                    </SimpleGrid>

                  </VStack>
                </Box>
              </Box>
              ))}
            </SimpleGrid>
          )}
        </Container>
      </Flex>

      {/* <Footer /> */}

      <CreateInvitationModal
        isOpen={isOpen}
        onClose={onClose}
      />

    </Box>
  )
}

export default MemberDashboardPage
