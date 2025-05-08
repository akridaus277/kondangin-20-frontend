// src/components/member/MemberSidebar.tsx
import { VStack, Button, Icon, Box, Text, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { ComponentType } from "react"
import { FaCalendarAlt, FaUserFriends, FaListUl, FaImage, FaPhotoVideo, FaVideo, FaCommentDots, FaCogs, FaGift, FaBook, FaUser } from "react-icons/fa"

const sidebarItems = [
  { icon: FaCalendarAlt as ComponentType<any>, label: "Acara Utama", link: "/dashboard/main-event" },
  { icon: FaUserFriends as ComponentType<any>, label: "Mempelai", link: "/dashboard/bride-groom" },
  { icon: FaListUl as ComponentType<any>, label: "Susunan Acara", link: "/dashboard/event-schedule" },
  { icon: FaImage as ComponentType<any>, label: "Foto Template", link: "/dashboard/photo-template" },
  { icon: FaPhotoVideo as ComponentType<any>, label: "Galeri Foto", link: "/dashboard/photo-gallery" },
  { icon: FaVideo as ComponentType<any>, label: "Galeri Video", link: "/dashboard/video-gallery" },
  { icon: FaCommentDots as ComponentType<any>, label: "Ucapan & Kata kata", link: "/dashboard/utterance" },
  { icon: FaGift as ComponentType<any>, label: "Hadiah", link: "/dashboard/digital-gift" },
  { icon: FaUser  as ComponentType<any>, label: "List Tamu", link: "/dashboard/guest-list" }, 
  { icon: FaBook as ComponentType<any>, label: "Buku Tamu", link: "/guest-book" },
  { icon: FaCogs as ComponentType<any>, label: "Setting", link: "/settings" }
];

interface InvitationSidebarProps {
  onItemClick?: () => void
}

const InvitationSidebar = ({ onItemClick }: InvitationSidebarProps) => {
  const navigate = useNavigate()

  return (
    <VStack align="start" spacing={4}>
      <Box mb={4}>
        <Heading size="md" color="teal.600" mb={1}>
          Invitation Dashboard
        </Heading>
        <Text fontSize="sm" color="gray.600">
          Subdomain: <Text as="span" fontWeight="semibold">arganisa</Text>
        </Text>
      </Box>

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

export default InvitationSidebar
