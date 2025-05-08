// src/components/invitation/MainEventForm.tsx

import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    VStack,
    Image,
    Heading,
  } from "@chakra-ui/react"
  import { useState } from "react"
  
  const MainEventForm = () => {
    const [title, setTitle] = useState("")
    const [coverPhoto, setCoverPhoto] = useState<File | null>(null)
    const [coverPreview, setCoverPreview] = useState<string>("")
    const [mainEventDate, setMainEventDate] = useState("")
    const [location, setLocation] = useState("")
  
    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        setCoverPhoto(file)
        setCoverPreview(URL.createObjectURL(file))
      }
    }
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // TODO: handle save logic (e.g. send to API)
      console.log({ title, coverPhoto, mainEventDate, location })
    }
  
    return (
        <Box
        w="full" maxW="8xl" mx="auto" p={6} bg="white" rounded="lg" shadow="md"
      >
        <Heading size="md" mb={4}>Update Acara Utama</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Nama Acara</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
      
            <FormControl>
              <FormLabel>Foto Sampul</FormLabel>
              <Input type="file" accept="image/*" onChange={handleCoverChange} />
              {coverPreview && (
                <Image src={coverPreview} alt="Preview Cover" mt={2} borderRadius="md" />
              )}
            </FormControl>
      
            <FormControl isRequired>
              <FormLabel>Tanggal Acara Utama</FormLabel>
              <Input
                type="datetime-local"
                value={mainEventDate}
                onChange={(e) => setMainEventDate(e.target.value)}
              />
            </FormControl>
      
            <FormControl isRequired>
              <FormLabel>Lokasi Acara</FormLabel>
              <Textarea value={location} onChange={(e) => setLocation(e.target.value)} />
            </FormControl>
      
            <Button colorScheme="teal" type="submit" mt={4}>
              Simpan Perubahan
            </Button>
          </VStack>
        </form>
      </Box>
      
    )
  }
  
  export default MainEventForm
  