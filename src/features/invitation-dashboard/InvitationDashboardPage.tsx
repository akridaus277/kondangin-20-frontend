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
import InvitationNavbar from "@/components/layout/InvitationNavbar"
import { Outlet } from "react-router-dom"

const InvitationDashboardPage = ({ subdomain }: { subdomain: string }) => {
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
    <Flex direction="column" minHeight="100vh">
    <InvitationNavbar />
    <Box
      ml={{ base: 0, md: "250px" }}
      flex="1"
      p={6}
    >
      <Outlet />
    </Box>

  </Flex>
  )
}

export default InvitationDashboardPage
