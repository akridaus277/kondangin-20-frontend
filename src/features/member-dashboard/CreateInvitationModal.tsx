import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
    FormHelperText,
    Text,
    Select,
  } from "@chakra-ui/react"
  import { useEffect, useState } from "react"
  import { useEventTypeStore } from "@/hooks/member-dashboard/useEventTypeStore"
  import { useInvitationStore } from "@/hooks/member-dashboard/useInvitationStore"
  import { useValidateCreateInvitationForm } from "@/validator/member-dashboard/useValidateCreateInvitationForm"
  
  import Loading from "@/components/ui/Loading"
  import Failed from "@/components/ui/Failed"
  import { useDashboard } from "@/hooks/member-dashboard/useDashboard" // ⬅️ Import hook
import { useToastMessage } from "@/hooks/global/useToastMessage"
  
  interface CreateInvitationModalProps {
    isOpen: boolean
    onClose: () => void
  }
  
  const CreateInvitationModal = ({ isOpen, onClose }: CreateInvitationModalProps) => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [subdomain, setSubdomain] = useState("")
    const [eventType, setEventType] = useState("")
  
    const { eventTypes, loading, error, fetchEventTypes } = useEventTypeStore()
    const { createInvitation, loading: submitting } = useInvitationStore()
    const { showToast } = useToastMessage()
    const { validate } = useValidateCreateInvitationForm()

  
    useEffect(() => {
        if (isOpen) {
            fetchEventTypes()
        }
        
      }, [fetchEventTypes, isOpen])
  
    const handleCreate = async () => {
        const formValues = { title, date, subdomain, eventType }
    
        const isValid = validate(formValues)
        if (!isValid) return
    
        try {
          await createInvitation(formValues)
          showToast("Undangan berhasil dibuat", "success")
          useDashboard.getState().fetchInvitations()
    
          // Reset form dan tutup modal
          setTitle("")
          setDate("")
          setSubdomain("")
          setEventType("")
          onClose()
        } catch (err: any) {
          showToast(err.message, "error")
        }
      }
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buat Undangan Baru</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading ? (
              <Loading />
            ) : error ? (
              <Failed message="Gagal memuat daftar jenis acara." />
            ) : (
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Nama Subdomain</FormLabel>
                  <FormHelperText mb={1}>
                    <Text fontSize="sm" color="gray.500" mt={1}>
                      Link undangan Anda akan menjadi:{" "}
                      <b>{subdomain || "namasubdomain"}.kondangin.org</b>
                    </Text>
                  </FormHelperText>
                  <Input
                    placeholder="misal: aliadina"
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value)}
                  />
                </FormControl>
  
                <FormControl isRequired>
                  <FormLabel>Jenis Acara</FormLabel>
                  <Select
                    placeholder="Pilih jenis acara"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                  >
                    {eventTypes.map((type: { code: string; name: string }) => (
                      <option key={type.code} value={type.code}>
                        {type.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
  
                <FormControl isRequired>
                  <FormLabel>Nama Acara</FormLabel>
                  <Input
                    placeholder="misal: Akad & Resepsi Ali & Adina"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>
  
                <FormControl isRequired>
                  <FormLabel>Tanggal Acara</FormLabel>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </FormControl>
              </VStack>
            )}
          </ModalBody>
  
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Batal
            </Button>
            <Button colorScheme="teal" onClick={handleCreate} isLoading={submitting}>
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }
  
  export default CreateInvitationModal
  