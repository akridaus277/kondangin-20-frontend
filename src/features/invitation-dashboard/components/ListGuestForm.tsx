import React, { useState, useEffect, ComponentType } from "react"
import {
  Box,
  Button,
  FormControl,
  Input,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Flex,
  Spacer,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  chakra,
  Icon,
} from "@chakra-ui/react"
import { FaSearch, FaFilter, FaPlus, FaWhatsapp } from "react-icons/fa"

interface Guest {
  id: number
  name: string
  whatsapp: string
  statusShare: "shared" | "not_shared"
}

const ListGuestForm = () => {
  const [guests, setGuests] = useState<Guest[]>([])
  const [displayedGuests, setDisplayedGuests] = useState<Guest[]>([])
  const [searchKeyword, setSearchKeyword] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const totalPages = Math.ceil(displayedGuests.length / pageSize)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [filterTempStatus, setFilterTempStatus] = useState<string>(filterStatus)

  // Mock data for demo
  useEffect(() => {
    const mockGuests: Guest[] = Array.from({ length: 23 }, (_, i) => ({
      id: i + 1,
      name: `Tamu ${i + 1}`,
      whatsapp: `0812345678${String(i).padStart(2, "0")}`,
      statusShare: i % 2 === 0 ? "shared" : "not_shared",
    }))
    setGuests(mockGuests)
  }, [])

  // Apply search and filter to guests list and reset page to 1 after filtering
  useEffect(() => {
    let filtered = guests

    if (searchKeyword.trim() !== "") {
      filtered = filtered.filter((guest) =>
        guest.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        guest.whatsapp.includes(searchKeyword)
      )
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter((guest) => guest.statusShare === filterStatus)
    }

    setDisplayedGuests(filtered)
    setCurrentPage(1)
  }, [guests, searchKeyword, filterStatus])

  // Get current page guests data
  const paginatedGuests = displayedGuests.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  // Handler for applying filter from modal
  const applyFilter = () => {
    setFilterStatus(filterTempStatus)
    onClose()
  }

  // Handler for share whatsapp action
  const handleShareWhatsapp = (guest: Guest) => {
    const message = encodeURIComponent(`Halo ${guest.name}, ini undangan acara kami.`)
    const phone = guest.whatsapp.replace(/[^0-9]/g, "")
    const url = `https://wa.me/${phone}?text=${message}`
    window.open(url, "_blank")
  }

  return (
    <Box p={6} bg="white" rounded="lg" shadow="md" maxW="8xl" mx="auto" minH="600px">
      <HStack mb={4} spacing={4} wrap="wrap">
        <FormControl maxW="300px">
          <Input
            placeholder="Cari nama atau nomor WhatsApp"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </FormControl>
        <Button leftIcon={<Icon as={FaSearch as ComponentType<any>} />} colorScheme="blue">
          Cari
        </Button>
        <Button leftIcon={<Icon as={FaFilter as ComponentType<any>} />} onClick={onOpen} colorScheme="gray">
          Filter
        </Button>
        <Spacer />
        <Button leftIcon={<Icon as={FaPlus as ComponentType<any>} />} colorScheme="teal">
          Tambah
        </Button>
      </HStack>

      {/* Filter Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
 <ModalHeader>Filter Status Share</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Select
                value={filterTempStatus}
                onChange={(e) => setFilterTempStatus(e.target.value)}
              >
                <option value="all">Semua</option>
                <option value="shared">Sudah Share</option>
                <option value="not_shared">Belum Share</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={applyFilter}>
              Terapkan
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Batal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Row Size Selection */}
      <HStack mb={4} spacing={4}>
        <FormControl>
          <Select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value))
              setCurrentPage(1) // Reset to first page when page size changes
            }}
          >
            <option value={5}>5 Rows</option>
            <option value={10}>10 Rows</option>
            <option value={15}>15 Rows</option>
          </Select>
        </FormControl>
      </HStack>

      {/* Guest Table */}
      <Box overflowX="auto" mt={4}>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Nama Tamu</Th>
              <Th>Nomor WhatsApp</Th>
              <Th>Status Share</Th>
              <Th>Aksi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedGuests.length === 0 ? (
              <Tr>
                <Td colSpan={5} textAlign="center">
                  Tidak ada data tamu
                </Td>
              </Tr>
            ) : (
              paginatedGuests.map((guest, idx) => (
                <Tr key={guest.id}>
                  <Td>{(currentPage - 1) * pageSize + idx + 1}</Td>
                  <Td>{guest.name}</Td>
                  <Td>{guest.whatsapp}</Td>
                  <Td>
                    <chakra.span
                      color={guest.statusShare === "shared" ? "green.500" : "red.500"}
                      fontWeight="bold"
                    >
                      {guest.statusShare === "shared" ? "Sudah Share" : "Belum Share"}
                    </chakra.span>
                  </Td>
                  <Td>
                    <Button
                      size="sm"
                      colorScheme="whatsapp"
                      leftIcon={<Icon as={FaWhatsapp as ComponentType<any>} />}
                      onClick={() => handleShareWhatsapp(guest)}
                    >
                      Share WhatsApp
                    </Button>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>

      {/* Pagination Controls */}
      <Flex justify="center" mt={4} align="center" gap={2} flexWrap="wrap">
        <Button
          size="sm"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          isDisabled={currentPage === 1}
        >
          Sebelumnya
        </Button>
        {Array.from({ length: totalPages }, (_, i) => {
          const pageNumber = i + 1;
          if (pageNumber > 2 && pageNumber < totalPages - 1 && Math.abs(pageNumber - currentPage) > 1) {
            return null; // Skip pages in between
          }
          return (
            <Button
              key={pageNumber}
              size="sm"
              onClick={() => setCurrentPage(pageNumber)}
              variant={currentPage === pageNumber ? "solid" : "outline"}
            >
              {pageNumber}
            </Button>
          );
        })}
        {totalPages > 5 && currentPage < totalPages - 1 && (
          <Text>...</Text>
        )}
        {totalPages > 2 && currentPage < totalPages && (
          <Button
            size="sm"
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </Button>
        )}
        <Button
          size="sm"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          isDisabled={currentPage === totalPages}
        >
          Berikutnya
        </Button>
      </Flex>
    </Box>
  )
}

export default ListGuestForm