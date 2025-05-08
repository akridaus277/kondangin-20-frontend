// src/components/member/MemberSidebar.tsx
import { VStack, Button, Icon } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { ComponentType } from "react"
import { FaHome, FaFileAlt, FaCogs, FaUserAlt } from "react-icons/fa"

const sidebarItems = [
  { icon: FaHome as ComponentType<any>, label: "Dashboard", link: "/member/dashboard" },
  { icon: FaFileAlt as ComponentType<any>, label: "Buat Undangan", link: "/member/create-invitation" },
  { icon: FaCogs as ComponentType<any>, label: "Pengaturan", link: "/member/settings" },
  { icon: FaUserAlt as ComponentType<any>, label: "Profil", link: "/member/profile" },
]

interface MemberSidebarProps {
  onItemClick?: () => void
}

const MemberSidebar = ({ onItemClick }: MemberSidebarProps) => {
  const navigate = useNavigate()

  return (
    <VStack align="start" spacing={3}>
      {sidebarItems.map(({ icon, label, link }) => (
        <Button
          key={label}
          leftIcon={<Icon as={icon} boxSize={4} />}
          justifyContent="start"
          variant="ghost"
          w="full"
          fontWeight="medium"
          onClick={() => {
            navigate(link)
            if (onItemClick) onItemClick()
          }}
          _hover={{ bg: "teal.500", color: "white" }}
        >
          {label}
        </Button>
      ))}
    </VStack>
  )
}

export default MemberSidebar
